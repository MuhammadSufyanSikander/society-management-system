'use client'

import { useState } from 'react'
import assets from '@/app/assets/assets'
import Icon from '@/app/components/form/Icon'
import { useRouter, usePathname } from 'next/navigation'
import { ROUTES } from '@/app/constants'
import { useDispatch, useSelector } from 'react-redux'
import { adminRoutes, loggedOutRoutes, ownerRoutes, studentRoutes } from '../constants/routes'
import { logout } from '../redux/reducers/auth'
import Link from 'next/link'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const { token, userInfo } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  let data = []
  if (!token) {
    data = loggedOutRoutes
  } else {
    if (userInfo?.role === 'student') {
      data = studentRoutes
    } else if (userInfo?.role === 'admin') {
      data = adminRoutes
    } else {
      data = ownerRoutes
    }
  }

  const navActiveColor = path => {
    const currentRoute = pathname
    return currentRoute.includes(path)
  }

  return (
    <div className='w-full z-50'>
      <header className='relative   w-full bg-royalblue flex flex-col md:flex-row items-center justify-between py-4 px-6 box-border gap-[20px] text-left text-smi text-white font-noto-sans'>
        <div className='flex w-full md:w-auto justify-between items-center'>
          <Icon
            imageHeight={'h-[39px]'}
            imageWidth={'w-[100px]'}
            image={'https://firebasestorage.googleapis.com/v0/b/society-management-syste-446c5.appspot.com/o/gcuflogo%201.png?alt=media&token=6d736dab-0428-4009-a6e9-24f5f8a25b2e'}
          />
          <button className='block z-20 md:hidden' onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}></path>
            </svg>
          </button>
        </div>
        <div className='hidden  md:flex flex-row items-center justify-end gap-[24px]'>
          {data?.map((item, index) => (
            <Link
              key={index}
              href={item.label === 'Profile' ? `${item?.route}/${userInfo?._id}` : item?.route}
              className={`relative cursor-pointer leading-[16px] font-semibold ${navActiveColor(item?.route) ? 'underline text-white' : 'text-offWhite'}`}
            >
              {item?.label}
            </Link>
          ))}
          <div
            onClick={() => {
              dispatch(logout())
              router.push(ROUTES.login)
            }}
            className='h-[30px] w-[30px] rounded-lg box-border flex flex-row items-center justify-center p-1.5 border-[1.5px] border-dashed border-gray-300'
          >
            <Icon imageHeight={'max-h-[18px]'} imageWidth={'max-w-[18px]'} image={assets.icons.logout} />
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className='absolute  top-0 right-0 p-[60px] mt-[70px] z-10 h-[88.6vh] gap-[20px] w-[200px] md:hidden flex flex-col items-center bg-royalblue text-white py-4 transition ease-in-out delay-150'>
            {data?.map((item, index) => (
              <Link
                key={index}
                href={item.label === 'Profile' ? `${item?.route}/${userInfo?._id}` : item?.route}
                className={`block  py-2 cursor-pointer leading-[16px] font-semibold ${navActiveColor(item?.route) ? 'underline text-white' : 'text-offWhite'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item?.label}
              </Link>
            ))}
            <div
              onClick={() => {
                dispatch(logout())
                router.push(ROUTES.login)
              }}
              className='h-[30px] w-[30px] rounded-lg box-border flex flex-row items-center justify-center p-1.5 border-[1.5px] border-dashed border-gray-300 mt-2'
            >
              <Icon imageHeight={'max-h-[18px]'} imageWidth={'max-w-[18px]'} image={assets.icons.logout} />
            </div>
          </div>
        )}
      </header>
    </div>
  )
}

export default Navbar
