import { Box, Button, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Location from '../../assets/images/location.png'
import NftPop from '../NftPop'
import { CardItems } from './CardItems'

const PlaceToStay = ({showPop,handlePop}) => {
  return (
    <Box position={'relative'} onClick={ handlePop}>
      <Box position={'fixed'} left={'0'} top={'0'} display={{ base: showPop ? 'flex' : 'none' }}>
        <NftPop showPop={showPop} handlePop={handlePop}/>
      </Box>
      <Box>
        <Box margin={'60px 0'} fontFamily={'Red Rose'} display={'flex'}  justifyContent={'flex-start'} alignItems={'center'} flexDirection={'row'}>
          <Text fontSize={'20px'} fontWeight={'400'} lineHeight={'25px'} marginRight={'48px'}>Resturant</Text>
          <Text fontSize={'20px'} fontWeight={'400'} lineHeight={'25px'} marginRight={'48px'}>Cottage</Text>
          <Text fontSize={'20px'} fontWeight={'400'} lineHeight={'25px'} marginRight={'48px'}>Castle</Text>
          <Text fontSize={'20px'} fontWeight={'400'} lineHeight={'25px'} marginRight={'48px'}>fantast city</Text>
          <Text fontSize={'20px'} fontWeight={'400'} lineHeight={'25px'} marginRight={'48px'}>beach</Text>
          <Text fontSize={'20px'} fontWeight={'400'} lineHeight={'25px'} marginRight={'48px'}>carbins</Text>
          <Text fontSize={'20px'} fontWeight={'400'} lineHeight={'25px'} marginRight={'48px'}>Off-grid</Text>
          <Text fontSize={'20px'} fontWeight={'400'} lineHeight={'25px'} marginRight={'48px'}>Farm</Text>
          <Box marginLeft={'60px'}><Button><Text>Location</Text><Image src={Location}/></Button></Box>
        </Box>

        <Box  marginBottom={'43px'} padding={['0 30px','0 40px','0 80px','0 100px','0 70px']} width={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'} gap={['15px','15px','15px','10px','15px']} flexWrap={'wrap'}>
          {CardItems.map((item)=>{
            return(
              <Box background={'linear-gradient(124.4deg, #FFFFFF 10.8%, #FFFFFF 87.34%)'} border={'1px'} borderColor={'#D7D7D7'} borderRadius={'15px'} display={'flex'} alignContent={'center'} justifyContent={'center'}  padding={['10px','10px','10px','10px','16px']} width={['290px','290px','290px','190px','270px']} key={item.id}>
                  <Box width={''}>
                    <Image src={item.img}/>
                    <Box display={'flex'} marginTop={'15px'} justifyContent={'space-between'} alignItems={'center'}>
                      <Text color={' #434343'} marginBottom={'10px'} fontSize={'12px'} fontWeight={'400'} lineHeight={'13px'}>{item.name}</Text>
                      <Text color={'#434343'} marginBottom={'10px'} fontSize={'12px'} fontWeight={'700'} lineHeight={'13px'}>{item.purpose}</Text>
                    </Box>
                    <Box display={'flex'} marginBottom={'10px'} justifyContent={'space-between'} alignItems={'center'}>
                      <Text color={' #434343'} marginBottom={'10px'} fontSize={'12px'} fontWeight={'400'} lineHeight={'13px'}>{item.dist}</Text>
                      <Text color={' #434343'} fontSize={'12px'} fontWeight={'400'} lineHeight={'13px'}>{item.duration}</Text>
                    </Box >
                    <Box display={'flex'} marginBottom={'10px'} alignItems={'center'}>
                      <Image src={item.rating}/>
                      <Image src={item.rating}/>
                      <Image src={item.rating}/>
                      <Image src={item.rating}/>
                      <Image src={item.rating}/>
                    </Box>
                  </Box>
              </Box>
            )
          })}
        </Box>
    </Box >
    </Box>
  )
}

export default PlaceToStay