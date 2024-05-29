'use client'

import assets from '@/app/assets/assets'
import Footer from '@/app/components/Footer'
import ImageCard from '@/app/components/ImageCard'
import { getGallery } from '@/app/redux/reducers/gallery'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Gallery() {
  const dispatch = useDispatch()
  const { gallery } = useSelector(state => state.gallery)

  React.useEffect(() => {
    dispatch(getGallery())
  }, [])

  return (
    <div>
      <div
        className='relative w-full  align-middle h-[88.6vh] bg-cover '
        style={{
          backgroundImage:
            'url("https://img.freepik.com/free-vector/spot-light-background_1284-4685.jpg?t=st=1716920589~exp=1716924189~hmac=cf7eb1a0c0dce06000374c44ac48618fc3f202af784229092737d4f27c71145d&w=740")',
        }}
      >
        <div className=' flex justify-center items-center w-full h-[100%] inset-0  z-10'>
          <div className='text-center'>
            <h1 className='text-[40px] font-noto-sans text-white font-bold'>Galleries</h1>
            <p className='font-noto-sans text-[20px] font-semibold text-white'>See what is going on in our world.</p>
          </div>
        </div>
      </div>
      <section className='w-full '>
        {/* <h1 className='text-[40px] mb-[10px] text-center font-semibold font-noto-sans'>Gallery</h1> */}
        <div className='flex flex-wrap mt-[20px] gap-[20px] justify-center mb-[50px]'>
          {gallery?.map(item => (
            <ImageCard key={item._id} image={item.image} />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Gallery
