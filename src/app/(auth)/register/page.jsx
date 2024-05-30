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
import Link from 'next/link'
import { ROUTES } from '@/app/constants'

const Register = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getDepartments())
    dispatch(getSocieties())
  }, [])

  return (
    <div className='w-full relative flex flex-row items-center justify-start h-screen mb-20 mq450:flex-col  mq450:gap-[30px]'>
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

      <div className='flex pt-16 justify-center h-screen w-[50%] mq450:w-screen mq450:pt-0 '>
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
