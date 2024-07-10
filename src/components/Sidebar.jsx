import React from 'react'
import { ChevronRight } from 'react-feather'

const Sidebar = () => {
  return (
    <div className='bg-[#121417] h-[calc(100vh-3rem)] border-r border-r-[#9fadbc29] w-[280px] '>
      Sidebar
      <div className='p-2'>
        <button className='hover:bg-slate-600 rounded-sm'>
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  )
}

export default Sidebar
