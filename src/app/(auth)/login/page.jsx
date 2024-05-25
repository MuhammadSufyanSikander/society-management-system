'use client'

import React from 'react'
import Input from '@/app/components/form/Input'
import assets from '@/app/assets/assets'
import Button from '@/app/components/form/Button'
import Icon from '@/app/components/form/Icon'
import { login } from '@/app/redux/reducers/auth'

import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import useForm from '@/app/hooks/useForm'
import loginSchema from '@/app/validation/login/loginValidation'

function Login() {
  const dispatch = useDispatch()
  const [inputFields, , errorMessage, onChange, onSubmit] = useForm({ email: '', password: '' })
  const router = useRouter()
  const { token, loading } = useSelector(state => state.auth)

  const handleChange = e => {
    onChange({ target: { name: e.target.name, value: e.target.value } })
  }

  const handleSubmit = () => {
    try {
      onSubmit(loginSchema, () => {
        dispatch(login({ data: { email: inputFields?.email, password: inputFields?.password }, router }))
      })
    } catch (error) {}
  }

  return (
    <div className='w-full relative  overflow-hidden flex flex-col items-center justify-start h-screen'>
      <div className=' flex items-center justify-center h-screen w-screen '>
        <div className='w-[383px]  flex flex-col items-center justify-start py-0 px-5  box-border gap-[60px] max-w-full mq450:gap-[30px]'>
          <Icon image={assets.images.uniLogo} />

          <form className='m-0 self-stretch flex flex-col items-center justify-start gap-[20px]'>
            <Input name={'email'} value={inputFields.email} label={'Email'} errorMessage={errorMessage?.email} leftIcon={assets.icons.email} onChange={handleChange} />
            <Input name={'password'} type='password' value={inputFields.password} errorMessage={errorMessage?.password} label={'Password'} leftIcon={assets.icons.password} onChange={handleChange} />
            <Button loading={loading} loadingLabel='logging...' onClick={handleSubmit}>
              Log in
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
