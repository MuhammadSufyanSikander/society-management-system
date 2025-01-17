import React from 'react'
import Icon from './form/Icon'
import assets from '../assets/assets'
import Link from 'next/link'
import { ROUTES } from '../constants'

function Footer() {
  return (
    <div>
      <div className='bg-blue-700'>
        <div className='w-full md:w-[60%] items-center flex flex-row md:flex-row mq450:justify-between mq450:gap-1 gap-[80px] text-[12px] font-noto-sans p-[30px] text-white'>
          <Icon imageHeight={'w-[200px] h-[64px] mq450:w-[100px] mq450:h-[35px]'} image={assets.images.uniLogo} />
          <div className='flex flex-col gap-2 mt-4 md:mt-0'>
            <Link href={ROUTES.aboutUs}>About us</Link>
            <Link href={ROUTES.societies}>Our societies</Link>
            <Link href={ROUTES.events}>Events</Link>
          </div>
          <div className='flex flex-col gap-2 mt-4 md:mt-0'>
            <Link href={ROUTES.faq}>FAQ</Link>
            <Link href={ROUTES.feedbackForm}>Feedback</Link>
            <Link href={ROUTES.contactUs}>Contact us</Link>
          </div>
        </div>
      </div>
      <div className='mainfooterclass bg-blue-950 text-[12px] flex flex-row md:flex-row mq450:justify-between items-center gap-[10px] text-white p-[30px]'>
        <div className='subfooterclass md:text-left mb-4 md:mb-0'>
          <p>Government College University, <br></br>Allama Iqbal Road, Faislabad</p>
          {/* <p>Allama Iqbal Road, Faislabad</p> */}
        </div>
        <div className='subfooterclass flex gap-7'>
          <Icon imageHeight={'w-[30px] h-[30px] md:w-[40px] md:h-[40px]'} image={assets.icons.facebook} />
          <Icon imageHeight={'w-[30px] h-[30px] md:w-[40px] md:h-[40px]'} image={assets.icons.twitter} />
          <Icon imageHeight={'w-[32px] h-[32px] md:w-[42px] md:h-[42px]'} image={assets.icons.linkedin} />
        </div>
               <div className='subfooterclass flex gap-7'>
        <section  className='poweredsection' style={{   width: '80%', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'left', marginBottom: '10px', fontWeight:'bold' }}>Powered by: Department of Computer Science</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ flexBasis: '45%' }}>
          <h2 >Supervisor:</h2>
          <ul>
          <li>Nafees Ayub (Lecturer)</li>
          </ul>
         
        </div>

        <div style={{ flexBasis: '45%' }}>
          <h2>Students:</h2>
          <ul>
            <li>M. Sufyan Sikander</li>
            <li>Ali Hamza</li>
            <li>M. Waqas Adrees</li>
         
            {/* Add more student names as needed */}
          </ul>
        </div>
 
      </div>
    </section>
        </div>
      </div>
    </div>
  )
}

export default Footer
