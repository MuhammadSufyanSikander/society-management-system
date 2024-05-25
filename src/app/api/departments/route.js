import { NextResponse } from 'next/server'

import { connect } from '@/app/db/connect'
import Department from '@/app/models/Department'

export const dynamic = 'force-dynamic'
export const GET = async (req, res) => {
  try {
    await connect()

    const departments = await Department.find()

    return NextResponse.json({ success: true, departments }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: 'Something went wrong', error }, { status: 500 })
  }
}
