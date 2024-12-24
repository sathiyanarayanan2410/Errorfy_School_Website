import React from 'react'
import { Outlet,Routes,Route } from 'react-router-dom'
import Navbar from './pages/Navbar'
import Footer from './pages/Footer'
import Contact from './pages/Contact'
import Hero from './pages/Hero'

const Layout = () => {
  return (
    <div className='w-screen h-screen overflow-y-auto overflow-x-hidden bg-gray-100'>
      <Navbar/>
      <Outlet/>
      <Routes>
        <Route path='/' element={<Hero/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default Layout
