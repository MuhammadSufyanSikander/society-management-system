'use client'

import React, { useEffect } from 'react'
import Icon from '@/app/components/form/Icon'
import assets from '@/app/assets/assets'
import Step1 from '@/app/(auth)/register/steps/step1'
import Step2 from '@/app/(auth)/register/steps/step2'
import Step3 from '@/app/(auth)/register/steps/step3'
import { useDispatch } from 'react-redux'
import { getDepartments } from '@/app/redux/reducers/department'
import { getSocieties } from '@/app/redux/reducers/society'

const Register = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getDepartments())
    dispatch(getSocieties())
  }, [])

  return (
    <div className='w-full relative flex flex-col items-center justify-start h-screen mb-20'>
      <div className='flex pt-16 justify-center h-screen w-screen '>
        <div className='w-[383px]   flex flex-col items-center justify-start py-0 px-5  box-border gap-[60px] max-w-full mq450:gap-[30px]'>
          <Icon imageWidth={131} imageHeight={89} image={assets.images.uniLogo} />
          <Step1 />
          <Step2 />
          <Step3 />
        </div>
      </div>
    </div>
  )
}

export default Register
