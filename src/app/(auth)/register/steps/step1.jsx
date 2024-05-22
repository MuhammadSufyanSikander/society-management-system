'use client'

import React, { useEffect } from 'react'

import Button from '@/app/components/form/Button'
import Input from '@/app/components/form/Input'
import DatePicker from '@/app/components/form/DatePicker'
import Select from '@/app/components/form/Select'
import step1Data from './step1Data'
import { useDispatch, useSelector } from 'react-redux'
import { resetAuthValues, setAuthUserInfo, setAuthValue } from '@/app/redux/reducers/auth'
import step1Schema from '@/app/validation/register/step1Validation'
import moment from 'moment'
import { parseDate } from '@internationalized/date'
import { getDepartments } from '@/app/redux/reducers/department'

const Step1 = () => {
  const dispatch = useDispatch()

  const { userInfo, error, step } = useSelector(state => state.auth)
  console.log('tesdsd', userInfo)

  const handleChange = e => {
    dispatch(setAuthUserInfo({ key: e.target.name, value: e.target.value }))
  }

  const handleSubmitStepOne = () => {
    dispatch(getDepartments())

    dispatch(
      setAuthValue({
        key: 'error',
        value: {},
      }),
    )

    try {
      step1Schema.parse(userInfo)
      dispatch(setAuthValue({ key: 'step', value: 2 }))
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

  useEffect(() => {
    dispatch(resetAuthValues())

    handleChange({ target: { name: 'dateOfBirth', value: moment().format('YYYY-MM-DD') } })
  }, [])

  if (step !== 1) return null

  return (
    <form
      onSubmit={e => {
        e.preventDefault()
      }}
      className='m-0 self-stretch flex flex-col items-center justify-start gap-[20px]'
    >
      <Input name={'firstname'} label={'First Name'} value={userInfo?.firstname} onChange={handleChange} errorMessage={error?.firstname} />
      <Input name={'lastname'} label={'Last Name'} value={userInfo?.lastname} onChange={handleChange} errorMessage={error?.lastname} />
      <DatePicker
        name={'dateOfBirth'}
        label={'Date Of Birth'}
        value={userInfo?.dateOfBirth ? parseDate(userInfo?.dateOfBirth) : parseDate(moment().format('YYYY-MM-DD'))}
        onChange={value => handleChange({ target: { name: 'dateOfBirth', value } })}
        errorMessage={error?.dateOfBirth}
      />
      <Select name={'gender'} label={'Gender'} items={step1Data.gender} value={userInfo?.gender} onChange={handleChange} errorMessage={error?.gender} />
      <Input name={'cnic'} label={'National Identity Card #/ B-Form'} value={userInfo?.cnic} onChange={handleChange} errorMessage={error?.cnic} />
      <Input name={'registration'} label={'Registration Number'} value={userInfo?.registration} onChange={handleChange} errorMessage={error?.registration} />
      <Input name={'mobile'} label={'Mobile Number'} value={userInfo?.mobile} onChange={handleChange} errorMessage={error?.mobile} />
      <Input name={'email'} label={'Email Address'} value={userInfo?.email} onChange={handleChange} errorMessage={error?.email} />
      <Button
        onClick={() => {
          handleSubmitStepOne()
        }}
      >
        Next
      </Button>
    </form>
  )
}

export default Step1
