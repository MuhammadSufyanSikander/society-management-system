'use client'

import React, { useEffect } from 'react'

import assets from '@/app/assets/assets'
import Button from '@/app/components/form/Button'
import Input from '@/app/components/form/Input'
import DatePicker from '@/app/components/form/DatePicker'
import Select from '@/app/components/form/Select'
import step2Data from './step2Data'
import { useDispatch, useSelector } from 'react-redux'
import { setAuthUserInfo, setAuthValue } from '@/app/redux/reducers/auth'
import step2Schema from '@/app/validation/register/step2Validation'

const Step2 = () => {
  const { userInfo, error, step } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  const handleChange = e => {
    dispatch(setAuthUserInfo({ key: e.target.name, value: e.target.value }))
  }

  const handleSubmitStepTwo = () => {
    dispatch(
      setAuthValue({
        key: 'error',
        value: {},
      }),
    )

    try {
      step2Schema.parse(userInfo)
      dispatch(setAuthValue({ key: 'step', value: 3 }))
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
  useEffect(() => {}, [])

  if (step !== 2) return null

  return (
    <form
      onSubmit={e => {
        e.preventDefault()
      }}
      className='m-0 self-stretch flex flex-col items-center justify-start gap-[20px]'
    >
      <Select name={'department'} label={'Select Department'} items={step2Data.departments} onChange={handleChange} value={userInfo?.department} errorMessage={error?.department} />
      <Select name={'program'} label={'Select Program'} items={step2Data.programs} onChange={handleChange} value={userInfo?.program} errorMessage={error?.program} />
      <Select name={'section'} label={'Select Section'} items={step2Data.sections} onChange={handleChange} value={userInfo?.section} errorMessage={error?.section} />
      <Select name={'society'} label={'Select Society'} items={step2Data.sections} onChange={handleChange} value={userInfo?.society} errorMessage={error?.society} />
      <div className='w-full gap-5 flex'>
        <Button
          variant='ghost'
          onClick={() => {
            dispatch(setAuthValue({ key: 'step', value: 1 }))
          }}
        >
          Back
        </Button>
        <Button
          onClick={() => {
            handleSubmitStepTwo()
          }}
        >
          Next
        </Button>
      </div>
    </form>
  )
}

export default Step2
