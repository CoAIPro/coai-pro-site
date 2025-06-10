import { useState } from 'react'
import { BsEmojiSmile } from 'react-icons/bs'
import { FiLayers } from 'react-icons/fi'
import { GoFileMedia } from 'react-icons/go'
import { HiOutlineStar } from 'react-icons/hi'
import { RiTextSnippet, RiVipCrownFill } from 'react-icons/ri'
import { RxDashboard } from 'react-icons/rx'
import { TbFileTextSpark } from 'react-icons/tb'
import Avatar from '../../../assets/images/avatar.png'

const SideBar = () => {
  const [activeItem, setActiveItem] = useState(null);

  const navItems = [
    { id: 'dashboard', icon: <RxDashboard />, label: "Dashboard" },
    { id: 'templates', icon: <FiLayers />, label: "Templates" },
    { id: 'pages', icon: <TbFileTextSpark />, label: "Pages" },
    { id: 'text', icon: <RiTextSnippet />, label: "Text" },
    { id: 'icons', icon: <BsEmojiSmile />, label: "Icons" },
    { id: 'vectors', icon: <HiOutlineStar />, label: "Vectors" },
    { id: 'media', icon: <GoFileMedia />, label: "Media" },
  ];

  const handleItemClick = (itemId) => {
    setActiveItem(itemId);
  };

  return (
    <aside className='dashSidebar w-28 py-5 px-4 shadow-[0px_16px_44px_0px_#00000012] bg-white rounded-2xl h-full'>
      <ul className='flex flex-col gap-5 items-center text-center text-[#949494]'>
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => handleItemClick(item.id)}
              className={`
                flex flex-col items-center gap-1 transition-colors duration-200 w-full
                ${activeItem === item.id ? 'text-primary' : 'hover:text-gray-700'}
              `}
            >
              <span className="text-xl h-8 w-8 rounded-full bg-transparent mx-auto flex items-center justify-center">{item.icon}</span>
              <small className="text-xs font-medium">{item.label}</small>
            </button>
          </li>
        ))}
        <li>
          <button className="flex flex-col items-center gap-1 text-[#FF8A65] hover:text-[#FF5722] transition-colors duration-200">
            <span className="text-xl">
              <RiVipCrownFill />
            </span>
            <small className="text-xs font-medium">Pro Account</small>
          </button>
        </li>
      </ul>
      <div className='flex flex-col gap-5 items-center text-center text-[#949494] border-t border-[#E5E7EB] mt-5 pt-5'>
        <button className="rounded-full overflow-hidden hover:opacity-80 transition-opacity duration-200">
          <img src={Avatar} alt="avatar" className="w-10 h-10 object-cover" />
        </button>
      </div>
    </aside>
  )
}

export default SideBar