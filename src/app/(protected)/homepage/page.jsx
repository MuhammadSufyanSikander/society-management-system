'use client'
import assets from '@/app/assets/assets'
import Icon from '@/app/components/form/Icon'
import React, { useRef } from 'react'

function Homepage() {
  const sectionRef = useRef(null)

  const scrollToSection = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className='overflow-hidden'>
      <div
        className=' relative w-full h-[88.6vh] bg-cover bg-center'
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dW5pdmVyc2l0eXxlbnwwfHwwfHx8MA%3D%3D")',
        }}
      >
        <div className='absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-[40px] font-noto-sans text-center'>Share your idea with us</div>
        <div className='absolute w-[60%]  bottom-1/2 left-1/4 text-[16px] text-center text-white'>
          Whether studying for a big exam, learning something new, or brushing up on old skills, the right tutor can help you feel empowered, knowledgeable, and ready for anything
        </div>
        <div className='absolute bottom-10 left-1/2'>
          <Icon image={assets.icons.downarrow} imageHeight={'w-[30px] h-[30px]'} onClick={scrollToSection} />
        </div>
      </div>

      {/* New Section */}
      <div ref={sectionRef}>
        <div className='w-full h-[89vh] '>
          <section className='w-full bg-gray-10  justify-center text-center px-32 py-10'>
            <div className='text-[25px] font-bold mb-[20px]'>Vice Chancellor&apos;s Message</div>
            <div className='flex text-left justify-center'>
              <div className=' w-[60%] italic'>
                Government College University Faisalabad is a dynamic seat of learning aspiring to provide highly stimulating and conducive academic environments for quality research, formal education
                and professional growth. In the recent years, the university has achieved phenomenal success in research contribution and in improving the quality of education which is reflected
                through the meteoric rise of the institution in HEC ranking from 59th to its 7th position, resulting in growing confidence of civil society and business community of the region.
              </div>
              <div className='  flex flex-col w-[40%] items-center text-center'>
                <Icon imageWidth={'w-[100px] h-[100px] rounded-full'} image={assets.images.rector} />
                <div className='text-[12px] text-black-100'> Prof. Dr. Nasir Amin</div>
                <div className='text-[12px]  text-black-100'>Rector GCUF</div>
              </div>
            </div>
            <div></div>
          </section>
          <div className='px-32 mt-[20px] text-left w-full'>
            <h1 className='text-[25px] font-bold'>Welcome to GCUF</h1>
            <p className='w-[65%]'>
              GCUF is an extraordinary place for learning, discovery and transformation. Here, you have the freedom to ask questions, challenge the ordinary and spark innovation. We seek out bright
              and curious minds with revolutionary ideas to create an empowering community of leaders and change makers.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage
