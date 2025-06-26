import SideBar from '@/components/reuse/sidebar'
import { Outlet } from 'react-router-dom'
import topShadow from '../assets/images/dashboard/top-shadow.svg'
const DashboardLayout = () => {
  return (
    <>
      <div className='dashboard flex gap-5 bg-[#FAFAFA] py-5 px-7'>
        <div className='absolute -top-20 -right-10 -z-10'>
          <img src={topShadow} alt="shadow" />
        </div>
        <div className='w-[105px] absolute top-5 left-5'>
          <SideBar />
        </div>
        <main className='flex-1 pl-28'>
          <Outlet />
        </main>
      </div>
    </>
  )
}

export default DashboardLayout