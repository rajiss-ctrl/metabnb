import { Box } from '@chakra-ui/react'
import React from 'react'
import Hero from '../components/Hero'
import Inspiration from '../components/Inspiration'
import Nft from '../components/Nft'
import NftPop from './NftPop'

const Home = ({showPop}) => {

  return (
    <Box position={'relative'}>
      <Box position={'fixed'} left={'0'} top={'0'}  width={'100%'} display={showPop ? 'none' : 'block'}>
        <NftPop showPop={showPop}/>
      </Box>
        <Hero/>
        <Inspiration/>
        <Nft/>
    </Box>
  )
}

export default Home