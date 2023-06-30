import React from 'react'
import Header from './Header'
import HouseForm from './HouseForm'
import NavBarComponent from './NavBarComponent'
const MainComponent: React.FC = () => {
  return (
    <div>
        <Header />
        <NavBarComponent />
        <HouseForm />
    </div>
  )
}

export default MainComponent
