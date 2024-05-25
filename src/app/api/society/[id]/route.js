import { connect } from '@/app/db/connect'
import { checkAuth } from '../../middleware/auth'
import { NextResponse } from 'next/server'
import Society from '@/app/models/Society'
import Department from '@/app/models/Department'
import Users from '@/app/models/Users'

export const GET = async (req, { params }) => {
  const { id } = params

  try {
    await connect()

    const society = await Society.findOne({ _id: id })

    if (!society) return NextResponse.json({ success: false, message: 'Society not found' }, { status: 404 })

    return NextResponse.json({ success: true, society }, { status: 200 })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ message: 'Something went wrong', error }, { status: 500 })
  }
}

export const PUT = async (req, { params }) => {
  const body = await req.json()
  const { id } = params

  try {
    await connect()

    const found = await Society.findOne({ societyName: body.societyName })

    if (found) return NextResponse.json({ success: false, message: 'society already exist' }, { status: 409 })

    Department
    Users
    const updatedSociety = await Society.findOneAndUpdate({ _id: id }, body, { new: true }).populate('department admin')

    if (!updatedSociety) return NextResponse.json({ success: false, message: 'Society not found' }, { status: 404 })

    return NextResponse.json({ success: true, society: updatedSociety }, { status: 200 })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ message: 'Something went wrong', error }, { status: 500 })
  }
}

export const DELETE = async (req, { params }) => {
  const { id } = params

  try {
    await connect()

    const deletedSociety = await Society.findOneAndDelete({ _id: id })

    if (!deletedSociety) return NextResponse.json({ success: false, message: 'Society not found' }, { status: 404 })

    return NextResponse.json({ success: true, society: deletedSociety }, { status: 200 })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ message: 'Something went wrong', error }, { status: 500 })
  }
}
