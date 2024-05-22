import { NextResponse } from 'next/server'

import { connect } from '@/app/db/connect'
import Society from '@/app/models/Society'
import Event from '@/app/models/Event'

export const GET = async (req, res) => {
  try {
    await connect()

    Society
    const events = await Event.find().populate('society')

    return NextResponse.json({ success: true, events }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: 'Something went wrong', error }, { status: 500 })
  }
}
