'use client'

import assets from '@/app/assets/assets'
import EventCard from '@/app/components/EventCard'
import Icon from '@/app/components/form/Icon'
import { getEvents } from '@/app/redux/reducers/events'
import { Spinner } from '@nextui-org/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Events() {
  const dispatch = useDispatch()
  const { events, loading } = useSelector(state => state.event)

  React.useEffect(() => {
    dispatch(getEvents())
  }, [])

  if (loading)
    return (
      <div className='h-[100vh] flex justify-center items-center'>
        <Spinner size='lg' />
      </div>
    )

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
     
      </div>
      {events.length === 0 && <h1 className='text-[30px] mt-[20px] font-noto-sans text-black-100 font-bold'>At the moment, there are no upcoming events at the University</h1>}
      {events.length > 0 && (
        <>
          <div className='p-[30px]'>
            <h1 className='text-[40px]  font-noto-sans text-royalblue font-bold'>Upcoming Events</h1>
            <div className='flex flex-wrap gap-[20px] justify-start bg-slate-50 p-[15px] w-full'>
              {events.map(event => (
                <EventCard key={event?._id} item={event} />
              ))}
            </div>
          </div>
          <div className='p-[30px]'>
            <h1 className='text-[40px]  font-noto-sans text-royalblue font-bold'>Past Events</h1>
            <div className='flex flex-wrap gap-[20px] justify-start bg-slate-50 p-[15px] w-full'>
              {events.map(event => (
                <EventCard key={event?._id} item={event} isPast={true} />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Events
