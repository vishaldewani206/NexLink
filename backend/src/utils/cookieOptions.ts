export const cookieOptions = (age: number): object=>{
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'dev', // Set to true in production, false in development
    sameSite: process.env.NODE_ENV !== 'dev' ? 'None' : 'Lax', // Use 'None' in production, 'Lax' in development
    path: "/",
    maxAge: age || (30 * 24 * 60 * 60 * 1000)
  }
}