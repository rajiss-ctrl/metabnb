import { Box, Button, Image, Text } from '@chakra-ui/react'
import CloseIcon from '../assets/icons/Close.svg'
import Cat from '../assets/icons/Cat-avatar.svg'
import Blue from '../assets/icons/Blue-avatar.svg'
import RightArrow from '../assets/icons/right-arrow.svg'
import React from 'react'


const NftPop = ({showPop,handlePop}) => {
  return (
    <Box zIndex={'1'} background={'rgba(64, 64, 64, 0.3)'} width={'100%'} height={'100vh'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <Box width={'600px'} height={'326'} borderRadius={'16px'} background={'#FFFFFF'}>
          <Box borderBottom={'1px'} borderColor={'#CFD8DC'} height={'78px'} width={'100%'} display={'flex'} justifyContent={'space-between'} paddind={'33px 32px'}>
            <Text>Connect Wallet</Text>
            <Image onClick={handlePop} width={'30px'} src={CloseIcon}/>
          </Box>
          <Box padding={'20px 32px'}>
            <Text marginBottom={'20px'}>Choose your preferred wallet:</Text>
            <Button marginBottom={'12px'} outline={'0'} border={'1px'} borderColor={'#CFD8DC'} borderRadius={'12px'} width={'100%'} display={'flex'} alignItems={'center'} justifyContent={'space-between'} padding={'12px 20px'}><Box display={'flex'}><Image marginRight={'15px'} width={'40px'} src={Cat}/><Text>Metamask</Text></Box><Image src={RightArrow}/></Button>
            <Button outline={'0'} border={'1px'} borderColor={'#CFD8DC'} borderRadius={'12px'} width={'100%'} display={'flex'} alignItems={'center'} justifyContent={'space-between'} padding={'12px 20px'}><Box display={'flex'}><Image marginRight={'15px'} width={'40px'} src={Blue}/><Text>WalletConnect</Text></Box><Image src={RightArrow}/></Button>
          </Box>
        </Box>
    </Box> 
  )
}

export default NftPop