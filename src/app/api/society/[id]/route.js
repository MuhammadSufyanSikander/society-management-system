import { connect } from '@/app/db/connect'
import { checkAuth } from '../../middleware/auth'
import { NextResponse } from 'next/server'
import Society from '@/app/models/Society'

export const PUT = async (req, { params }) => {
  const body = await req.json()
  const { id } = params

  const token = req.headers.get('Authorization')?.split(' ')?.[1]

  try {
    await connect()

    const { success: isAuthenticated, message } = await checkAuth({ token, role: ['owner'] })

    if (!isAuthenticated) return NextResponse.json({ success: false, message: message }, { status: 401 })

    const updatedSociety = await Society.findOneAndUpdate({ _id: id }, body, { new: true })

    if (!updatedSociety) return NextResponse.json({ success: false, message: 'Society not found' }, { status: 404 })

    return NextResponse.json({ success: true, society: updatedSociety }, { status: 200 })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ message: 'Something went wrong', error }, { status: 500 })
  }
}

export const DELETE = async (req, { params }) => {
  const { id } = params

  const token = req.headers.get('Authorization')?.split(' ')?.[1]

  try {
    await connect()

    const { success: isAuthenticated, message } = await checkAuth({ token, role: ['owner'] })

    if (!isAuthenticated) return NextResponse.json({ success: false, message: message }, { status: 401 })

    const deletedSociety = await Society.findOneAndDelete({ _id: id })

    if (!deletedSociety) return NextResponse.json({ success: false, message: 'Society not found' }, { status: 404 })

    return NextResponse.json({ success: true, society: deletedSociety }, { status: 200 })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ message: 'Something went wrong', error }, { status: 500 })
  }
}
