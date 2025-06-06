import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/reusuable/navbar'

const AuthLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default AuthLayout