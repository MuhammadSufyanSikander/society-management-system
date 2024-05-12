import React from 'react'
import Icon from '@/app/components/form/Icon'
import assets from '@/app/assets/assets'
import Step1 from '@/app/(auth)/register/steps/step1'
import Step2 from '@/app/(auth)/register/steps/step2'
import Step3 from '@/app/(auth)/register/steps/step3'

const Register = () => {
  return (
    <div className='w-full relative flex flex-col items-center justify-start h-screen mb-20'>
      <div className='flex pt-16 justify-center h-screen w-screen '>
        <div className='w-[383px]  flex flex-col items-center justify-start py-0 px-5  box-border gap-[60px] max-w-full mq450:gap-[30px]'>
          <Icon imageWidth={'w-[131px]'} imageHeight={'h-[89px]'} image={assets.icons.Frame} />
          <Step1 />
          <Step2 />
          <Step3 />
        </div>
      </div>
    </div>
  )
}

export default Register
