import { NextResponse } from 'next/server'

import { connect } from '@/app/db/connect'
import Gallery from '@/app/models/Gallery'

export const DELETE = async (req, { params }) => {
  const { id } = params
  try {
    await connect()

    const gallery = await Gallery.findOneAndDelete({ _id: id })

    if (!gallery) return NextResponse.json({ success: false, message: 'Event not found' }, { status: 404 })

    return NextResponse.json({ success: true, gallery }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: 'Something went wrong', error }, { status: 500 })
  }
}
