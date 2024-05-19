import { NextResponse, NextRequest } from 'next/server'
import Users from '@/app/models/Users'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { connect } from '@/app/db/connect'

export const POST = async (req, res) => {
  const body = await req.json()

  try {
    await connect()

    const { email, password } = body

    const user = await Users.findOne({ email })

    if (!user) return NextResponse.json({ message: 'User not found' }, { status: 404 })

    const isValid = await bcrypt.compare(password, user.password)

    if (!isValid) return NextResponse.json({ message: 'Password is not correct' }, { status: 404 })

    const userObject = user.toObject()

    delete userObject.password

    const token = jwt.sign(JSON.stringify(userObject), 'secretkey')

    return NextResponse.json({ success: true, user: userObject, token }, { status: 200 })
  } catch (error) {
    console.log('erroror:', error)
    return NextResponse.json({ message: 'Something went wrong', error }, { status: 500 })
  }
}
