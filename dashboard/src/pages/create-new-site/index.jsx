import React from 'react'
import { Outlet } from 'react-router-dom'

const CreateNewSite = () => {
  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      <Outlet />
    </div>
  )
}

export default CreateNewSite