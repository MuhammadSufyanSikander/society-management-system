'use client'
import assets from '@/app/assets/assets'
import Footer from '@/app/components/Footer'
import ImageCard from '@/app/components/ImageCard'
import Icon from '@/app/components/form/Icon'
import { ROUTES } from '@/app/constants'
import { getGallery } from '@/app/redux/reducers/gallery'
import { Button } from '@nextui-org/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Homepage() {
  const route = useRouter()
  const galleryImages = [1, 2, 3, 4, 5, 6]
  const sectionRef = useRef(null)
  const dispatch = useDispatch()
  const { gallery } = useSelector(state => state.gallery)

  const scrollToSection = () => {
    if (sectionRef.current) {
      const topOffset = sectionRef.current.offsetTop
      window.scrollTo({ top: topOffset - 15, behavior: 'smooth' })
    }
  }

  React.useEffect(() => {
    dispatch(getGallery())
  }, [])

  return (
    <div>
      <div
        className=' relative w-full h-[88.6vh] bg-cover bg-center'
        style={{
          backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/society-management-syste-446c5.appspot.com/o/19.jpg?alt=media&token=85e82a28-65a7-474a-b7d9-07bbbdb0aec6")',
        }}
      >
        <div className='absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-white font-bold text-[40px] font-noto-sans text-center mq450:w-[85%]'>
          <div className='mb-[20px] mq450:text-[30px]'>GCUF Society Management System</div>
          <div className=' text-[16px] text-center text-white'>
            Discover, engage, and thrive with GCUF&apos;s diverse societies—your hub for information, events, and active participation in university life.{' '}
          </div>
        </div>

        <div className='absolute bottom-10 left-1/2'>
          <Icon image={assets.icons.downarrow} imageHeight={'w-[30px] h-[30px]'} onClick={scrollToSection} />
        </div>
      </div>

      {/* New Section */}
      <div ref={sectionRef}>
        <div className='w-full h-full mb-[40px]'>
          <section className='w-full bg-gray-10  justify-center text-center px-[50px] py-[30px]'>
            <div className='text-[25px] font-bold mb-[20px]'>Vice Chancellor&apos;s Message</div>
            <div className='flex text-left justify-center'>
              <div className=' w-[60%] italic'>
                Government College University Faisalabad is a dynamic seat of learning aspiring to provide highly stimulating and conducive academic environments for quality research, formal education
                and professional growth. In the recent years, the university has achieved phenomenal success in research contribution and in improving the quality of education which is reflected
                through the meteoric rise of the institution in HEC ranking from 59th to its 7th position, resulting in growing confidence of civil society and business community of the region.{' '}
                <Link href={ROUTES.aboutUs} className='italic text-small text-red-50'>
                  Read more
                </Link>
              </div>
              <div className='  flex flex-col w-[40%] items-center text-center'>
                <Icon imageWidth={'w-[138px] h-[140px] rounded-full'} image={assets.images.rector} />
                <div className='text-[12px] text-black-100'> Prof. Dr. Nasir Amin</div>
                <div className='text-[12px]  text-black-100'>Vice Chancellor, Government College University Faisalabad</div>
              </div>
            </div>
            <div></div>
          </section>
          <section className='w-full bg-gray-5  justify-center text-center px-[50px] py-[30px]'>
            <div className='text-[25px] font-bold mb-[20px]'>Directorate of Students Affairs</div>
            <div className='flex text-left justify-center'>
              <div className=' w-[60%] italic'>
                Government College University Faisalabad is a dynamic seat of learning aspiring to provide highly stimulating and conducive academic environments for quality research, formal education
                and professional growth. In the recent years, the university has achieved phenomenal success in research contribution and in improving the quality of education which is reflected
                through the meteoric rise of the institution in HEC ranking from 59th to its 7th position, resulting in growing confidence of civil society and business community of the region.{' '}
                <Link href={ROUTES.aboutUs} className='italic text-small text-red-50'>
                  Read more
                </Link>
              </div>
              <div className='  flex flex-col w-[40%] items-center text-center'>
                <Icon imageWidth={'w-[138px] h-[140px] rounded-full'} image={assets.images.rector} />
                <div className='text-[12px] text-black-100'> Prof. Dr. Nasir Amin</div>
                <div className='text-[12px]  text-black-100'>Vice Chancellor, Government College University Faisalabad</div>
              </div>
            </div>
            <div></div>
          </section>

          <div className='px-[50px] mt-[20px] text-left w-full'>
            <h1 className='text-[25px] font-bold'>Welcome to GCUF</h1>
            <p className='w-[65%]'>
              GCUF is an extraordinary place for learning, discovery and transformation. Here, you have the freedom to ask questions, challenge the ordinary and spark innovation. We seek out bright
              and curious minds with revolutionary ideas to create an empowering community of leaders and change makers.
            </p>
          </div>
        </div>
      </div>
      <section className='w-full flex flex-col justify-center items-center mb-10'>
        <h1 className='text-[40px] mb-[10px] text-center font-semibold font-noto-sans'>Gallery</h1>
        <div className='flex flex-wrap gap-[20px] justify-center mb-[50px]'>
          {gallery.slice(0, 5)?.map((item, index) => (
            <ImageCard key={item?._id} image={item?.image} />
          ))}
        </div>
        <Button onClick={() => route.push(ROUTES.gallery)} color='primary'>
          View more
        </Button>
      </section>
      <Footer />
    </div>
  )
}

export default Homepage
