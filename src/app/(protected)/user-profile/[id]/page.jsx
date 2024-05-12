'use client'

import { Avatar, Card, CardHeader, CardBody } from '@nextui-org/react'

import React, { useEffect } from 'react'

const UserProfile = () => {
  const user = {
    name: 'John Doe',
    department: 'Software Development',
    email: 'john.doe@example.com',
    photo: 'https://picsum.photos/id/1/200/300', // Replace with the actual path to the photo
    posts: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    ],
  }

  return (
    <div className='w-full relative flex flex-col items-center justify-start h-screen my-5 px-20'>
      <div className='container relative flex justify-center items-center flex-col mt-20 overflow-visible py-5'>
        <div className='w-40 h-24'>
          <Avatar src={user.photo} className='w-40 h-40 top-[-70px] absolute z-10' />
        </div>
        <div className='flex flex-col justify-center items-center gap-2'>
          <h1 className='text-22xl font-semibold leading-none text-default-600'>Zoey Lang</h1>

          <h1 className='text-large font-semibold leading-none text-default-600 italic'>department</h1>
        </div>

        <div className='mt-5 flex flex-col gap-1 justify-center items-center text-small text-default-400'>
          <p>email address . mobile number</p>
          <span>date of birth</span>
        </div>
      </div>
      <div className='gap-5 w-full h-auto flex flex-col justify-center items-center'>
        {[1, 2, 3, 4, 5].map(() => (
          <Card className='w-4/6 h-auto'>
            <CardHeader className='justify-between'>
              <div className='flex gap-5'>
                <Avatar isBordered radius='full' size='md' src='https://nextui.org/avatars/avatar-1.png' />
                <div className='flex flex-col gap-1 items-start justify-center'>
                  <h4 className='text-small font-semibold leading-none text-default-600'>Zoey Lang</h4>
                  <h5 className='text-small tracking-tight text-default-400'>@zoeylang</h5>
                </div>
              </div>
            </CardHeader>
            <CardBody className='px-3 text-small text-default-400 h-auto overflow-visible py-2'>
              <p>Frontend developer and UI/UX enthusiast. Join me on this coding adventure!</p>
              <span className='pt-2'>
                #FrontendWithZoey
                <span className='py-2' aria-label='computer' role='img'>
                  💻
                </span>
              </span>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default UserProfile
