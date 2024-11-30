import React from 'react'
import AllStock from './components/AllStock'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import AddStock from './components/AddStock'
import GetStockByGender from './components/GetStockByGender'
import Distribute from './components/Distribute'
import AllDistribution from './components/AllDistribution'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/allStock' element={<AllStock/>} />
      <Route path='/addStock' element={<AddStock/>} />
      <Route path='/stockByGender' element={<GetStockByGender/>} />
      <Route path='/distribute' element={<Distribute/>} />
      <Route path='/Alldistribution' element={<AllDistribution/>} />

      </Routes>
      <Footer/>
    </div>
  )
}

export default App
