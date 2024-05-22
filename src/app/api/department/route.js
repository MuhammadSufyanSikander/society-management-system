import { connect } from '@/app/db/connect'
import Department from '@/app/models/Department'
import { NextResponse } from 'next/server'

export const POST = async (req, res) => {
  const body = await req.json()
  try {
    await connect()

    const department = new Department(body)

    const response = await department.save()

    return NextResponse.json({ success: true, department: response }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: 'Something went wrong', error }, { status: 500 })
  }
}
