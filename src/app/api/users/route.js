import { connect } from '@/app/db/connect'
import { checkAuth } from '../middleware/auth'
import { NextResponse } from 'next/server'
import Users from '@/app/models/Users'
import Society from '@/app/models/Society'
import Department from '@/app/models/Department'

export const dynamic = 'force-dynamic'
export const GET = async req => {
  try {
    await connect()
    const url = new URL(req.url)
    const searchQuery = url.searchParams.get('searchQuery')
    const status = url.searchParams.get('status')
    const society = url.searchParams.get('society')

    console.log('societyqweqweqwe :', society)

    Society
    Department
    const users = await Users.find({
      $and: [
        { role: { $ne: 'owner' } },
        {
          $or: [{ firstname: new RegExp(searchQuery, 'i') }, { lastname: new RegExp(searchQuery, 'i') }, { email: new RegExp(searchQuery, 'i') }],
        },
        { isVerified: new RegExp(status, 'i') },
        society !== '' ? { society: society } : {},
      ],
    })
      .populate('society department')
      .select('-password')

    if (!users.length) return NextResponse.json({ success: false, message: 'No data found' }, { status: 404 })

    return NextResponse.json({ success: true, users }, { status: 200 })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ message: 'Something went wrong', error }, { status: 500 })
  }
}
