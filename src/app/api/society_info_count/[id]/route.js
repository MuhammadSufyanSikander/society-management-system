import { connect } from '@/app/db/connect'
import { NextResponse } from 'next/server'
import Users from '@/app/models/Users'
import Event from '@/app/models/Event'

export const dynamic = 'force-dynamic'
export const GET = async (req, { params }) => {
  const { id } = params

  try {
    await connect()

    const users = await Users.find({ society: id })
    const events = await Event.find({ society: id })

    return NextResponse.json({ success: true, users_count: users.length, events_count: events.length }, { status: 200 })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ message: 'Something went wrong', error }, { status: 500 })
  }
}
