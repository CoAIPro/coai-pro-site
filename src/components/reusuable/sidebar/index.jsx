import React from 'react'
import { BsEmojiSmile } from 'react-icons/bs'
import { FiLayers } from 'react-icons/fi'
import { GoFileMedia } from 'react-icons/go'
import { HiOutlineStar } from 'react-icons/hi'
import { RiTextSnippet, RiVipCrownFill } from 'react-icons/ri'
import { RxDashboard } from 'react-icons/rx'
import { TbFileTextSpark } from 'react-icons/tb'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    // box - shadow: 0px 16px 44px 0px #00000012;
    <aside className='dashSidebar w-28 py-5 px-4 shadow-[0px_16px_44px_0px_#00000012] bg-white rounded-2xl'>
      <ul className='flex flex-col gap-5 items-center text-center text-[##949494]'>
        <li>
          <Link to="/dashboard">
            <span><RxDashboard /></span>
            <small>Dashboard</small>
          </Link>
        </li>
        <li>
          <Link to="/dashboard">
            <span><FiLayers /></span>
            <small>Templates</small>
          </Link>
        </li>
        <li>
          <Link to="/dashboard">
            <span><TbFileTextSpark /></span>
            <small>Pages</small>
          </Link>
        </li>
        <li>
          <Link to="/dashboard">
            <span><RiTextSnippet /></span>
            <small>Text</small>
          </Link>
        </li>
        <li>
          <Link to="/dashboard">
            <span><BsEmojiSmile /></span>
            <small>Icons</small>
          </Link>
        </li>
        <li>
          <Link to="/dashboard">
            <span><HiOutlineStar /></span>
            <small>Vectors</small>
          </Link>
        </li>
        <li>
          <Link to="/dashboard">
            <span><GoFileMedia /></span>
            <small>Media</small>
          </Link>
        </li>
        <li>
          <Link to="/dashboard">
            <span>
              <RiVipCrownFill />
            </span>
            <small>Pro Account</small>
          </Link>
        </li>
      </ul>
    </aside>
  )
}

export default SideBar