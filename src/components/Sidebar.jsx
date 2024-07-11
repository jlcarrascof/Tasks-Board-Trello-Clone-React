import React, { useState } from 'react'
import { ChevronRight, ChevronLeft } from 'react-feather'

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className={`bg-[#121417] h-[calc(100vh-3rem)] border-r border-r-[#9fadbc29] ${collapsed ? 'w-[42px]' : 'w-[280px]'}`}>
      {collapsed && <div className='p-2'>
        <button onClick={() => setCollapsed(!collapsed)}  className='hover:bg-slate-600 rounded-sm'>
          <ChevronRight size={18} />
        </button>
      </div>}
      {!collapsed && <div>
        Sidebar
        <button onClick={() => setCollapsed(!collapsed)} className='hover:bg-slate-600 rounded-sm'>
          <ChevronLeft size={18} />
        </button>
      </div>}
    </div>
  )
}

export default Sidebar
