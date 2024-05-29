import { NextResponse, NextRequest } from 'next/server'

import { connect } from '@/app/db/connect'
import Society from '@/app/models/Society'

export const PUT = async (req, { params }) => {
  const body = await req.json()
  const { id } = params

  try {
    await connect()

    const society = await Society.findOneAndUpdate({ _id: id }, body)

    if (!society) return NextResponse.json({ success: false, message: 'society does not exist' }, { status: 404 })

    return NextResponse.json({ success: true, society }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: 'Something went wrong', error }, { status: 500 })
  }
}
