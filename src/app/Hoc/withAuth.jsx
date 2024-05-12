'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import routes from '../routes'
import { useDispatch, useSelector } from 'react-redux'

const withAuth = WrappedComponent => {
  return props => {
    const { token } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const router = useRouter()

    useEffect(() => {
      if (!token) return router.push(routes.LOGIN)

      // router.push(routes.REGISTER)
    }, [])

    return <WrappedComponent {...props} />
  }
}

export default withAuth
