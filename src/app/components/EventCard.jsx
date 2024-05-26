'use client'
import React from 'react'
import Icon from './form/Icon'
import assets from '../assets/assets'
import { useRouter } from 'next/navigation'
import { ROUTES } from '../constants'
import moment from 'moment'

function EventCard({ item }) {
  const router = useRouter()
  const { location, time, title, _id } = item

  return (
    <div className='w-[280px] mt-[20px] shadow-2xl'>
      <Icon imageHeight={'w-[280px]'} image={assets.images.rector} />
      <div className='p-[15px] flex flex-col gap-[10px]'>
        <h1 className='font-semibold text-[20px]'>{title}</h1>
        <div className='flex mt-[7px] gap-3'>
          <Icon imageHeight={'w-[20px] h-[20px]'} image={assets.icons.calendar} />
          <p className='text-[14px] font-noto-sans font-[500] text-gray-100'>{moment(time).format('MMMM DD, YYYY')}</p>
        </div>
        <div className='flex mt-[7px] gap-3'>
          <Icon imageHeight={'w-[20px] h-[20px]'} image={assets.icons.darkclock} />
          <p className='text-[14px] font-noto-sans font-[500] text-gray-100'>{moment(time).format('h:mm A')}</p>
        </div>
        <div className='flex mt-[7px] gap-3'>
          <Icon imageHeight={'w-[20px] h-[20px]'} image={assets.icons.location} />
          <p className='text-[14px] font-noto-sans font-[500] text-gray-100'>{location}</p>
        </div>
        <div onClick={() => router.push(ROUTES.event + '/' + _id)} className='flex hover:underline cursor-pointer gap-[8px] items-center'>
          <h1 className='text-[20px] text-blue-800 font-semibold'>Full details</h1>
          <Icon imageHeight={'w-[20px] h-[p20x]'} image={assets.icons.info} />
        </div>
      </div>
    </div>
  )
}

export default EventCard
