import React from 'react'
import { Outlet } from 'react-router-dom'
import topShadow from '../assets/images/dashboard/top-shadow.svg'
import SideBar from '../components/reusuable/sidebar'
const DashboardLayout = () => {
  return (
    <>
      <div className='dashboard flex gap-5 bg-[#FAFAFA] py-5 px-7'>
        {/* Top Shape */}
        <div className='absolute -top-20 -right-10 -z-10 '>
          <img src={topShadow} alt="shadow" />
        </div>
        <SideBar />
        <main className='flex-1'>
          <Outlet />
        </main>
      </div>
    </>
  )
}

export default DashboardLayout