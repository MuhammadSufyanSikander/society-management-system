'use client'

import assets from '@/app/assets/assets'
import Icon from '@/app/components/form/Icon'
import { useRouter, usePathname } from 'next/navigation'
import { ROUTES } from '@/app/constants'
import { useDispatch, useSelector } from 'react-redux'
import { adminRoutes, loggedOutRoutes, ownerRoutes, studentRoutes } from '../constants/routes'
import { logout } from '../redux/reducers/auth'
import Link from 'next/link'

const Navbar = () => {
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
    <div className='self-stretch flex flex-row items-start justify-start pt-0 px-0 box-border top-[0] sticky max-w-full z-50'>
      <header className='flex-1 bg-royalblue flex flex-row items-center justify-end py-4 px-6 box-border gap-[20px] max-w-full text-left text-smi text-white font-noto-sans'>
        <Icon
          imageHeight={'h-[39px]'}
          imageWidth={'w-[100px]'}
          image={'https://firebasestorage.googleapis.com/v0/b/society-management-syste-446c5.appspot.com/o/gcuflogo%201.png?alt=media&token=6d736dab-0428-4009-a6e9-24f5f8a25b2e'}
        />
        <div className='w-full flex flex-row items-center justify-end gap-[24px] max-w-full mq450:w-[249px]'>
          {data?.map((item, index) => (
            <Link
              key={index}
              href={item.label === 'Profile' ? `${item?.route}/${userInfo?._id}` : item?.route}
              className={`relative cursor-pointer leading-[16px] font-semibold z-[1] ${navActiveColor(item?.route) ? 'underline text-white' : 'text-offWhite'}`}
            >
              {item?.label}
            </Link>
          ))}
          <div
            onClick={() => {
              dispatch(logout())
              router.push(ROUTES.login)
            }}
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
