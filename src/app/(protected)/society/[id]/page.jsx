'use client'

import assets from '@/app/assets/assets'
import FlexCard from '@/app/components/FlexCard'
import ImageCard from '@/app/components/ImageCard'
import Icon from '@/app/components/form/Icon'
import { getSociety, getSocietyInfoCounts } from '@/app/redux/reducers/society'
import { Spinner } from '@nextui-org/react'
import { useParams } from 'next/navigation'

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Society() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { society, loading, usersCount, eventsCount } = useSelector(state => state.society)

  console.log('userssdawd :', society, eventsCount)

  useEffect(() => {
    dispatch(getSociety({ data: { society_id: id } }))
    dispatch(getSocietyInfoCounts({ data: { society_id: id } }))
  }, [])

  if (loading)
    return (
      <div className='h-[100vh] flex justify-center items-center'>
        <Spinner size='lg' />
      </div>
    )

  return (
    <div className='p-16 flex flex-col gap-[80px]'>
      <div className='flex'>
        <div className=' w-full'>
          <h1 className='font-bold font-noto-sans leading-[50px] text-[50px] text-royalblue'>{society?.societyName}</h1>
          <p className='mt-[40px] text-gray-800 font-noto-sans'>{society?.societyDescription}</p>
        </div>
        <Icon
          imageWidth={'w-[40%] h-[100%] '}
          image={
            society?.groupMemberImage ||
            society?.image ||
            'https://firebasestorage.googleapis.com/v0/b/society-management-syste-446c5.appspot.com/o/society%2F360_F_461470323_6TMQSkCCs9XQoTtyer8VCsFypxwRiDGU.jpg?alt=media&token=736c0d79-baa8-4f72-800f-b8bda8f57142'
          }
        />
      </div>
      {society?.headInformation && (
        <div className='text-center'>
          <h1 className='font-bold font-noto-sans  text-[50px] text-royalblue'>Society Head</h1>
          <div className='mt-[30px] text-start  text-gray-800 font-noto-sans' dangerouslySetInnerHTML={{ __html: society.headInformation }} />
        </div>
      )}
      <div className='text-center'>
        <h1 className='font-bold font-noto-sans  text-[50px] text-royalblue'>Mission</h1>
        <div className='mt-[30px] text-start  text-gray-800 font-noto-sans' dangerouslySetInnerHTML={{ __html: society.mission }} />
      </div>
      <div className='text-center'>
        <h1 className='font-bold font-noto-sans  text-[50px] text-royalblue'>Achievements</h1>
        <div className='mt-[30px] text-start  text-gray-800 font-noto-sans' dangerouslySetInnerHTML={{ __html: society.achievements }} />
      </div>
      <div className='text-center'>
        <h1 className='font-bold font-noto-sans  text-[50px] text-royalblue'>Rules & Regulations</h1>
        <div className='mt-[30px] text-start  text-gray-800 font-noto-sans' dangerouslySetInnerHTML={{ __html: society.rules }} />
      </div>
      <section className='w-full flex flex-col justify-center items-center mb-10'>
        <h1 className='font-bold font-noto-sans  text-[50px] text-royalblue'>Gallery</h1>
        <div className='flex flex-wrap gap-[20px] justify-center mb-[50px]'>
          {society?.galleryImages?.map((item, index) => (
            <ImageCard key={item} image={item} />
          ))}
        </div>
      </section>
      <FlexCard usersCount={usersCount} eventsCount={eventsCount} />
    </div>
  )
}

export default Society
