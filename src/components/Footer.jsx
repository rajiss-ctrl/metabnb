import { Box, Heading, Image, Text } from '@chakra-ui/react'
import Logo from '../assets/icons/GroupFooter.svg'
import Fb from '../assets/icons/facebook-263-721950.svg'
import Instagram from '../assets/icons/instagram-216-721958.svg'
import Twitter from '../assets/icons/twitter-241-721979.svg'
import React from 'react'

const Footer = () => {
  return (
    <Box  background={'#1D1D1E'} color={"#FFFFFF"} padding={['30px','30px','40px','62.88 37px','62.99 37px']} display={'flex'} justifyContent={'space-evenly'} flexDirection={['column','column','row','rpw','row']}>
      <Box marginBottom={['30px','30px','30px','0','0']}>
        <Image width={'188.1px'} marginBottom={['0','0','0','90px','100.5px']} height={'35.12px'} src={Logo}/>
        <Box marginBottom={['10px','10px','10px','50px','59.5px']} marginTop={['10px','10px','10px','0','0']} display={'flex'} gap={'15px'}>
          <Image src={Fb}/>
          <Image src={Instagram}/>
          <Image src={Twitter}/>
        </Box>
        <Text>&copy 2022 Metabnb</Text>
      </Box>

      <Box>
        <Heading marginBottom={['10px','10px','10px','22px','23px']} marginTop={['10px','10px','10px','0','0']} fontSize={'18px'} fontWeight={'700'} lineHeight={'22px'}>Community</Heading>
        <Text fontSize={'14px'} fontWeight={'400'} lineHeight={'35px'} marginBottom={['0','o','0','8px','10px']}>NFT</Text>
        <Text fontSize={'14px'} fontWeight={'400'} lineHeight={'35px'} marginBottom={['0','o','0','8px','10px']}>Tokens</Text>
        <Text fontSize={'14px'} fontWeight={'400'} lineHeight={'35px'} marginBottom={['0','o','0','8px','10px']}>Landlords</Text>
        <Text fontSize={'14px'} fontWeight={'400'} lineHeight={'35px'} marginBottom={['0','o','0','8px','10px']}>Discord</Text>
      </Box>
      
      <Box>
        <Heading marginBottom={['10px','10px','10px','22px','23px']} marginTop={['10px','10px','10px','0','0']} fontSize={'18px'} fontWeight={'700'} lineHeight={'22px'}>Places</Heading>
        <Text fontSize={'14px'} fontWeight={'400'} lineHeight={'35px'} marginBottom={['0','o','0','8px','10px']}>Castle</Text>
        <Text fontSize={'14px'} fontWeight={'400'} lineHeight={'35px'} marginBottom={['0','o','0','8px','10px']}>Farms </Text>
        <Text fontSize={'14px'} fontWeight={'400'} lineHeight={'35px'} marginBottom={['0','o','0','8px','10px']}>Beach</Text>
        <Text fontSize={'14px'} fontWeight={'400'} lineHeight={'35px'} marginBottom={['0','o','0','8px','10px']}>Learn more</Text>
      </Box>
      <Box>
        <Heading marginBottom={['10px','10px','10px','22px','23px']} marginTop={['10px','10px','10px','0','0']} fontSize={'18px'} fontWeight={'700'} lineHeight={'22px'}>About us</Heading>
        <Text fontSize={'14px'} fontWeight={'400'} lineHeight={'35px'} marginBottom={['0','0','0','8px','10px']}>Road map</Text>
        <Text fontSize={'14px'} fontWeight={'400'} lineHeight={'35px'} marginBottom={['0','0','0','8px','10px']}>Creators  </Text>
        <Text fontSize={'14px'} fontWeight={'400'} lineHeight={'35px'} marginBottom={['0','0','0','8px','10px']}>Career</Text>
        <Text fontSize={'14px'} fontWeight={'400'} lineHeight={'35px'} marginBottom={['0','0','0','8px','10px']}>Contact us</Text>
      </Box>
    </Box>
  )
}

export default Footer