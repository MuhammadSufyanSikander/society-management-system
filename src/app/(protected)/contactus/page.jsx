import Input from '@/app/components/form/Input'
import { Button } from '@nextui-org/react'
import React from 'react'

function page() {
  return (
    <div className='w-full h-[88.6vh] flex justify-center content-center align-middle items-center '>
      <div className='w-[80%] shadow-2xl rounded-[8px] flex  justify-between px-10 py-12'>
         <div className=''>
          <div className=' text-[35px] mb-[25px]'>
           Contact Us
          </div>
        <p>Need to get contact with us? Fill out the form with your inquiry</p>
        </div>
        <div className='w-[45%] h-auto shadow-2xl flex flex-col gap-[10px] rounded-[6px] px-[10px] py-[14px] '>
            <h1 className='w-full text-center font-semibold mb-[10px] text-[25px]'>Contact Us</h1>
            <div className='flex gap-[10px]'>
                <Input label={'First name'}/>
                <Input label={'Last name'}/>
            </div>
            <Input label={'E-mail'}/>
            <Input label={'What can we help you with?'}/>
            <Button className='mt-[20px]' color='primary'>
                Submit
            </Button>
        </div>
      </div>
      
    </div>
  )
}

export default page
