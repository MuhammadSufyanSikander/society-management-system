'use client'
import assets from '@/app/assets/assets'
import Accordion from '@/app/components/Accordian'
import Icon from '@/app/components/form/Icon'
import { AccordionItem, Divider } from '@nextui-org/react'

import React from 'react'

function page() {
  const defaultContent =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  return (
    <div>
      <div className='w-full px-32  shadow-sm'>
        <div className='flex gap-5  justify-between items-center'>
          <div className=''>
            <h1 className='text-[35px] font-bold'>FAQs</h1>
            <p className='text-[14px] w-[80%]'>Have questions? Here you will find the answers most valued by our partners, along with step by step instruction and support.</p>
          </div>
          <Icon image={assets.images.faq} imageHeight={'w-[40%] h-[40%]'} />
        </div>
      </div>
    <div className='px-10 flex flex-col justify-center items-center w-[50%]'>
      <h1 className='text-[20px]  items-start font-bold py-[10px]'>About Us</h1>
      <Divider className='w-[97%]'/>
    <Accordion  isCompact/>
      
   
    </div>
    </div>
  )
}

export default page
