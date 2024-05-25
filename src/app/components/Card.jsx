'use client'
import React from 'react'
import Icon from './form/Icon'
import assets from '../assets/assets'
import { Button } from '@nextui-org/react'

import { ROUTES } from '../constants'
import { useRouter } from 'next/navigation'

function Card({ title, description, routeId }) {
  const router = useRouter()
  return (
    <div className='w-[525px] bg-white  p-[15px]'>
      <Icon
        imageWidth={'w-full'}
        image={
          'https://firebasestorage.googleapis.com/v0/b/society-management-syste-446c5.appspot.com/o/society%2F360_F_461470323_6TMQSkCCs9XQoTtyer8VCsFypxwRiDGU.jpg?alt=media&token=736c0d79-baa8-4f72-800f-b8bda8f57142'
        }
      />
      <h1 className='text-[20px] mt-3 font-noto-sans font-[500]'>{title}</h1>
      <p className='mt-4 font-noto-sans line-clamp-3 text-gray-800 '>{description}</p>
      <div onClick={() => router.push(`${ROUTES.society}/${routeId}`)} className='text-[20px] mt-5 mb-4 font-noto-sans underline cursor-pointer'>
        READ MORE
      </div>
    </div>
  )
}

export default Card
