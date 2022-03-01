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
import { motion } from 'framer-motion';
import { opacity,fromleft,fromright } from '../../utilities/animation';

 const Header = () => {
  return (
      <>
        <HeaderContainer as={motion.div} initial='out' animate='in' variants={opacity} url={'./assets/headbg.png'}  >
            <Container>
                <Row>
                    <Col>
                        <HeaderLeft as={motion.div} variants={fromleft} >
                            <Title0>Lorem</Title0>
                            <Title1>ipsum dolor sit amet,consectetur elit.</Title1>
                            <Paragraph4>Enter a city below and lorem ipsum dolor sit amet, consectetur adipiscing elit.</Paragraph4>
                        </HeaderLeft>
                    </Col>
                    <Col>
                        <HeaderRight as={motion.div} variants={fromright}>
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