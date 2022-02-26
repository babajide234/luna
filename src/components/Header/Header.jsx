import React from 'react'
import { 
    HeaderContainer,
    HeaderLeft,
    HeaderRight,
} from './HeaderElement'

import { 
    Container,
    Col,
    Row
} from '../styles'

import PicFrame from './../PicFrame/PicFrame';
import { 
    Paragraph4,
    Title0,
    Title1
 } from '../Typography'

 const Header = () => {
  return (
      <>
        <HeaderContainer url={'./assets/headbg.png'} >
            <Container>
                <Row>
                    <Col>
                        <HeaderLeft>
                            <Title0>Lorem</Title0>
                            <Title1>ipsum dolor sit amet,consectetur elit.</Title1>
                            <Paragraph4>Enter a city below and lorem ipsum dolor sit amet, consectetur adipiscing elit.</Paragraph4>
                        </HeaderLeft>
                    </Col>
                    <Col>
                        <HeaderRight>
                            <PicFrame url={ './assets/hero-img.webp'} title={'Hotel d’ Capi'} location={'Brazil'} height={'450px'}/>
                        </HeaderRight>
                    </Col>
                </Row>
            </Container>
        </HeaderContainer>
      </>
  )
}

export default Header