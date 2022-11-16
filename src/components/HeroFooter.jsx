import { Box, Image } from '@chakra-ui/react'
import MetaToken from '../assets/images/meta_token.svg'
import MetaMass from '../assets/images/meta_mass.svg'
import OpenSea from '../assets/images/open_sea.svg'
import React from 'react'

const HeroFooter = () => {
  return (
    <Box display={'flex'} justifyContent={'space-evenly'} alignItems={'center'} width={'100%'} height={['50px','50px','70px','70px','70px']} background={'linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%)'}>
        <Image width={['80px','80px','100px','179px','179px']} height={'40px'} src={MetaToken}/>
        <Image width={['80px','80px','100px','179px','179px']} height={'40px'} src={MetaMass}/>
        <Image width={['80px','80px','100px','179px','179px']} height={'40px'} src={OpenSea}/>
    </Box>
  )
}

export default HeroFooter