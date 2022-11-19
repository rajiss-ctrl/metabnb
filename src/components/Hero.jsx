import { Box, Button, Heading,  Image, Input, Text,  } from '@chakra-ui/react'
// import HeroImg1 from '../assets/images/hero_image 1.svg'
// import HeroImg2 from '../assets/images/hero_image 2.svg'
// import HeroImg3 from '../assets/images/hero_image 3.svg'
import HeroImg from '../assets/images/HeroImg.png'
import React from 'react'
import HeroFooter from './HeroFooter'

const Hero = () => {
  return (
   <>
    <Box  
        padding={['43px 30px','43px 30px','43px 30px','43px 60px','125px 119px 100.46px 100px']} 
        fontFamily={'Red Rose'} 
        display={'flex'} 
        flexDirection={['column','column','column','row','row']}>
        <Box paddingRight={['0','0','0','99px','99px']} width={['100%','100%','100%','60%','774px']}>
          <Heading fontFamily={'Red Rose'} color={'#434343'} fontSize={['30px','40px','40px','40px','50px']} letterSpacing={['-0.04em','-0.03em','-0.02em','-0.04em','-0.02em','-0.02em']} fontWeight={'400'} >Rent a <span style={{color:"#900664"}}>Place</span> away from <span style={{color:'#900664'}}>Home</span> in the <span style={{color:"#900664"}}>Metaverse</span> </Heading>
          <Text fontSize={['16px','16px','20px','20px','24px']} fontWeight={'400'} lineHeight={'35px'} color={'#434343'} margin={['25px 0 25.08px 0','25px 0 25.08px 0','25px 0 25.08px 0','20.08px 0 26.08px 0','20px 0 26.08px 0']} fontFamily={'Red Rose'}>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</Text>
          <Box  marginBottom={['30px','30px','30px','0','0']} width={'100%'} display={'flex'}>
            <Input outline={'0'} border={'1px'} borderRadius={'8px 0px 0px 8px'} width={['60%','60%','60%','390px','390px']} height={['40px','47px','47px','50px','59px']} fontSize={['10px','14px','16px','16px','16px',]} placeholder='Search for location'/>
            <Button outline={'none'} border={'none'} borderRadius={'0px 8px 8px 0px'}  width={['40%','30%','30%','230px%','230px']} height={['40px','47px','47px','50px','59px']} fontSize={['14px','14px','16px','16px','16px',]} background={'linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%)'} _hover={'none'} color={'#FFFFFF'}>Search</Button>
          </Box>
        </Box>
        <Box marginTop={['40px','40px','40px','0','0']} height={'100%'} width={['100%','100%','100%','40%','614px']} display={'flex'} justifyContent={'center'} gap={'8px'}>
            <Image width={['80%','80%','80%','100%','100%']} src={HeroImg}/>
        </Box>
    </Box>
    <HeroFooter/>
   </>  
   )
}

export default Hero