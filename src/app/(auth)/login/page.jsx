'use client'

import React from 'react'
import Input from '@/app/components/form/Input'
import assets from '@/app/assets/assets'
import Button from '@/app/components/form/Button'
import Icon from '@/app/components/form/Icon'
import withAuth from '@/app/Hoc/withAuth'
import { login } from '@/app/redux/reducers/auth'

import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'

function Login() {
  const dispatch = useDispatch()
  const router = useRouter()
  const { token } = useSelector(state => state.auth)

  return (
    <div className='w-full relative  overflow-hidden flex flex-col items-center justify-start h-screen'>
      <div className=' flex items-center justify-center h-screen w-screen '>
        <div className='w-[383px]  flex flex-col items-center justify-start py-0 px-5  box-border gap-[60px] max-w-full mq450:gap-[30px]'>
          <Icon imageWidth={'w-[131px]'} imageHeight={'h-[89px]'} image={assets.icons.Frame} />
          <form className='m-0 self-stretch flex flex-col items-center justify-start gap-[20px]'>
            <Input name={'email'} label={'Email'} leftIcon={assets.icons.email} />
            <Input name={'password'} type='password' label={'Password'} leftIcon={assets.icons.password} />
            <Button
              onClick={() => {
                // dispatch(login({ router }))
              }}
            >
              Log in
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default withAuth(Login)
