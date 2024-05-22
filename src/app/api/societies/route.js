import { NextResponse, NextRequest } from 'next/server'

import { connect } from '@/app/db/connect'
import Society from '@/app/models/Society'
import { checkAuth } from '../middleware/auth'
import Department from '@/app/models/Department'
import Users from '@/app/models/Users'

export const GET = async (req, res) => {
  try {
    await connect()

    Users
    Department
    const societies = await Society.find().populate('department admin')

    return NextResponse.json({ success: true, societies }, { status: 200 })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ message: 'Something went wrong', error }, { status: 500 })
  }
}
