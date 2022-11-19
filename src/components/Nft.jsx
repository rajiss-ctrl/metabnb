import { Box, Button, Heading, Text,Image } from '@chakra-ui/react'
import NFTimg from '../assets/images/NftImg.svg'

import React from 'react'

 const Nft = () => {
  return (
    <Box padding={['30px','30px','50px','0 80px','0 100px']}  background={'linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%)'} height={['auto','auto','auto','700px','774px']} display={'flex'} justifyContent={['center','center','center','space-between','space-between']} alignItems={'center'} flexDirection={['column','column','column','row','row']}>
        <Box width={['100%','100%','100%','50%','50%']} textAlign={['center','center','left','left','left']}>
            <Heading fontSize={'48px'} fontWeight={'700'} lineHeight={'60px'} color={'#FFFFFF'} fontFamily={'Red Rose'}>Metabnb NFTs</Heading>
            <Text textAlign={['center','center','left','left','left']} fontSize={'18px'} paddingRight={['0','0','0','27px','100px']} fontWeight={'400'} lineHeight={'30px'} color={'#FFFFFF'} margin={'35px 0 57px 0'} fontFamily={'Red Rose'}>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</Text>
            <Button fontSize={'16px'} fontWeight={'400'} lineHeight={''} color={'#900664'} fontFamily={'Red Rose'} marginBottom={['30px','30px','0','0','0']}>Learn more</Button>
        </Box>
        <Box width={['100%','100%','100%','50%','50%']}  display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Box width={'100%'}>
              <Image width={['100%','100%','100%','100%','95%','95%']} src={NFTimg}/>
            </Box>
        </Box>
    </Box>
  )
}
export default Nft;