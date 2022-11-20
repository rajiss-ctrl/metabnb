import { Box, Button, Grid, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Location from '../../assets/images/location.png'
import { CardItems } from './CardItems'

const PlaceToStay = ({showPop,handlePop}) => {
  return (
    <Box onClick={ !showPop && handlePop}>

      <Box>
        {/* <Box padding={['0 30px','0 40px','0 80px','0 60px','0 100px']} margin={'60px 0'} fontFamily={'Red Rose'} display={'flex'}  justifyContent={'flex-start'} alignItems={'center'} flexDirection={['row']} flexWrap={['wrap','wrap','wrap','no-wrap','no-wrap']}> */}
         <Grid margin={'30px 0'} padding={['0 30px','0 40px','0 80px','0 60px','0 80px']} templateColumns={['repeat(2, 1fr)','repeat(2, 1fr)','repeat(4, 1fr)','repeat(9, 1fr)','repeat(9, 1fr)']}>
          <Text fontSize={['14px','16px','16px','20px','20px']}  fontWeight={'400'} lineHeight={'25px'} >Resturant</Text>
          <Text fontSize={['14px','16px','16px','20px','20px']} fontWeight={'400'} lineHeight={'25px'} >Cottage</Text>
          <Text fontSize={['14px','16px','16px','20px','20px']} fontWeight={'400'} lineHeight={'25px'} >Castle</Text>
          <Text fontSize={['14px','16px','16px','20px','20px']} fontWeight={'400'} lineHeight={'25px'} >fantast city</Text>
          <Text fontSize={['14px','16px','16px','20px','20px']} fontWeight={'400'} lineHeight={'25px'} >beach</Text>
          <Text fontSize={['14px','16px','16px','20px','20px']} fontWeight={'400'} lineHeight={'25px'} >carbins</Text>
          <Text fontSize={['14px','16px','16px','20px','20px']} fontWeight={'400'} lineHeight={'25px'} >Off-grid</Text>
          <Text fontSize={['14px','16px','16px','20px','20px']} fontWeight={'400'} lineHeight={'25px'} >Farm</Text>
          <Box  ><Button display={'flex'} gap={'10px'}><Text fontSize={['12','14px','14px','15px','15px']}>Location</Text><Image src={Location}/></Button></Box>
        </Grid>
        {/* </Box> */}

        <Grid padding={['0 25px','0 80px','0 80px','0 80px','0 80px']}  marginBottom={'43px'}  templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)','repeat(2, 1fr)','repeat(4, 1fr)','repeat(4, 1fr)']} gap={['3']} >
          {CardItems.map((item)=>{
            return(
              <Box background={'linear-gradient(124.4deg, #FFFFFF 10.8%, #FFFFFF 87.34%)'} border={'1px'} borderColor={'#D7D7D7'} borderRadius={'15px'} display={'flex'} alignContent={'center'} justifyContent={'center'}  padding={['10px','10px','10px','10px','8px']}  key={item.id}>
                  <Box width={''}>
                    <Image width={['330px','330px','300px','290px','290px']} src={item.img}/>
                    <Box display={'flex'} marginTop={'15px'} justifyContent={'space-between'} alignItems={'center'}>
                      <Text color={' #434343'} marginBottom={'10px'} fontSize={'12px'} fontWeight={'400'} lineHeight={'13px'}>{item.name}</Text>
                      <Text color={'#434343'} marginBottom={'10px'} fontSize={'12px'} fontWeight={'700'} lineHeight={'13px'}>{item.purpose}</Text>
                    </Box>
                    <Box display={'flex'} marginBottom={'10px'} justifyContent={'space-between'} alignItems={'center'}>
                      <Text color={' #434343'} fontSize={['10px','12px','12px','10px','12px']} fontWeight={'400'} lineHeight={'13px'}>{item.dist}</Text>
                      <Text color={' #434343'} fontSize={['10px','12px','12px','10px','12px']} fontWeight={'400'} lineHeight={'13px'}>{item.duration}</Text>
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
        </Grid>
    </Box >
    </Box>
  )
}

export default PlaceToStay