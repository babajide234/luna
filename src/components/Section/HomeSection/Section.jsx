import React from 'react'
import { SectionContainer,SectionIcon } from './SectionElements'
import { Col, Container, Row, Col3, Col2 } from './../../styles/index';
import PicFrame from './../../PicFrame/PicFrame';
import { Titlehead, Paragraph4, Title1, Paragraph3 } from './../../Typography/index';
import ParallaxComponent from './../../Parallax/ParallaxComponent';

const Section = () => {
  const style ={
    'width': '350px',
    'text-align': 'right',
    'line-height': '33px'
  }
  const style2 ={
    'border-bottom': '5px solid #111111',
    'text-align': 'left'
  }
  return (
    <>
        <SectionContainer>
            <Container>
              <Row>
                <Col>
                  <PicFrame url={'/assets/hero-img_2.webp'} title={'Hotel d’ Capi'} location={'Brazil'} height={'400px'}/>
                </Col>
                <Col>
                  <PicFrame url={'/assets/hero-img_3.webp'} title={'Hotel d’ Capi'} location={'Italy'} height={'400px'}/>
                </Col>
              </Row>
              <Row>
                <Col3>
                  <Titlehead style={style2}>Cities</Titlehead>
                </Col3>
                <Col3>
                  <PicFrame url={'/assets/hero-img_3.webp'} title={'Hotel d’ Capi'} location={'Italy'} height={'250px'}/>
                </Col3>
                <Col3>
                  <Paragraph4 style={style}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum arcu leo fermentum, eu donec in orci, nulla sit. Quam potenti sed nibh habitant eleifend urna. 
                  </Paragraph4>
                </Col3>
              </Row>
            </Container>
            <SectionIcon src={'./assets/next-divisor.png'} width={'12px'} height={'70px'} bottom={'0'} left={'50%'} />
            <SectionIcon src={'./assets/Cities.png'} width={'440px'} height={'250px'} bottom={'150px'} left={'0'} />
        </SectionContainer>
        <SectionContainer>
          <Container>
            <Row>
              <Col3></Col3>
              <Col2>
                <Title1>Rentals</Title1>
                <Paragraph3>Pick from a range of our rentals that include luxury car rentals, private jets, luxury condos, and airport drop-offs.</Paragraph3>
              </Col2>
            </Row>
            <Row>
              <Col3>
                <PicFrame url={'/assets/hero-img_3.webp'} title={'Hotel d’ Capi'} location={'Italy'} height={'250px'}/>
              </Col3>
              <Col3>
                <PicFrame url={'/assets/hero-img_3.webp'} title={'Hotel d’ Capi'} location={'Italy'} height={'250px'}/>
              </Col3>
              <Col3>
                <PicFrame url={'/assets/hero-img_3.webp'} title={'Hotel d’ Capi'} location={'Italy'} height={'250px'}/>
              </Col3>
            </Row>
          </Container>
          <SectionIcon src={'./assets/next-divisor.png'} width={'12px'} height={'70px'} bottom={'0'} left={'50%'} alt=''/>
          <SectionIcon src={'./assets/bg-p.png'} width={'500px'} height={'300px'} bottom={'0'} top={'0'} left={'0'} alt=''/>
        </SectionContainer>
        <ParallaxComponent>

        </ParallaxComponent>
    </>
  )
}

export default Section