import assets from '@/app/assets/assets'
import Icon from '@/app/components/form/Icon'
import React from 'react'

function page() {
  return (
    <div>
      <h1 className='text-[50px] font-noto-sans font-semibold text-royalblue p-[30px]'>UBL Recruitment Drive 2024</h1>
      <div
        className='relative w-full  align-middle h-[50.6vh] bg-cover '
        style={{
          backgroundImage: 'url("https://lums.edu.pk/sites/default/files/styles/main_slider_1550_532/public/2024-03/UBL-min_0.png")',
        }}
      >
        {/* <Icon imageWidth={'w-[350px] h-[100px]'} image={assets.images.uniLogo} /> */}
      </div>
      <div className='p-[30px] flex flex-col gap-4'>
        <h1 className='font-noto-sans text-[25px]'>UBL is coming to LUMS!</h1>
        <div className='flex mt-[7px] gap-3'>
          <Icon imageHeight={'w-[20px] h-[20px]'} image={assets.icons.calendar} />
          <p className='text-[14px] font-noto-sans font-[500] text-gray-100'>May 17, 2024</p>
        </div>
        <div className='flex mt-[7px] gap-3'>
          <Icon imageHeight={'w-[20px] h-[20px]'} image={assets.icons.darkclock} />
          <p className='text-[14px] font-noto-sans font-[500] text-gray-100'>3:00 pm</p>
        </div>
        <div className='flex mt-[7px] gap-3'>
          <Icon imageHeight={'w-[20px] h-[20px]'} image={assets.icons.location} />
          <p className='text-[14px] font-noto-sans font-[500] text-gray-100'>Ground floor Faislabad</p>
        </div>
        <div className='flex flex-col gap-6 font-noto-sans mt-[20px] text-[14px] text-gray-50'>
          <p className='font-noto-sans mt-[20px] text-[14px] text-gray-50'>
            UBL is a banking company incorporated in Pakistan and engaged in commercial banking and related services. Click here to register.
          </p>
          <h1 className='text-[20px]'>Abstract</h1>
          <p>
            {' '}
            This thesis delves into the multi-layered issues and experiences surrounding mental health and well-being in the workplace. Globally, individuals grappling with mental health challenges
            often face a myriad of obstacles, such as discrimination and exclusion from employment opportunities. This thesis contends that these issues are multifaceted in nature. Utilising a
            relational framework and a salutogenic perspective, it aims to scrutinize the complexities of mental health and well-being within the workplace. The thesis conducts a comprehensive review
            of the various factors that potentially influence the mental health and well-being of employees. Subsequently, it conducts in-depth interviews with individuals with schizophrenia (SCZ),
            healthcare professionals, family members/caregivers, NGO representatives, and employer. This approach helps to identify and analyse the multilevel influences of societal (social stigma,
            inadequate government policies, and economic conditions), organisational (workplace support, job suitability, and design) and individual factors (self-stigma, personal motivation and
            resilience, family and social support and realization of illness) on work and career of individuals suffering from schizophrenia. It also highlights the interconnectedness among these
            factors at each level of analysis.
          </p>
        </div>
      </div>
    </div>
  )
}

export default page
