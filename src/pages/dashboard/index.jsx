import CustomSelect from "@/components/ui/CustomSelect"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import noSiteThumb from "../../assets/images/dashboard/object.svg"
import dashShape from "../../assets/images/shpaes/dash-bg-shape.svg"

const Dashboard = () => {
  const sites = ['All Sites', 'Oldest', 'Newest']
  const [selected, setSelected] = useState(sites[0])
  const navigate = useNavigate()
  return (
    <div className='space-y-5'>
      <div className='flex justify-between items-center bg-white p-5 rounded-lg gap-5 shadow-header'>
        <div className="w-28">
          <CustomSelect
            options={sites}
            value={selected}
            onChange={setSelected}
          />
        </div>
        <button className="button py-3 px-6" onClick={() => navigate('/dashboard/create-site')}>
          Create New Site
        </button>
      </div>
      <div className='py-8 px-5 bg-white rounded-lg relative overflow-hidden'>
        <img src={dashShape} alt="thumb" className='absolute top-0 right-0' />
        <div className='space-y-2'>
          <h2 className='text-4xl font-bold'>Discover the <span className='text-primary'>CoAI.Pro</span></h2>
          <p className='text-sm text-gray-500'>Easily view, edit, and manage every site you've created — all from one clean dashboard.</p>
        </div>
      </div>
      <div className='flex justify-center items-center h-[400px] pt-20'>
        <img src={noSiteThumb} alt="thumb" className='w-full h-full object-contain' />
      </div>
    </div>
  )
}

export default Dashboard