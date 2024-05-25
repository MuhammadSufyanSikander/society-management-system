import { NextResponse, NextRequest } from 'next/server'

import { connect } from '@/app/db/connect'
import Society from '@/app/models/Society'
import { checkAuth } from '../middleware/auth'

export const POST = async (req, res) => {
  const body = await req.json()

  try {
    await connect()

    const found = await Society.findOne({ societyName: body.societyName })

    if (!found) return NextResponse.json({ success: false, message: 'society already exist' }, { status: 409 })

    const society = new Society(body)

    const response = await society.save()

    return NextResponse.json({ success: true, society: response }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: 'Something went wrong', error }, { status: 500 })
  }
}
