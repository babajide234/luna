import React from 'react'
import { 
    NavbarCointainer,
    NavMenu, 
    NavLogo,
    NavItem,
    Navlink 
} from './NavbarElements';
import { Container,Row } from '../styles';
import { Paragraph4 } from '../Typography';
import { motion } from 'framer-motion';
const Navbar = (props) => {

    const menuAnimation = {
        out:{
            y:-200,
            opacity:0,
        },
        in:{
            y:0,
            opacity:1,
            transition:{
                delay:0.6,
                delayChildren: 0.8,
                staggerChildren: 0.3,
                duration:1.4,
                type:'spring',
                stiffness:130,

            }
        }
    }
    const listAnimation = {
        out:{
            y:-200,
            opacity:0,
        },
        in:{
            y:0,
            opacity:1,
        }
    }
    const logo={
        out:{
            y:-200,
            opacity:0
        },
        in:{
            y:0,
            opacity:1,
            transition:{
                delay:0.6,
                type:'spring',
                duration:2,
                stiffness:230,
            }
        },
    }
  return (
      <>
        <NavbarCointainer bg={props.bg}>
            <Container>
                <Row>
                    <NavLogo 
                        as={motion.img}
                        src={ './assets/lunar.svg' }
                        alt={`logo`}
                        initial='out'
                        animate='in'
                        variants={logo}
                    />
                    <NavMenu as={motion.ul} 
                        initial="out"
                        animate="in"
                        variants={menuAnimation}
                    >
                        <NavItem as={motion.li} bg={props.bg} variants={listAnimation}><Navlink to ='/experience'  bg={props.bg} > <Paragraph4 as={motion.p} whileHover={{scale:1.2,cursor:'pointer',color:'#9F5F2E'}} transition={{type:'spring',stiffness:150}} >Experiences</Paragraph4> </Navlink></NavItem>
                        <NavItem as={motion.li} bg={props.bg} variants={listAnimation}><Navlink to ='/rentals'  bg={props.bg} > <Paragraph4 as={motion.p} whileHover={{scale:1.2,cursor:'pointer',color:'#9F5F2E'}} transition={{type:'spring',stiffness:150}} >Rentals</Paragraph4></Navlink></NavItem>
                        <NavItem as={motion.li} bg={props.bg} variants={listAnimation}><Navlink to ='/tours'  bg={props.bg} > <Paragraph4 as={motion.p} whileHover={{scale:1.2,cursor:'pointer',color:'#9F5F2E'}} transition={{type:'spring',stiffness:150}} >Tours</Paragraph4></Navlink></NavItem>
                        <NavItem as={motion.li} bg={props.bg} variants={listAnimation}><Navlink to ='/contact' bg={props.bg} > <Paragraph4 as={motion.p} whileHover={{scale:1.2,cursor:'pointer',color:'#9F5F2E'}} transition={{type:'spring',stiffness:150}} >Contact Us</Paragraph4></Navlink></NavItem>
                    </NavMenu>
                </Row>
            </Container>
        </NavbarCointainer>
      </>
  )
}

export default Navbar