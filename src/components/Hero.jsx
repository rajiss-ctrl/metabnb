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
          <Heading color={'#434343'} fontSize={['30px','46px','50px','56px','56px']} letterSpacing={'-0.02em'} lineHeight={'140%'} fontWeight={'400'} >Rent a <span style={{color:"#900664"}}>Place</span> away from <span style={{color:'#900664'}}>Home</span> in the <span style={{color:"#900664"}}>Metaverse</span> </Heading>
          <Text fontSize={['16px','16px','20px','24px','24px']} fontWeight={'400'} lineHeight={'35px'} color={'#434343'} margin={['25px 0 25.08px 0','25px 0 25.08px 0','25px 0 25.08px 0','48px 0 48.08px 0','48px 0 48.08px 0']}>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</Text>
          <Box width={'100%'} display={'flex'}>
            <Input outline={'0'} border={'1px'} borderRadius={'8px 0px 0px 8px'} width={['60%','60%','60%','390px','390px']} height={['47px','47px','47px','54px','54px']} fontSize={['10px','14px','16px','16px','16px',]} placeholder='Search for location'/>
            <Button outline={'none'} border={'none'} borderRadius={'0px 8px 8px 0px'}  width={['40%','30%','30%','230px%','230px']} height={['47px','47px','47px','54px','54px']} fontSize={['14px','14px','16px','16px','16px',]} background={'linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%)'} _hover={'none'} color={'#FFFFFF'}>Search</Button>
          </Box>
        </Box>
        <Box marginTop={['40px','40px','40px','0','0']} height={'100%'} width={['100%','100%','100%','40%','614px']} display={'flex'} justifyContent={'center'} gap={'8px'}>
          {/* <Box marginTop={'73px'} display={'flex'} flexDirection={'column'}  gap={'8px'}>
            <Image width={'234px'} src={HeroImg1}/>
            <Image width={'234px'} src={HeroImg2}/>
          </Box>
          <Box  marginBottom={''} display={'flex'}  flexDirection={'column'} gap={'8px'}>
             <Image width={'234px'} src={HeroImg3}/>
             <Image width={'234px'} src={HeroImg4}/>
            </Box> */}
            <Image width={''} src={HeroImg}/>

        </Box>
    </Box>
    <HeroFooter/>
   </>  
   )
}

export default Hero