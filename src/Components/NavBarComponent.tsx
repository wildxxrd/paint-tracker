import React from 'react'
import '../globalStyles.css'
import { Link } from 'react-router-dom'

const NavBarComponent: React.FC = () => {
  return (
    <div className='flex py-10 justify-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%'>
        <nav className='flex text-[#ffffff] text-5xl font-bold font-bacasime '>
            <Link className='px-4 py-5' to='/'>New Entry</Link>
            <Link className='px-4 py-5 ' to='/houses'>Houses</Link>
            {/* <a href="#" className='px-4 py-5'>Home</a>
            <a href="#" className='px-4 py-5'>About</a> */}
        </nav>
    </div>
  )
}

export default NavBarComponent
