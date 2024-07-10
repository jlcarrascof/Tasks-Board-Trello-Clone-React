import React from 'react'
import { ChevronRight } from 'react-feather'

const Sidebar = () => {
  return (
    <div className='bg-[#121417] h-[calc(100vh-3rem)] border-r border-r-[#9fadbc29] w-[280px] '>
      Sidebar
      <div>
        <button>
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  )
}

export default Sidebar
