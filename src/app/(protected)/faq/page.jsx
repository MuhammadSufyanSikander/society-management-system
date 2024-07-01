'use client'
import assets from '@/app/assets/assets'
import Accordion from '@/app/components/Accordian'
import Icon from '@/app/components/form/Icon'
import { AccordionItem, Divider } from '@nextui-org/react'
import React from 'react'

function Page() {
  const defaultContent =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

  return (
    <div>
      <div className='w-full px-4 md:px-32 shadow-sm'>
        <div className='flex flex-col md:flex-row gap-5 justify-between items-center'>
          <Icon image={assets.images.faq} imageHeight='w-[50%] h-[50%] md:w-[40%] md:h-[40%]' />
          <div className='text-center md:text-left'>
            <h1 className='text-[28px] md:text-[35px] font-bold'>FAQs</h1>
            <p className='text-[14px] w-full md:w-[80%]'> Test Have questions? Here you will find the answers most valued by our partners, along with step by step instruction and support.</p>
          </div>
        </div>
      </div>
      <div className='px-4 md:px-10 flex flex-col justify-center items-center'>
        <div className='w-full md:w-[50%]'>
          <h1 className='text-[20px] items-start font-bold py-[10px]'>FAQs</h1>
          <Divider className='w-full md:w-[97%]' />
          <Accordion isCompact />
        </div>
      </div>
    </div>
  )
}

export default Page
