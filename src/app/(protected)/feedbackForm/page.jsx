'use client'
import RadioButton from '@/app/components/RadioButton'
import Input from '@/app/components/form/Input'
import TextArea from '@/app/components/form/TextArea'
import { Button, Divider } from '@nextui-org/react'
import React from 'react'

function page() {
  return (
    <div className='w-full py-[30px] bg-gray-10  flex items-center justify-center'>
      <div className='border-[1px] bg-white shadow-2xl rounded-[4px]'>
        <div className='p-[25px]'>
          <h1 className='text-[30px] font-semibold'>Feedback Form</h1>
          <p className='text-[16px] text-gray-50'>We would love to hear your thoughts, suggestions, concerns or problems with anything so we can improve!</p>
        </div>
        <Divider />
        <div className='p-[25px]'>
          <div>
            <RadioButton />
          </div>
          <div className='flex mt-[20px] flex-col gap-[30px]'>
            <div>
              <h1>Describe your feedback:</h1>
              <TextArea label={'Decription...'} className='mt-[10px]' />
            </div>
            <div className='flex gap-3'>
              <Input label={'Name'} />
              <Input label={'Last Name'} />
            </div>
            <Input className='w-[49.5%]' label={'E-mail'} />
          </div>
          <Divider className='mt-[20px]' />
          <div className='flex mt-[20px] justify-center w-full'>
            <Button className='px-[30px] font-noto-sans text-[20px]' color='primary'>
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
