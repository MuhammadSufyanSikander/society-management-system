import { NextResponse } from 'next/server'

import { connect } from '@/app/db/connect'
import Gallery from '@/app/models/Gallery'

export const dynamic = 'force-dynamic'
export const GET = async (req, res) => {
  try {
    await connect()

    const gallery = await Gallery.find()

    return NextResponse.json({ success: true, gallery }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: 'Something went wrong', error }, { status: 500 })
  }
}

export const POST = async (req, res) => {
  const body = await req.json()
  try {
    await connect()

    const gallery = new Gallery(body)

    const response = await gallery.save()

    return NextResponse.json({ success: true, image: response }, { status: 200 })
  } catch (error) {
    console.log('error  :', error)
    return NextResponse.json({ message: 'Something went wrong', error }, { status: 500 })
  }
}
