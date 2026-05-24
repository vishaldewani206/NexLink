
import { Outlet } from 'react-router-dom'




export const FirstTimeLayout = () => {
  return (
    <section className='w-full min-h-screen  '>
      <div className='p-4 md:p-8 mx-auto min-h-screen container '>
        <Outlet />
      </div>
    </section>
  )
}
