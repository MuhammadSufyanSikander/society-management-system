import { NextResponse, NextRequest } from 'next/server'

import { connect } from '@/app/db/connect'
import Society from '@/app/models/Society'
import { checkAuth } from '../middleware/auth'

export const POST = async (req, res) => {
  const body = await req.json()

  const token = req.headers.get('Authorization')?.split(' ')?.[1]

  try {
    await connect()

    const { success: isAuthenticated, message } = await checkAuth({ token, role: ['owner'] })

    if (!isAuthenticated) return NextResponse.json({ success: false, message: message }, { status: 401 })

    const society = new Society(body)

    const response = await society.save()

    return NextResponse.json({ success: true, society: response }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: 'Something went wrong', error }, { status: 500 })
  }
}
