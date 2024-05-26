'use client'

import assets from '@/app/assets/assets'
import Icon from '@/app/components/form/Icon'
import { useRouter, usePathname } from 'next/navigation'
import { ROUTES } from '@/app/constants'
import { useDispatch, useSelector } from 'react-redux'
import { adminRoutes, loggedOutRoutes, ownerRoutes } from '../constants/routes'

const Navbar = () => {
  const router = useRouter()
  const pathname = usePathname()
  const { token, userInfo } = useSelector(state => state.auth)

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
    <div className='self-stretch flex flex-row items-start justify-start pt-0 px-0 box-border top-[0] sticky max-w-full z-50'>
      <header className='flex-1 bg-royalblue flex flex-row items-center justify-end py-4 px-6 box-border gap-[20px] max-w-full text-left text-smi text-white font-noto-sans'>
        {/* <Icon imageHeight={'h-[39px]'} imageWidth={'w-[57px]'} image={assets.icons.logo} /> */}
        <div className='w-full flex flex-row items-center justify-end gap-[24px] max-w-full mq450:w-[249px]'>
          {data?.map((item, index) => (
            <div
              key={index}
              onClick={() => router.push(item?.route)}
              className={`relative cursor-pointer leading-[16px] font-semibold z-[1] ${navActiveColor(item?.route) ? 'underline text-white' : 'text-offWhite'}`}
            >
              {item?.label}
            </div>
          ))}
          <div
            onClick={() => router.push(ROUTES.login)}
            className='h-[30px] w-[30px] rounded-lg box-border flex flex-row items-center justify-center p-1.5 relative gap-[10px] z-[1] border-[1.5px] border-dashed border-gray-300'
          >
            <Icon imageHeight={'max-h-[18px]'} imageWidth={'max-w-[18px]'} image={assets.icons.logout} />
          </div>
        </div>
      </header>
    </div>
  )
}

export default Navbar
