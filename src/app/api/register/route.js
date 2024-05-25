import { NextResponse, NextRequest } from 'next/server'
import Users from '@/app/models/Users'
import bcrypt from 'bcrypt'
import { connect } from '@/app/db/connect'
import jwt from 'jsonwebtoken'
import Society from '@/app/models/Society'
import Department from '@/app/models/Department'

export const POST = async req => {
  const body = await req.json()
  try {
    await connect()

    console.log('bodydddd :', body)

    const { email, password, society, department } = body

    const found = await Users.findOne({
      $and: [{ email }, { society }],
    })

    if (found) return NextResponse.json({ success: false, message: 'Email already exist' }, { status: 409 })

    const hash = await bcrypt.hash(password, 10)

    Society
    Department
    const user = new Users({ ...body, society: society, department: department, password: hash })

    const savedUser = await (await user.save()).populate('society department')

    const userObject = savedUser.toObject()

    delete userObject.password

    const token = jwt.sign(JSON.stringify(userObject), 'secretkey')

    return NextResponse.json({ succes: true, user: userObject, token }, { status: 200 })
  } catch (error) {
    console.log('erroror:', error)
    return NextResponse.json({ message: 'Something went wrong', error }, { status: 500 })
  }
}
