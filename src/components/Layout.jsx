import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import NavBar from './NavBar'

const Layout = ({handlePop,showPop}) => {
  return (
    <>
        <NavBar handlePop={handlePop} showPop={showPop}/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Layout