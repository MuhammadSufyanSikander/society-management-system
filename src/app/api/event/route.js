import { connect } from '@/app/db/connect'
import Event from '@/app/models/Event'
import { NextResponse } from 'next/server'

export const POST = async (req, res) => {
  const body = await req.json()
  try {
    await connect()

    const event = new Event(body)

    const response = await event.save()

    return NextResponse.json({ success: true, event: response }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: 'Something went wrong', error }, { status: 500 })
  }
}
