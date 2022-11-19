import { Box, Button, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Location from '../../assets/images/location.png'
import { CardItems } from './CardItems'

const PlaceToStay = ({showPop,handlePop}) => {
  return (
    <Box onClick={ !showPop && handlePop}>

      <Box>
        <Box padding={['0 30px','0 40px','0 80px','0 60px','0 100px']} margin={'60px 0'} fontFamily={'Red Rose'} display={'flex'}  justifyContent={'flex-start'} alignItems={'center'} flexDirection={['row']} flexWrap={['wrap','wrap','wrap','no-wrap','no-wrap']}>
          <Text fontSize={'20px'} fontWeight={'400'} lineHeight={'25px'} marginRight={['24px','20px','25px','16px','48px']}>Resturant</Text>
          <Text fontSize={'20px'} fontWeight={'400'} lineHeight={'25px'} marginRight={['24px','20px','25px','16px','48px']}>Cottage</Text>
          <Text fontSize={'20px'} fontWeight={'400'} lineHeight={'25px'} marginRight={['24px','20px','25px','16px','48px']}>Castle</Text>
          <Text fontSize={'20px'} fontWeight={'400'} lineHeight={'25px'} marginRight={['24px','20px','25px','16px','48px']}>fantast city</Text>
          <Text fontSize={'20px'} fontWeight={'400'} lineHeight={'25px'} marginRight={['24px','20px','25px','16px','48px']}>beach</Text>
          <Text fontSize={'20px'} fontWeight={'400'} lineHeight={'25px'} marginRight={['24px','20px','25px','16px','48px']}>carbins</Text>
          <Text fontSize={'20px'} fontWeight={'400'} lineHeight={'25px'} marginRight={['24px','20px','25px','16px','48px']}>Off-grid</Text>
          <Text fontSize={'20px'} fontWeight={'400'} lineHeight={'25px'} marginRight={['24px','20px','25px','16px','48px']}>Farm</Text>
          <Box marginTop={['8px','8px','8px','8px','0']} marginLeft={['0','0','40px','40px','40px']}><Button display={'flex'} gap={'10px'}><Text fontSize={['12','14px','14px','15px','15px']}>Location</Text><Image src={Location}/></Button></Box>
        </Box>

        <Box  marginBottom={'43px'} padding={['0 15px','0 50px','0 10px','0 35px','0 0 0 0px']} width={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'} gap={['15px','15px','15px','10px','15px']} flexWrap={'wrap'}>
          {CardItems.map((item)=>{
            return(
              <Box background={'linear-gradient(124.4deg, #FFFFFF 10.8%, #FFFFFF 87.34%)'} border={'1px'} borderColor={'#D7D7D7'} borderRadius={'15px'} display={'flex'} alignContent={'center'} justifyContent={'center'}  padding={['10px','10px','16px','10px','15px']} width={['100%','100%','331px','225px','260px']} key={item.id}>
                  <Box width={''}>
                    <Image width={['331px','400px','297','290px','290px']} src={item.img}/>
                    <Box display={'flex'} marginTop={'15px'} justifyContent={'space-between'} alignItems={'center'}>
                      <Text color={' #434343'} marginBottom={'10px'} fontSize={'12px'} fontWeight={'400'} lineHeight={'13px'}>{item.name}</Text>
                      <Text color={'#434343'} marginBottom={'10px'} fontSize={'12px'} fontWeight={'700'} lineHeight={'13px'}>{item.purpose}</Text>
                    </Box>
                    <Box display={'flex'} marginBottom={'10px'} justifyContent={'space-between'} alignItems={'center'}>
                      <Text color={' #434343'}  fontSize={'12px'} fontWeight={'400'} lineHeight={'13px'}>{item.dist}</Text>
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