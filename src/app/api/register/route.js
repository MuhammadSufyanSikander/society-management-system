import { NextResponse, NextRequest } from 'next/server'
import Users from '@/app/models/Users'
import bcrypt from 'bcrypt'
import { connect } from '@/app/db/connect'
import jwt from 'jsonwebtoken'

export const POST = async req => {
  const body = await req.json()
  try {
    await connect()

    const { password } = body

    const hash = await bcrypt.hash(password, 10)

    const user = new Users({ ...body, password: hash })

    const savedUser = await user.save()

    const userObject = savedUser.toObject()

    delete userObject.password

    const token = jwt.sign(JSON.stringify(userObject), 'secretkey')

    return NextResponse.json({ succes: true, user: userObject, token }, { status: 200 })
  } catch (error) {
    console.log('erroror:', error)
    return NextResponse.json({ message: 'Something went wrong', error }, { status: 500 })
  }
}
