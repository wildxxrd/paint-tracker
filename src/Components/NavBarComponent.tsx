import React from 'react'
import '../globalStyles.css'

const NavBarComponent: React.FC = () => {
  return (
    <div className='flex justify-center bg-green-400'>
        <nav className='flex text-lg'>
            <a href="#" className='px-4 py-5'>Home</a>
            <a href="#" className='px-4 py-5'>About</a>
        </nav>
    </div>
  )
}

export default NavBarComponent
