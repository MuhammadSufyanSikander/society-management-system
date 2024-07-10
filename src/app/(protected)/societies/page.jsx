'use client'

import Card from '@/app/components/Card'
import { getSocieties } from '@/app/redux/reducers/society'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Societies() {
  const dispatch = useDispatch()
  const { societies } = useSelector(state => state.society)

  useEffect(() => {
    dispatch(getSocieties())
  }, [])

  return (
    <div>
      <div
        className='relative w-full  align-middle h-[88.6vh] bg-cover '
        style={{
          backgroundImage: 'url("https://gcuf.edu.pk/pages_data/campuses/news-campus/IMGM5195_2.jpg")',

           backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'
        }}
      >
        <div className=' flex justify-center items-center w-full h-[100%] inset-0 bg-overlay z-10'>
          <div className='text-center'>
            <h1 className='text-[40px] font-noto-sans text-white font-bold'>Societies</h1>
            <p className='font-noto-sans text-[20px] font-semibold text-white'>See what is going on in our world.</p>
          </div>
        </div>
      </div>

      <div className='flex flex-wrap gap-4 two-columns justify-center bg-slate-50 p-[15px] w-full'>
        {societies?.map(society => (
          <Card key={society._id} title={society.societyName} description={society.societyDescription} image={society?.image} routeId={society._id} />
        ))}
      </div>
    </div>
  )
}

export default Societies
