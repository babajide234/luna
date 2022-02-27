import React from 'react'
import { SectionContainer,SectionIcon,ContainerLeft } from './SectionElements'
import { Col, Container, Row, Col3, Col2 } from './../../styles/index';
import PicFrame from './../../PicFrame/PicFrame';
import { Titlehead, Paragraph4, Title1, Paragraph3 } from './../../Typography/index';
import ParallaxComponent from './../../Parallax/ParallaxComponent';
import { motion  } from 'framer-motion';

const Section = (props) => {
  const style ={
    'width': '350px',
    'text-align': 'right',
    'line-height': '33px'
  }
  const style2 ={
    'border-bottom': '5px solid #111111',
    'text-align': 'left'
  }

  // const variants = {
  //   hidden: {
  //     scale: 0,
  //     opacity: 0,
  //     transition
  //   },
  //   show: {
  //     scale: 1,
  //     opacity: 1,
  //     transition
  //   }
  // };
  // const { scrollYProgress } = useViewportScroll()
  // const { inView } = useContext(IntersectionContext);
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
        <ParallaxComponent/>
        <SectionContainer style={{backgroundColor:'#EEEEEE',padding:'104px 0px'}}>
          <Container>
            <Row>
              <Col3></Col3>
              <Col2>
                <Title1>Tours</Title1>
                <Paragraph3>Pick from a range of our rentals that boat crusies, brokerage, luxury tours, and concierge services.</Paragraph3>
              </Col2>
            </Row>
          </Container>
              <Row>
                <ContainerLeft as={motion.div} animate={{x:-220 , y:20}} >
                  <div className='div'>
                    <PicFrame url={'/assets/hero-img_3.webp'} title={'Hotel d’ Capi'} location={'Italy'} height={'300px'}/>
                  </div>
                  <div className='div'>
                    <PicFrame url={'/assets/hero-img_3.webp'} title={'Hotel d’ Capi'} location={'Italy'} height={'300px'}/>
                  </div>
                  <div className='div'>
                    <PicFrame url={'/assets/hero-img_3.webp'} title={'Hotel d’ Capi'} location={'Italy'} height={'300px'}/>
                  </div>
                  <div className='div'>
                    <PicFrame url={'/assets/hero-img_3.webp'} title={'Hotel d’ Capi'} location={'Italy'} height={'300px'}/>
                  </div>
                </ContainerLeft>
              </Row>  
              <Row>  
                <ContainerLeft as={motion.div} animate={{x:220 , y:20}} >
                  <div className='div'>
                    <PicFrame url={'/assets/hero-img_3.webp'} title={'Hotel d’ Capi'} location={'Italy'} height={'300px'}/>
                  </div>
                  <div className='div'>
                    <PicFrame url={'/assets/hero-img_3.webp'} title={'Hotel d’ Capi'} location={'Italy'} height={'300px'}/>
                  </div>
                  <div className='div'>
                    <PicFrame url={'/assets/hero-img_3.webp'} title={'Hotel d’ Capi'} location={'Italy'} height={'300px'}/>
                  </div>
                  <div className='div'>
                    <PicFrame url={'/assets/hero-img_3.webp'} title={'Hotel d’ Capi'} location={'Italy'} height={'300px'}/>
                  </div>
                </ContainerLeft>
              </Row>
          <SectionIcon src={'./assets/bg-p.png'} width={'500px'} height={'300px'} bottom={'0'} top={'0'} left={'0'} alt=''/>
        </SectionContainer>
        <SectionContainer style={{minHeight:'50vh',marginBottom:'0px'}}>
          <Container>
            <Row>
                <Paragraph3 style={{width:'50%',textAlign:'center',margin:'0px auto'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum arcu leo fermentum, eu donec in orci, nulla sit. Quam potenti sed nibh habitant eleifend urna. 
                </Paragraph3>
            </Row>
          </Container>
        </SectionContainer>
    </>
  )
}

export default Section