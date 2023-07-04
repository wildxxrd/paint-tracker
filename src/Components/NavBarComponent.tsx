import React from 'react'
import '../globalStyles.css'
import { Link } from 'react-router-dom'

const NavBarComponent: React.FC = () => {
  return (
    <div className='flex justify-center bg-[#FFA41B]'>
        <nav className='flex text-[#FFF6F4] text-4xl font-bacasime '>
            <Link className='px-4 py-5 hover:text-blue-400' to='/'>Home</Link>
            <Link className='px-4 py-5 hover:text-blue-400' to='/houses'>Houses</Link>
            {/* <a href="#" className='px-4 py-5'>Home</a>
            <a href="#" className='px-4 py-5'>About</a> */}
        </nav>
    </div>
  )
}

export default NavBarComponent
