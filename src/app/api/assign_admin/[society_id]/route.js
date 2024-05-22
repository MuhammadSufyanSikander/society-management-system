import { connect } from '@/app/db/connect'
import { checkAuth } from '../../middleware/auth'
import { NextResponse } from 'next/server'
import Users from '@/app/models/Users'
import jwt from 'jsonwebtoken'
import Society from '@/app/models/Society'
import Department from '@/app/models/Department'

export const PUT = async (req, { params }) => {
  const body = await req.json()
  const { society_id } = params

  try {
    await connect()

    Users
    Department
    const updatedSociety = await Society.findOneAndUpdate({ _id: society_id }, body, { new: true }).populate('admin department')

    if (!updatedSociety) return NextResponse.json({ success: false, message: 'Society not found' }, { status: 404 })

    return NextResponse.json({ success: true, society: updatedSociety }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: 'Something went wrong', error }, { status: 500 })
  }
}
