import React, { useState } from 'react'
import { Flex,Box,Image,List,ListItem,Button  } from '@chakra-ui/react'
import {FaBars, FaTimes } from 'react-icons/fa'
import Logo from '../assets/icons/Group.svg'
import { Link} from 'react-router-dom'

const NavBar = ({handlePop,showPop}) => {
    const [open,setOpen] = useState(false)
    const toggle = ()=>{
        setOpen(!open)
    }
  return (
    
    <Flex  position={['relative','relative','relative','static','static']}  width={'100%'} padding={['20px 0 0 0','20px 0 0 0','20px 0 0 0','43px 60px','43px 100px']} alignItems={'center'} justifyContent={'space-between'} >
        <Link  to={'/'}>
            <Image paddingLeft={['30px','30px','30px','0','0']} width={['150px','150px','200px','200px','200px']} height={'36.67px'} src={Logo} alt="Air bnb"/>
        </Link>

        <Box display={['block','block','block','none','none']} paddingRight={['30px','30px','30px','0','0']} >
            <Box onClick={toggle} display={open ? 'none' : 'block' } fontSize={'25px'} color={'black'}>
                <FaBars/>
            </Box>
            <Box onClick={toggle}  fontSize={'25px'} display={!open ? 'none' : 'block' }  color={'black'}>
              <FaTimes/>
            </Box>
           </Box>

        <Box zIndex={'1'} paddingLeft={['30px','30px','30px','48px','48px']} paddingTop={['10px','10px','10px','0','0']} paddingBottom={['10px','10px','10px','0','0']} background={['#FFFFFF','#FFFFFF','#FFFFFF','transparent','transparent']} width={['100%']}  position={['absolute','absolute','absolute','static']} display={{base:!open ? 'none' : 'block', sm:!open ? 'none' : 'block',md:!open ? 'none' : 'block',lg:'flex'}} top={['90px','90px','90px','0','0']}  textAlign={'left'} alignItems={'center'} justifyContent={'space-between'}>
            <Box paddingRight={['0','0','0','0','185px']}>
            <List display={['block','block','block','flex', ]} fontSize={'20px'} color={'#434343'} gap={['20px','20px','20px','20px','48px']}  justifyContent={'space-between'}>
                <ListItem ><Link to={'/'}  lineHeight={'25px'}>Home</Link></ListItem>
                <ListItem><Link to={'/placetostay'} lineHeight={'25px'}>Place to stay</Link></ListItem>
                <ListItem><Link cursor={'pointer'} lineHeight={'25px'}>NFTs</Link></ListItem>
                <ListItem><Link lineHeight={'25px'}>Community</Link></ListItem>
            </List>
            </Box>
        <Box display={{base:'flex',md:'block'}}  marginTop={['30px','30px','40px','0']} alignItems={{base:'left', md:'center'}}  justifyContent={['left','center','center','center','center']}>
            <Button onClick={handlePop} borderRadius={'10px'} lineHeight={'20px'} fontWeight={'400'} fontSize={'16px'} outline={'0'} border={'0'} padding={'15px 26px'} color={'#FFFFFF'} background={'linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%)'} _hover={'none'}>Connect wallet</Button>
        </Box>
        </Box>
    </Flex>
  )
}

export default NavBar