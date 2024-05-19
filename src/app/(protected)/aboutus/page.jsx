import assets from '@/app/assets/assets'
import Icon from '@/app/components/form/Icon'
import React from 'react'

function page() {
  const values = ['Integrity', 'Pursuit of Excellence', 'Inspiring Partnerships', 'Diversity, Equity and Inclusion', 'Sustainability']
  return (
    <div>
      <div className='text-[14px] text-gray-50 p-5'>About Us</div>
      <div className=' flex w-full justify-between'>
        <div className='bg-blue-100 shadow-overlay px-[30px] pt-[30px] pb-[15px] w-[32%] min-h-[450px]'>
          <h1 className='text-white text-[40px] font-bold'>Vision</h1>
          <p className='text-[20px] text-white '>
            GCUF aspires to be a comprehensive university providing a higher education experience grounded in thought leadership, co-creation of knowledge, and sustainability.
          </p>
        </div>

        <div className='bg-blue-200 px-[30px] pt-[30px] pb-[15px] w-[32%] min-h-[450px]'>
          <h1 className='text-white text-[40px] font-bold'>MISSION</h1>
          <p className='text-[20px] text-white '>
            We are committed to being a university that stimulates intellectual curiosity, behavioral progression, and environmental stewardship. We nurture future leaders, job creators, and lifelong
            learners, with the ability to foster partnerships, and intercultural competence to impact their communities and beyond. Through adherence to our core values, we create an ecosystem that
            promotes research, innovation, and productivity.{' '}
          </p>
        </div>

        <div className='bg-blue-100 px-[30px] pt-[30px] pb-[15px] w-[32%] min-h-[450px]'>
          <h1 className='text-white text-[40px] font-bold'>CORE VALUES</h1>
          <ul className='text-white pl-7 list-disc space-y-3'>
            {values?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <section className='w-full bg-gray-10  justify-center px-32 py-10'>
        <div className='flex'>
        <div className='w-[80%]'>
          <div className='text-[25px] text-blue-200 font-bold '>RECTOR'S MESSAGE</div>
          <div className='text-[12px] text-black-100'>Engr Javed Mahmood Bukhari</div>
          <div className='text-[12px] mb-[20px]  text-black-100'>Rector Nust</div>

          <div className=' w-[100%] italic'>
            It gives me immense pleasure to welcome you to the National University of Sciences & Technology (NUST), an esteemed higher education institution where we collectively embark on a journey
            of knowledge, growth and discovery. As the head of this prestigious institution, I am committed to taking its mission forward, while ensuring a conducive and stimulating environment that
            fosters creativity, adaptability, and a sense of responsibility towards the society.
          </div>

         </div>
         <div className='  flex flex-col w-[40%] items-center text-center'>
          <Icon imageWidth={'w-[200px] h-[200px] '} image={assets.images.rector} />
        </div>
        </div>
        
      </section>
    </div>
  )
}

export default page
