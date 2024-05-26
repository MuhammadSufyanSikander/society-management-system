import { NextResponse, NextRequest } from 'next/server'

import { connect } from '@/app/db/connect'
import Users from '@/app/models/Users'

export const dynamic = 'force-dynamic'
export const GET = async (req, res) => {
  try {
    await connect()

    const owners = await Users.find({
      role: 'owner',
    })

    return NextResponse.json({ success: true, owners }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: 'Something went wrong', error }, { status: 500 })
  }
}
