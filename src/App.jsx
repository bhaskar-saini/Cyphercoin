import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Market from './pages/market/Market'
import Choose from './pages/choose/Choose'
import Join from './pages/join/Join'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/market/:coinId' element={<Market/>} />
        <Route path='/choose' element={<Choose/>} />
        <Route path='/join' element={<Join/>} />
      </Routes>
    </div>
  )
}

export default App