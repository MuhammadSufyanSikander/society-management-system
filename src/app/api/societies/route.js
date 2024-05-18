import { NextResponse, NextRequest } from 'next/server'

import { connect } from '@/app/db/connect'
import Society from '@/app/models/Society'
import { checkAuth } from '../middleware/auth'

export const GET = async (req, res) => {
  const token = req.headers.get('Authorization')?.split(' ')?.[1]

  try {
    await connect()

    const { success: isAuthenticated, message } = await checkAuth({ token, role: ['owner'] })

    if (!isAuthenticated) return NextResponse.json({ success: false, message: message }, { status: 401 })

    const societies = await Society.find().populate('department')

    return NextResponse.json({ success: true, societies }, { status: 200 })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ message: 'Something went wrong', error }, { status: 500 })
  }
}
