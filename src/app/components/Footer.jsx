import React from 'react'
import Icon from './form/Icon'
import assets from '../assets/assets'

function Footer() {
  return (
    <div>
      <div className='bg-blue-700'>
        <div className=' w-[60%] flex justify-between text-[12px] font-noto-sans p-[30px] text-white'>
          <Icon imageHeight={'w-[250px] h-[80px]'} image={assets.images.uniLogo} />
          <div className='flex flex-col gap-2'>
            <p>About us</p>
            <p>Our societies</p>
            <p>Events</p>
          </div>
          <div className='flex flex-col gap-2'>
            <p>FAQ</p>
            <p>Feedback</p>
            <p>Eligibility</p>
            <p>Contact us</p>
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
