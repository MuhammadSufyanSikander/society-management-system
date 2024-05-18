import { NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'
import localStorage from 'redux-persist/es/storage'

const SECRET_KEY = 'secretkey' // Replace with your actual secret key

const unProtectedRoutes = ['/', '/login', '/register']

// const ownerApiRoutes = ['/society']
// const adminApiRoutes = ['/society']

const protectWebRoutes = ({ pathname, token, req }) => {
  // unprotected, no token, be on same unprotected page.
  // unprotected, token, navigate to protected page
  if (unProtectedRoutes.includes(pathname)) {
    return !token ? NextResponse.next() : NextResponse.redirect(new URL('/societies', req.url))
  } else {
    // protected, no token, navigate to unprotected page.
    // protected, token, be on same protected page.
    return token ? NextResponse.next() : NextResponse.redirect(new URL('/login', req.url))
  }
}

export default async function middleware(req) {
  const { pathname } = req.nextUrl
  const token = await localStorage.getItem('auth')

  console.log("localStorage.getItem('auth')", token)

  // return protectWebRoutes({ pathname, token, req })
}

export const config = {
  matcher: ['/', '/login', '/register', '/societies'],
}
