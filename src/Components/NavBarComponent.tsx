import React from 'react'
import '../globalStyles.css'
import { Link } from 'react-router-dom'

const NavBarComponent: React.FC = () => {
  return (
    <div className='flex justify-center bg-green-400'>
        <nav className='flex text-lg'>
            <Link className='px-4 py-5' to='/'>Home</Link>
            <Link className='px-4 py-5' to='/houses'>Houses</Link>
            {/* <a href="#" className='px-4 py-5'>Home</a>
            <a href="#" className='px-4 py-5'>About</a> */}
        </nav>
    </div>
  )
}

export default NavBarComponent
