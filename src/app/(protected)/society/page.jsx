import assets from '@/app/assets/assets'
import FlexCard from '@/app/components/FlexCard'
import Icon from '@/app/components/form/Icon'
import React from 'react'

function page() {
  return (
    <div className='p-16 flex flex-col gap-[80px]'>
      <div className='flex '>
        <div className=' w-full'>
          <h1 className='font-bold font-noto-sans leading-[50px] text-[50px] text-royalblue'>Software Engineering Society</h1>
          <p className='mt-[40px] text-gray-800 font-noto-sans'>
            The Software Engineering Society is an initiative aimed at bridging the gap between industry and academia in the field of software engineering. The society was created with the goal of
            creating a platform for collaboration and communication between industry professionals and academics, to foster innovation and advance the field of software engineering. Software
            engineering is a rapidly evolving field, with new technologies and best practices emerging at an unprecedented pace. However, there is often a gap between the knowledge and skills that are
            taught in academia and the practical skills and knowledge required in the industry
          </p>
        </div>
        <Icon imageWidth={'w-[40%] h-[100%] '} image={assets.images.societylogo} />
      </div>

      <div className='text-center'>
        <h1 className='font-bold font-noto-sans  text-[50px] text-royalblue'>Scope</h1>
        <p className='mt-[30px] text-start  text-gray-800 font-noto-sans'>
          The society’s scope is to create a platform for collaboration and communication between industry professionals and academics, with the goal of advancing the field of software engineering.
        </p>
      </div>
      <div className='text-center'>
        <h1 className='font-bold font-noto-sans  text-[50px] text-royalblue'>Objectives</h1>
        <p className='mt-[30px] text-start  text-gray-800 font-noto-sans'>
          1. Providing a platform for students, researchers, and professionals to explore career opportunities and learn about the latest trends and developments in the industry. 2. Aims to support
          the growth of the field and help to address the skills gap that exists between industry and academia. 3. Society is to facilitate networking. Through organizing networking events and
          activities that bring together industry professionals, academics, and students, the society aims to create a strong community of professionals who can support and learn from each other.
        </p>
      </div>
      <FlexCard />
    </div>
  )
}

export default page
