import assets from '@/app/assets/assets'
import EventCard from '@/app/components/EventCard'
import Icon from '@/app/components/form/Icon'
import React from 'react'

function page() {
  return (
    <div>
      <div
        className='relative w-full  align-middle h-[88.6vh] bg-cover '
        style={{
          backgroundImage: 'url("https://gcuf.edu.pk/pages_data/campuses/news-campus/IMGM5195_2.jpg")',
        }}
      >
        <Icon imageWidth={'w-[350px] h-[100px]'} image={assets.images.uniLogo} />
      </div>
      <div className='p-[30px]'>
        <h1 className='text-[40px]  font-noto-sans text-royalblue font-bold'>Upcoming Events</h1>
        <h1 className='text-[30px] mt-[20px] font-noto-sans text-black-100 font-bold'>At the moment, there are no upcoming events at the University</h1>
        <div className='flex flex-wrap gap-[10px] justify-center bg-slate-50 p-[15px] w-full'>
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
      </div>
    </div>
  )
}

export default page
