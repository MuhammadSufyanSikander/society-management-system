'use client'
import React from 'react'
import Icon from './form/Icon'
import assets from '../assets/assets'
import { Button } from '@nextui-org/react'

import { ROUTES } from '../constants'
import { useRouter } from 'next/navigation'

function Card() {
  const router = useRouter()
  return (
    <div className='w-[525px] bg-white  p-[15px]'>
      <Icon imageWidth={'w-full'} image={assets.images.societylogo} />
      <h1 className='text-[20px] mt-3 font-noto-sans font-[500]'>Software Engineering Society</h1>
      <p className='mt-4 font-noto-sans line-clamp-3 text-gray-800 '>
        The Software Engineering Society is an initiative aimed at bridging the gap between industry and academia in the field of software engineering. The society was created with the goal of the
      </p>
      <div onClick={() => router.push(ROUTES.society)} className='text-[20px] mt-5 mb-4 font-noto-sans underline cursor-pointer'>
        READ MORE
      </div>
    </div>
  )
}

export default Card
