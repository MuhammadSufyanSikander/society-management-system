'use client'

import Input from '@/app/components/form/Input'
import useForm from '@/app/hooks/useForm'
import { getOwners, sendEmail } from '@/app/redux/reducers/user'
import { Button } from '@nextui-org/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function ContactUs() {
  const dispatch = useDispatch()
  const [inputFields, setInputFields, errorMessage, onChange, onSubmit] = useForm({ firstname: '', lastname: '', email: '', feedback: '' })
  const { owners } = useSelector(state => state.user)

  console.log('ownersownersowners:', owners)

  const handleChangeContactUs = e => {
    onChange({ target: { name: e.target.name, value: e.target.value } })
  }

  const handleSubmitContactUs = () => {
    onSubmit(null, async () => {
      dispatch(
        sendEmail({
          data: {
            from: inputFields?.email,
            subject: `Email from ${inputFields?.firstname} ${inputFields?.lastname}`,
            recipients: owners.map(owner => owner.email),
            text: inputFields.feedback,
          },
        }),
      )
    })
  }

  React.useEffect(() => {
    dispatch(getOwners())
  }, [])

  return (
    <div className='w-full h-[88.6vh] flex justify-center content-center align-middle items-center '>
      <div className='w-[80%] shadow-2xl rounded-[8px] flex  justify-between px-10 py-12'>
        <div className=''>
          <div className=' text-[35px] mb-[25px]'>Contact Us</div>
          <p>Need to get contact with us? Fill out the form with your inquiry</p>
        </div>
        <div className='w-[45%] h-auto shadow-2xl flex flex-col gap-[10px] rounded-[6px] px-[10px] py-[14px] '>
          <h1 className='w-full text-center font-semibold mb-[10px] text-[25px]'>Contact Us</h1>
          <div className='flex gap-[10px]'>
            <Input name='firstname' label={'First name'} value={inputFields?.firstname} onChange={handleChangeContactUs} />
            <Input name='lastname' label={'Last name'} value={inputFields?.lastname} onChange={handleChangeContactUs} />
          </div>
          <Input name='email' label={'E-mail'} value={inputFields?.email} onChange={handleChangeContactUs} />
          <Input name='feedback' label={'What can we help you with?'} value={inputFields?.feedback} onChange={handleChangeContactUs} />
          <Button
            className='mt-[20px]'
            color='primary'
            onClick={() => {
              handleSubmitContactUs()
            }}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
