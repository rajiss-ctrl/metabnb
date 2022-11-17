import { Box } from '@chakra-ui/react'
import React from 'react'
import { Outlet } from 'react-router-dom'
import NftPop from '../pages/NftPop'
import Footer from './Footer'
import NavBar from './NavBar'

const Layout = ({handlePop,showPop}) => {
  return (
    <Box zIndex={'1'} position={'relative'} >
    <NavBar handlePop={handlePop} showPop={showPop}/>
      <Box zIndex={'2'} width={'100%'} position={'fixed'} left={'0'} top={'0'} display={showPop ? 'none' : 'flex'}>
        <NftPop showPop={showPop} handlePop={handlePop}/>
      </Box>
        <Outlet/>
        <Footer/>
    </Box>
  )
}

export default Layout