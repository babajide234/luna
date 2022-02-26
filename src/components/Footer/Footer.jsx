import React from 'react'
import { Paragraph5, Title4 } from '../Typography';
import { Container } from './../styles/index';
import { Paragraph4} from './../Typography/index';
import { 
    FooterContainer,
    FooterMenu,
    Copyrite,
    FooterMenuItem,
    FooterMenuListItem,
    FooterMenuList,
    FooterMenuListLink,
    FooterInnerContainer,
    SocialMenu,
    SocialMenuItem,
    SocialMenuLink
 } from './FooterElement';
const Footer = () => {
  return (
      <>
        <FooterContainer>
            <Container>
                <FooterInnerContainer>

                <FooterMenu>
                    <FooterMenuItem>
                        <Title4 as={'h4'}>Explore</Title4>
                        <FooterMenuList>
                            <FooterMenuListItem><FooterMenuListLink><Paragraph4>Home</Paragraph4></FooterMenuListLink></FooterMenuListItem>
                            <FooterMenuListItem><FooterMenuListLink><Paragraph4>About Us</Paragraph4></FooterMenuListLink></FooterMenuListItem>
                            <FooterMenuListItem><FooterMenuListLink><Paragraph4>Contacts</Paragraph4></FooterMenuListLink></FooterMenuListItem>
                        </FooterMenuList>
                    </FooterMenuItem>
                    <FooterMenuItem>
                        <Title4 as={'h4'}>Tours</Title4>
                        <FooterMenuList>
                            <FooterMenuListItem><FooterMenuListLink><Paragraph4>Luxury Tours</Paragraph4></FooterMenuListLink></FooterMenuListItem>
                            <FooterMenuListItem><FooterMenuListLink><Paragraph4>Boat Cruises</Paragraph4></FooterMenuListLink></FooterMenuListItem>
                            <FooterMenuListItem><FooterMenuListLink><Paragraph4>Brokerage</Paragraph4></FooterMenuListLink></FooterMenuListItem>
                            <FooterMenuListItem><FooterMenuListLink><Paragraph4>Concierge Services</Paragraph4></FooterMenuListLink></FooterMenuListItem>
                        </FooterMenuList>
                    </FooterMenuItem>
                    <FooterMenuItem>
                        <Title4 as={'h4'}>Rentals</Title4>
                        <FooterMenuList>
                            <FooterMenuListItem><FooterMenuListLink><Paragraph4>Luxury Car Rentals</Paragraph4></FooterMenuListLink></FooterMenuListItem>
                            <FooterMenuListItem><FooterMenuListLink><Paragraph4>Private Jets</Paragraph4></FooterMenuListLink></FooterMenuListItem>
                            <FooterMenuListItem><FooterMenuListLink><Paragraph4>Luxury Condos</Paragraph4></FooterMenuListLink></FooterMenuListItem>
                            <FooterMenuListItem><FooterMenuListLink><Paragraph4>Airport Drop-offs</Paragraph4></FooterMenuListLink></FooterMenuListItem>
                        </FooterMenuList>
                    </FooterMenuItem>
                </FooterMenu>
                <Copyrite>
                    <SocialMenu>
                        <SocialMenuItem><SocialMenuLink><Paragraph4>Instagram</Paragraph4></SocialMenuLink></SocialMenuItem>
                        <SocialMenuItem><SocialMenuLink><Paragraph4>Facebook</Paragraph4></SocialMenuLink></SocialMenuItem>
                        <SocialMenuItem><SocialMenuLink><Paragraph4>Twitter</Paragraph4></SocialMenuLink></SocialMenuItem>
                    </SocialMenu>  
                    <Paragraph5>(c) Lunar Luxury life, 2022. All Rights Reserved.</Paragraph5>
                </Copyrite>
                </FooterInnerContainer>
            </Container>
        </FooterContainer>
      </>
  )
}

export default Footer