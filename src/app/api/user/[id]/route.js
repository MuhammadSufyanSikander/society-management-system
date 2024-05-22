import { connect } from '@/app/db/connect'
import { checkAuth } from '../../middleware/auth'
import { NextResponse } from 'next/server'
import Users from '@/app/models/Users'
import jwt from 'jsonwebtoken'
import Society from '@/app/models/Society'
import Department from '@/app/models/Department'

export const PUT = async (req, { params }) => {
  const body = await req.json()
  const { id } = params

  const token = req.headers.get('Authorization')?.split(' ')?.[1]

  try {
    await connect()

    const { success: isAuthenticated, message } = await checkAuth({ token, role: ['owner'] })

    if (!isAuthenticated) return NextResponse.json({ success: false, message: message }, { status: 401 })

    Society
    Department
    const updatedUser = await Users.findOneAndUpdate({ _id: id }, body, { new: true }).select('-password').populate('society department')

    if (!updatedUser) return NextResponse.json({ success: false, message: 'Society not found' }, { status: 404 })

    const updatedToken = jwt.sign(JSON.stringify(updatedUser), 'secretkey')

    return NextResponse.json({ success: true, user: updatedUser, token: updatedToken }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: 'Something went wrong', error }, { status: 500 })
  }
}
