import React from 'react'
import './globalStyles.css'
import MainComponent from './Components/MainComponent'
import Header from './Components/Header'
import NavBarComponent from './Components/NavBarComponent'
import { Route, Routes } from 'react-router-dom'
import HouseList from './Components/HouseList'

const App: React.FC = () => {
  return (
    <>
    <Header />
    <NavBarComponent />
      <Routes>
      <Route path='/' element={ <MainComponent /> }/>
      <Route path='/houses' element={<HouseList />}/>
      </Routes>
    </>
  )
}

export default App
