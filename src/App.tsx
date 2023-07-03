import React from 'react'
import './globalStyles.css'
import MainComponent from './Components/MainComponent'
import { Route, Routes } from 'react-router-dom'
import HouseList from './Components/HouseList'

const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={ <MainComponent /> }/>
      <Route path='/houses' element={<HouseList />}/>
    </Routes>
  )
}

export default App
