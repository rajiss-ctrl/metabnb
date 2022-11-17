import { Box } from '@chakra-ui/react'
import React from 'react'
import Hero from '../components/Hero'
import Inspiration from '../components/Inspiration'
import Nft from '../components/Nft'

const Home = ({showPop, handlePop}) => {

  return (
    <Box position={''} onClick={!showPop && handlePop}>
        <Hero/>
        <Inspiration/>
        <Nft/>
    </Box>
  )
}

export default Home