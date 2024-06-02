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
import Link from 'next/link'
import { ROUTES } from '@/app/constants'

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
    <div className='w-full relative  overflow-hidden flex flex-row items-center justify-start h-screen mq450:flex-col'>
      <div className='text-royalblue items-center flex-col justify-center  font-bold text-[40px]  rounded font-noto-sans z-10 flex text-center mq450:px-[10px] mq450:py-[0px] mq450:text-[12px]'>
        <div
          className='bg-red-10 flex  p-[20px] w-[100%] h-screen mq450:w-[250px] mq450:h-[250px]'
          style={{
            backgroundImage:
              'url("https://img.freepik.com/free-vector/privacy-policy-concept-illustration_114360-7853.jpg?t=st=1717090037~exp=1717093637~hmac=bda26cd29289c5e41d95a30ea2d26f0302ab5fc953a3305fd3b8f5a301f438a2&w=740")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {' '}
          GCUF Society Management System
        </div>
      </div>
      <div className=' flex items-center justify-center h-screen  w-[50%] mq450:w-screen '>
        <div className='w-[383px]  flex flex-col items-center justify-start py-0 px-5  box-border gap-[60px] max-w-full mq450:gap-[30px]'>
          <Icon image={assets.images.uniLogo} />

          <form className='m-0 self-stretch flex flex-col items-center justify-start gap-[20px]'>
            <Input name={'email'} value={inputFields.email} label={'Email'} errorMessage={errorMessage?.email} leftIcon={assets.icons.email} onChange={handleChange} />
            <Input name={'password'} type='password' value={inputFields.password} errorMessage={errorMessage?.password} label={'Password'} leftIcon={assets.icons.password} onChange={handleChange} />
            <Button loading={loading} loadingLabel='logging...' onClick={handleSubmit}>
              Log in
            </Button>
            <div className='w-full flex'>
              <h1 className='text-[12px] mr-[5px]'>New Here?</h1>
              <Link href={ROUTES.register} className=' font-bold text-[12px] text-royalblue'>
                Sign up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
