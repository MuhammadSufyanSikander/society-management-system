import { NextResponse, NextRequest } from 'next/server'
import Users from '@/app/models/Users'
import bcrypt from 'bcrypt'
import { connect } from '@/app/db/connect'
import jwt from 'jsonwebtoken'
import mongoose from 'mongoose'
import Society from '@/app/models/Society'
import Department from '@/app/models/Department'

export const POST = async req => {
  const body = await req.json()
  try {
    await connect()

    console.log('bodydddd :', body)

    const { password, society, department } = body
    const isValid = mongoose.Types.ObjectId.isValid(society)
    const isValidOne = mongoose.Types.ObjectId.isValid(department)

    console.log('is valid id zaid :', isValid, isValidOne, society, department)

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
