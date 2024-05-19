import assets from '@/app/assets/assets'
import Accordion from '@/app/components/Accordian'
import Icon from '@/app/components/form/Icon'

import React from 'react'

function page() {
  const defaultContent =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  return (
    <div>
      <div className='w-full px-32  shadow-xl'>
        <div className='flex gap-5  justify-between items-center'>
          <div className=''>
            <h1 className='text-[35px] font-bold'>FAQs</h1>
            <p className='text-[14px] w-[80%]'>Have questions? Here you will find the answers most valued by our partners, along with step by step instruction and support.</p>
          </div>
          <Icon image={assets.images.faq} imageHeight={'w-[40%] h-[40%]'} />
        </div>
      </div>
    
     {/* <Accordion/> */}
     
    </div>
  )
}

export default page
