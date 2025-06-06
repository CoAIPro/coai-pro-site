import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../components/reusuable/sidebar'

const DashboardLayout = () => {
  return (
    <>
      <div className='flex gap-5 bg-[#FAFAFA] py-5 px-7'>
        <SideBar />
        <main className='flex-1'>
          <Outlet />
        </main>
      </div>
    </>
  )
}

export default DashboardLayout