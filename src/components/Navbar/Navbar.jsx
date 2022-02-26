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

const Navbar = () => {
  return (
      <>
        <NavbarCointainer>
            <Container>
                <Row>
                    <NavLogo as={motion.img} src={ './assets/lunar.svg' } alt={`logo`} />
                    <NavMenu>
                        <NavItem><Navlink> <Paragraph4>Experiences</Paragraph4> </Navlink></NavItem>
                        <NavItem><Navlink> <Paragraph4>Rentals</Paragraph4></Navlink></NavItem>
                        <NavItem><Navlink> <Paragraph4>Tours</Paragraph4></Navlink></NavItem>
                        <NavItem><Navlink> <Paragraph4>Contact Us</Paragraph4></Navlink></NavItem>
                    </NavMenu>
                </Row>
            </Container>
        </NavbarCointainer>
      </>
  )
}

export default Navbar