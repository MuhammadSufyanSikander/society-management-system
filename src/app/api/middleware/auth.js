import jwt from 'jsonwebtoken'

export const checkAuth = async ({ token, role }) => {
  if (!token) return { success: false, message: 'Unauthenticated.' }

  const user = await jwt.verify(token, 'secretkey')

  if (role.includes(user.role)) return { success: true, message: 'Unauthenticated.' }

  return { success: false, message: 'You are not authorized to use this request.' }
}
