import React from 'react'
import Icon from './form/Icon'
import assets from '../assets/assets'

function FlexCard() {
  return (
    <div className='bg-royalblue flex justify-around text-white font-noto-sans rounded-[8px] p-[30px]'>
      <div className='flex w-fit justify-center items-center gap-3 flex-col'>
        <Icon imageHeight={'w-[40px] h-[40px]'} image={assets.icons.members} />
        <div className='font-bold text-[40px]'>27</div>
        <div className='font-bold text-[20px]'>Members</div>
      </div>

      <div className='flex w-fit justify-center items-center gap-3 flex-col'>
        <Icon imageHeight={'w-[40px] h-[40px]'} image={assets.icons.event} />
        <div className='font-bold text-[40px]'>14</div>
        <div className='font-bold text-[20px]'>Events</div>
      </div>

      <div className='flex w-fit justify-center items-center gap-3 flex-col'>
        <Icon imageHeight={'w-[40px] h-[40px]'} image={assets.icons.acheivement} />
        <div className='font-bold text-[40px]'>9</div>
        <div className='font-bold text-[20px]'>Awards</div>
      </div>

      <div className='flex w-fit justify-center items-center gap-3 flex-col'>
        <Icon imageHeight={'w-[40px] h-[40px]'} image={assets.icons.clock} />
        <div className='font-bold text-[40px]'>6</div>
        <div className='font-bold text-[20px]'>Years</div>
      </div>
    </div>
  )
}

export default FlexCard
