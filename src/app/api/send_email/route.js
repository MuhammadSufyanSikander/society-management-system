import { connect } from '@/app/db/connect'
import { sendEmail } from '@/app/utils/email'
import { NextResponse } from 'next/server'

export const POST = async (req, res) => {
  const body = await req.json()
  try {
    await connect()

    const { from, recipients, subject, text } = body

    const result = await sendEmail({ from, recipients, subject, text })

    return NextResponse.json({ success: true, message: 'email sent successfully' }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: 'Something went wrong', error }, { status: 500 })
  }
}
