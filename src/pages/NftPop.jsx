import { Box, Button, Image, Text } from '@chakra-ui/react'
import CloseIcon from '../assets/icons/Close.svg'
import Cat from '../assets/icons/Cat-avatar.svg'
import Blue from '../assets/icons/Blue-avatar.svg'
import RightArrow from '../assets/icons/right-arrow.svg'
import React from 'react'


const NftPop = ({showPop,handlePop}) => {
  return (
    <Box   background={'rgba(64, 64, 64, 0.3)'} width={'100%'} height={'100vh'} display={showPop ? 'none' : 'flex'} justifyContent={'center'} alignItems={'center'}>
        <Box  width={['90%','90%','90%','600px','600px']} height={['auto','auto','auto','360px','326px']} borderRadius={'16px'} background={'#FFFFFF'}>
          <Box padding={['0 20px','0 20px','0 23px','0 32px','0 32px']} borderBottom={'1px'} borderColor={'#CFD8DC'} height={'78px'} width={'100%'} display={'flex'} justifyContent={'space-between'} alignItems={'center'} paddind={'33px 32px'}>
            <Text>Connect Wallet</Text>
            <Image onClick={handlePop} width={['25px','25px','30px','30px','30px']} src={CloseIcon}/>
          </Box>
          <Box padding={['20px 20px','20px 22px','20px 25px','20px 32px','20px 32px']}>
            <Text marginBottom={'20px'}>Choose your preferred wallet:</Text>
            <Button marginBottom={'12px'} outline={'0'} border={'1px'} borderColor={'#CFD8DC'} borderRadius={['5px','8px','8px','12px','12px']} width={'100%'} height={['50px','50px','60px','70px','70px']} display={'flex'} alignItems={'center'} justifyContent={'space-between'} padding={['12px 10px','12px 13px','12px 13px','12px 20px','12px 20px']}><Box  display={'flex'} alignItems={'center'} justifyContent={'center'}><Image marginRight={'15px'} width={['25px','30px','34px','40px','40px']} src={Cat}/><Text>Metamask</Text></Box><Image src={RightArrow}/></Button>
            <Button outline={'0'} border={'1px'} borderColor={'#CFD8DC'} borderRadius={['5px','8px','8px','12px','12px']} width={'100%'} height={['50px','50px','60px','70px','70px']} display={'flex'} alignItems={'center'} justifyContent={'space-between'} padding={['12px 10px','12px 13px','12px 13px','12px 20px','12px 20px']}><Box display={'flex'}  alignItems={'center'} justifyContent={'center'}><Image marginRight={'15px'} width={['25px','30px','34px','40px','40px']} src={Blue}/><Text>WalletConnect</Text></Box><Image src={RightArrow}/></Button>
          </Box>
        </Box>
    </Box> 
  )
}

export default NftPop