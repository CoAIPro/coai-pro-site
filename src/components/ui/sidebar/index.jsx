import { useEffect, useRef, useState } from 'react';
import { BsEmojiSmile } from 'react-icons/bs';
import { FiLayers } from 'react-icons/fi';
import { GoFileMedia } from 'react-icons/go';
import { HiOutlineStar } from 'react-icons/hi';
import { RiCloseLine, RiTextSnippet, RiVipCrownFill } from 'react-icons/ri';
import { RxDashboard } from 'react-icons/rx';
import { TbFileTextSpark } from 'react-icons/tb';
import Avatar from '../../../assets/images/avatar.png';
import Icons from "../../builder/icons";
import Media from "../../builder/media";
import Pages from "../../builder/pages";
import Templates from "../../builder/templates";
import Text from "../../builder/text";
import Vectors from "../../builder/vectors";


const SideBar = () => {

  const [activeItem, setActiveItem] = useState(null);
  const sidebarRef = useRef(null);
  const panelRef = useRef(null);


  const navItems = [
    { id: 'dashboard', icon: <RxDashboard />, label: "Dashboard" },
    { id: 'templates', icon: <FiLayers />, label: "Templates" },
    { id: 'pages', icon: <TbFileTextSpark />, label: "Pages" },
    { id: 'text', icon: <RiTextSnippet />, label: "Text" },
    { id: 'icons', icon: <BsEmojiSmile />, label: "Icons" },
    { id: 'vectors', icon: <HiOutlineStar />, label: "Vectors" },
    { id: 'media', icon: <GoFileMedia />, label: "Media" },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        activeItem && 
        sidebarRef.current && 
        panelRef.current &&
        !sidebarRef.current.contains(event.target) &&
        !panelRef.current.contains(event.target)
      ) {
        setActiveItem(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeItem]);

  const handleItemClick = (itemId) => {
    // If clicking the same item, close it
    if (activeItem === itemId) {
      setActiveItem(null);
    } else {
      setActiveItem(itemId);
    }
  };

  const closePanel = () => {
    setActiveItem(null);
  };

  return (
    <div ref={sidebarRef}>
      <aside className='dashSidebar'>
        <ul className='flex flex-col gap-6 items-center text-center text-[#949494]'>
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleItemClick(item.id)}
                className={`
                flex flex-col items-center gap-1 transition-colors duration-200 w-full
                ${activeItem === item.id ? 'text-primary' : 'hover:text-gray-700'}
              `}
              >
                <span className={`flex items-center justify-center text-xl h-12 w-12 bg-transparent mx-auto rounded-full ${activeItem === item.id ? 'bg-primary-dark/10 text-primary' : 'hover:text-gray-700'}`}>{item.icon}</span>
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

      {/* modals */}
      {activeItem && activeItem !== 'dashboard' && (
        <div 
          ref={panelRef}
          className="absolute z-30 top-[120px] left-40 w-[380px] h-fit bg-white rounded-2xl shadow-[0px_16px_44px_0px_#00000012] p-5"
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-gray-800">
              {navItems.find(item => item.id === activeItem)?.label}
            </h3>
            <button 
              onClick={closePanel}
              className="p-1 hover:bg-gray-100 rounded-full transition-colors"
            >
              <RiCloseLine className="text-xl text-gray-500" />
            </button>
          </div>
          
          <div className="mt-2">
            {activeItem === 'templates' && <Templates />}
            {activeItem === 'pages' && <Pages />}
            {activeItem === 'text' && <Text />}
            {activeItem === 'icons' && <Icons />}
            {activeItem === 'vectors' && <Vectors />}
            {activeItem === 'media' && <Media />}
          </div>
        </div>
      )}

    </div>
  )
}

export default SideBar