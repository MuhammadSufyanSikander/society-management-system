import { connect } from '@/app/db/connect'
import Event from '@/app/models/Event'
import Society from '@/app/models/Society'
import { NextResponse } from 'next/server'

export const GET = async (req, { params }) => {
  const { event_id } = params
  try {
    await connect()

    Society
    const event = await Event.findOne({ _id: event_id }).populate('society')

    if (!event) return NextResponse.json({ success: false, message: 'Event not found' }, { status: 404 })

    return NextResponse.json({ success: true, event: event }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: 'Something went wrong', error }, { status: 500 })
  }
}
export const PUT = async (req, { params }) => {
  const body = await req.json()
  const { event_id } = params
  try {
    await connect()

    const updatedEvent = await Event.findOneAndUpdate({ _id: event_id }, body, { new: true })

    if (!updatedEvent) return NextResponse.json({ success: false, message: 'Event not found' }, { status: 404 })

    return NextResponse.json({ success: true, event: updatedEvent }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: 'Something went wrong', error }, { status: 500 })
  }
}

export const DELETE = async (req, { params }) => {
  const { event_id } = params
  try {
    await connect()

    const deletedEvent = await Event.findOneAndDelete({ _id: event_id })

    if (!deletedEvent) return NextResponse.json({ success: false, message: 'Event not found' }, { status: 404 })

    return NextResponse.json({ success: true, event: deletedEvent }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: 'Something went wrong', error }, { status: 500 })
  }
}
