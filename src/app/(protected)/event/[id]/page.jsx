'use client'

import assets from '@/app/assets/assets'
import Icon from '@/app/components/form/Icon'
import { getEvent } from '@/app/redux/reducers/events'
import { Spinner } from '@nextui-org/react'
import moment from 'moment'
import { useParams } from 'next/navigation'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Event() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { event, loading } = useSelector(state => state.event)

  React.useEffect(() => {
    dispatch(getEvent({ data: { event_id: id } }))
  }, [])

  if (loading)
    return (
      <div className='h-[100vh] flex justify-center items-center'>
        <Spinner size='lg' />
      </div>
    )

  console.log('event image :', event)

  return (
    <div>
      <h1 className='text-[50px] font-noto-sans font-semibold text-royalblue p-[30px]'>{event?.title}</h1>
      <div
        className='relative w-full align-middle h-[50.6vh] bg-cover '
        style={{
          backgroundImage: `url("${event?.image}")`,
        }}
      ></div>
      <div className='p-[30px] flex flex-col gap-4'>
        <div className='flex mt-[7px] gap-3'>
          <Icon imageHeight={'w-[20px] h-[20px]'} image={assets.icons.calendar} />
          <p className='text-[14px] font-noto-sans font-[500] text-gray-100'>{moment(event?.time).format('MMMM DD, YYYY')}</p>
        </div>
        <div className='flex mt-[7px] gap-3'>
          <Icon imageHeight={'w-[20px] h-[20px]'} image={assets.icons.darkclock} />
          <p className='text-[14px] font-noto-sans font-[500] text-gray-100'>{moment(event?.time).format('h:mm A')}</p>
        </div>
        <div className='flex mt-[7px] gap-3'>
          <Icon imageHeight={'w-[20px] h-[20px]'} image={assets.icons.location} />
          <p className='text-[14px] font-noto-sans font-[500] text-gray-100'>{event.location}</p>
        </div>
        <div className='flex flex-col gap-6 font-noto-sans mt-[20px] text-[14px] text-gray-50'>
          <h1 className='text-[20px]'>Abstract</h1>
          <div dangerouslySetInnerHTML={{ __html: event.description }} />
        </div>
      </div>
    </div>
  )
}

export default Event
