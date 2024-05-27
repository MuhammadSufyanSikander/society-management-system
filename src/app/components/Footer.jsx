import React from 'react'
import Icon from './form/Icon'
import assets from '../assets/assets'
import Link from 'next/link'
import { ROUTES } from '../constants'

function Footer() {
  return null
  return (
    <div>
      <div className='bg-blue-700'>
        <div className=' w-[60%] flex justify-between text-[12px] font-noto-sans p-[30px] text-white'>
          <Icon imageHeight={'w-[250px] h-[80px]'} image={assets.images.uniLogo} />
          <div className='flex flex-col gap-2'>
            <Link href={ROUTES.aboutUs}>About us</Link>
            <Link href={ROUTES.societies}>Our societies</Link>
            <Link href={ROUTES.events}>Events</Link>
          </div>
          <div className='flex flex-col gap-2'>
            <Link href={ROUTES.faq}>FAQ</Link>
            <Link href={ROUTES.feedbackForm}>Feedback</Link>
            <Link href={ROUTES.contactUs}>Contact us</Link>
          </div>
        </div>
      </div>
      <div className='bg-blue-950 text-[12px] flex gap-[100px] text-white p-[30px]'>
        <div className=''>
          <p>Government College University,</p>
          <p>Allama Iqbal Road, Faislabad</p>
        </div>
        <div className='flex gap-7'>
          <Icon imageHeight={'w-[40px] h-[40px]'} image={assets.icons.facebook} />
          <Icon imageHeight={'w-[40px] h-[40px]'} image={assets.icons.twitter} />
          <Icon imageHeight={'w-[42px] h-[42px]'} image={assets.icons.linkedin} />
        </div>
      </div>
    </div>
  )
}

export default Footer
