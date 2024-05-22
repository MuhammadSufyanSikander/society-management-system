'use client'

import React from 'react'

import Button from '@/app/components/form/Button'
import Input from '@/app/components/form/Input'
import { useDispatch, useSelector } from 'react-redux'
import { register, resetAuthValues, setAuthUserInfo, setAuthValue } from '@/app/redux/reducers/auth'
import step3Schema from '@/app/validation/register/step3Validation'

const Step3 = () => {
  const dispatch = useDispatch()
  const { userInfo, error, step } = useSelector(state => state.auth)
  console.log('asdasda', userInfo)

  const handleChange = e => {
    dispatch(setAuthUserInfo({ key: e.target.name, value: e.target.value }))
  }

  const handleSubmitStepThree = () => {
    dispatch(
      setAuthValue({
        key: 'error',
        value: {},
      }),
    )

    try {
      dispatch(register({ data: { ...userInfo, role: 'student', society: '664906b430c399eb1206594d8', phone: '123123123' } }))
      step3Schema.parse(userInfo)
      dispatch(setAuthValue({ key: 'step', value: 1 }))
    } catch (error) {
      dispatch(
        setAuthValue({
          key: 'error',
          value: {
            [error.issues[0].path[0]]: error.issues[0].message,
          },
        }),
      )
    }
  }

  if (step !== 3) return null

  return (
    <form
      onSubmit={e => {
        e.preventDefault()
      }}
      className='m-0 self-stretch flex flex-col items-center justify-start gap-[20px]'
    >
      <Input name={'password'} label={'Password'} type='password' value={userInfo?.password} onChange={handleChange} errorMessage={error?.password} />
      <div className='w-full flex gap-5'>
        <Button
          variant='ghost'
          onClick={() => {
            dispatch(setAuthValue({ key: 'step', value: 2 }))
          }}
        >
          Back
        </Button>
        <Button
          onClick={() => {
            handleSubmitStepThree()
          }}
        >
          Submit
        </Button>
      </div>
    </form>
  )
}

export default Step3
