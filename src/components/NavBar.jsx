import React, { useState } from 'react'
import { Flex,Box,Image,List,ListItem,Button, Text  } from '@chakra-ui/react'
import Logo from '../assets/icons/Group.svg'
import { Link} from 'react-router-dom'

const NavBar = ({handlePop,showPop}) => {
    const [open,setOpen]=useState(false)
    const toggle = ()=>{
        setOpen(!open)
    }
  return (
    
    <Flex position={['relative','relative','relative','static']}  width={'100%'} padding={['43px 30px','43px 30px','43px 30px','43px 60px','43px 100px']} justifyContent={'space-between'} >
        <Link to={'/'}>
            <Image  width={['150px','150px','200px','200px']} height={'36.67px'} src={Logo} alt="Air bnb"/>
        </Link>

        <Box display={['block','block','block','none','none']} >
         <Box onClick={toggle} display={{base: open ? 'none' : 'block' }} fontSize={'30px'} color={'blach'}>X</Box>
           <Box onClick={toggle} width={'25px'} height={'14px'} display={{ base: open ? 'block' : 'none', md: 'block' }}>
             <Box width={'100%'} height={'1.5px'} background={'black'}></Box>
              <Box margin={'4px 0'} width={'100%'} height={'1.5px'} background={'black'}></Box>
              <Box width={'100%'} height={'1.5px'} background={'black'}></Box>
             </Box>
           </Box>

        <Box position={['absolute','absolute','absolute','static']} top={['90px','90px','90px','0']} display={['block','block','block','flex' ]} textAlign={'left'} alignItems={'center'} justifyContent={'space-between'}>
            <Box paddingRight={['0','0','0','50px','185px']}>
            <List display={['block','block','block','flex' ]} fontSize={'20px'} color={'#434343'} gap={['20px','20px','20px','20px','48px']}  justifyContent={'space-between'}>
                <ListItem><Link to={'/'} lineHeight={'25px'}>Home</Link></ListItem>
                <ListItem><Link to={'/placetostay'} lineHeight={'25px'}>Place to stay</Link></ListItem>
                <ListItem><Text onClick={handlePop} cursor={'pointer'} lineHeight={'25px'}>NFTs</Text></ListItem>
                <ListItem><Link lineHeight={'25px'}>Community</Link></ListItem>
            </List>
            </Box>
        <Box display={{base:'flex',md:'block'}} marginTop={['30px','30px','40px','0']} alignItems={{base:'left', md:'center'}}  justifyContent={['left','center','center','center','center']}>
            <Button borderRadius={'10px'} lineHeight={'20px'} fontWeight={'400'} fontSize={'16px'} outline={'0'} border={'0'} padding={'15px 26px'} color={'#FFFFFF'} background={'linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%)'} _hover={'none'}>Connect wallet</Button>
        </Box>
        </Box>
    </Flex>
  )
}

export default NavBar