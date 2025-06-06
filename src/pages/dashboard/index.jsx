import React from 'react'

const Dashboard = () => {
  return (
    <div className='space-y-5 bg-red'>
      <div className='flex justify-between items-center bg-white p-5 rounded-lg gap-5 shadow-lg'>
        <select name="select" id="select" className='select select-bordered'>
          <option value="">All Sites</option>
          <option value="">All Sites</option>
        </select>
        {/* box-shadow: 0px 16px 44px 0px #00000012; */}
        <button className='bg-gradient-primary btn-gradient'>
          Create New Site
        </button>
      </div>
      <div className='py-7 px-5'>
       <div className='space-y-2'>
          <h2 className='text-4xl font-bold'>Discover the <span className='text-primary'>CoAI.Pro</span></h2>
          <p className='text-sm text-gray-500'>Easily view, edit, and manage every site you’ve created — all from one clean dashboard.</p>
       </div>
      </div>
    </div>
  )
}

export default Dashboard