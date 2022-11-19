import { Box, Heading, Text,Image } from '@chakra-ui/react'
import React from 'react'
import { CardItems } from './InspirationCardItems'

const Inspiration = () => {
  return (
    <Box>
        <Heading textAlign={'center'} fontFamily={'Red Rose'} margin={'39px 0 43px 0'} fontSize={['20px','20px','30px','40px','48px']} fontWeight={'700'} color={'#000000'} lineHeight={['30px','30px','30px','60px','60px']}>Inspiration for your next adventure</Heading>
        <Box  marginBottom={'43px'} padding={['0 15px','0 50px','0 10px','0 35px','0']} width={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'} gap={['15px','15px','15px','10px','10px']} flexWrap={'wrap'}>
          {CardItems.map((item)=>{
            return(
              <Box background={'linear-gradient(124.4deg, #FFFFFF 10.8%, #FFFFFF 87.34%)'} border={'1px'} borderColor={'#D7D7D7'} borderRadius={'15px'} display={'flex'} alignContent={'center'} justifyContent={'center'}  padding={['10px','10px','16px','10px','15px']} width={['100%','100%','331px','225px','290px']} key={item.id}>
                  <Box width={''}>
                    <Image width={['331px','400px','297','290px','290px']} src={item.img}/>
                    <Box display={'flex'} marginTop={'15px'} justifyContent={'space-between'} alignItems={'center'}>
                      <Text color={' #434343'} marginBottom={'10px'} fontSize={'12px'} fontWeight={'400'} lineHeight={'13px'}>{item.name}</Text>
                      <Text color={'#434343'} marginBottom={'10px'} fontSize={'12px'} fontWeight={'700'} lineHeight={'13px'}>{item.purpose}</Text>
                    </Box>
                    <Box display={'flex'} marginBottom={'10px'} justifyContent={'space-between'} alignItems={'center'}>
                      <Text color={' #434343'} fontSize={['10px','12px','12px','10px','12px']} fontWeight={'400'} lineHeight={'13px'}>{item.dist}</Text>
                      <Text color={' #434343'} fontSize={['10px','12px','12px','9px','12px']} fontWeight={'400'} lineHeight={'13px'}>{item.duration}</Text>
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
    </Box>
  )
}

export default Inspiration