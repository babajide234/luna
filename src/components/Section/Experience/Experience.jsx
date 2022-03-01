import React from 'react'
import { SectionContainer, Cube, SectionIcon } from './../HomeSection/SectionElements';
import { Container,Col, Col4, Row } from './../../styles/index';
import { Title3, Paragraph4, Title1 } from './../../Typography/index';
import PicFrame2 from './../../PicFrame/PicFrame2';

const Experience = () => {
  return (
    <>
        <SectionContainer style={{padding:'104px 0px'}}>
            <Container>
                <Row>
                    <Col4>
                        <Title3 style={{marginBottom:'20px'}}>Featured Cities</Title3>
                        <Paragraph4 style={{lineHeight:'40px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum arcu leo fermentum, eu donec in orci, nulla sit.</Paragraph4>
                    </Col4>
                    <Col4>
                        <PicFrame2 url={'/assets/hero-img_3.webp'} title={'Morroco'} width={'100%'} height={'300px'}/>
                    </Col4>
                    <Col4>
                        <PicFrame2 url={'/assets/hero-img_3.webp'} title={'Maldives'} width={'100%'} height={'300px'}/>
                    </Col4>
                    <Col4>
                        <PicFrame2 url={'/assets/hero-img_3.webp'} title={'Italy'} width={'100%'} height={'300px'}/>
                    </Col4>
                </Row>
                <Row>
                    <Title3>With personalised fun services for you...</Title3>
                </Row>
                <Row>
                    <Cube><Paragraph4>Rentals</Paragraph4></Cube>
                    <Cube><Paragraph4>Brokerage</Paragraph4></Cube>
                    <Cube><Paragraph4>Water Sports</Paragraph4></Cube>
                    <Cube><Paragraph4>Luxury tours</Paragraph4></Cube>
                    <Cube><Paragraph4>Boat Cruise</Paragraph4></Cube>
                </Row>
            </Container>
            <SectionIcon src={'./assets/next-divisor.png'} width={'12px'} height={'70px'} bottom={'0'} left={'50%'} alt=''/>
        </SectionContainer>
        <SectionContainer style={{padding:'128px 0px'}}>
            <Container>
                <Row>
                    <Col>
                        
                    </Col>
                    <Col>
                        <Title1>Great sights to see</Title1>
                        <Paragraph4 style={{lineHeight:'30px',marginTop:'24px'}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus in id vitae, imperdiet aenean posuere. Aliquet convallis ac eget nibh vitae, fames duis. Morbi ullamcorper nibh pretium diam. Integer dolor lorem habitant condimentum tempus dis dictumst at.
                        </Paragraph4>
                    </Col>
                </Row>
                <Row style={{marginTop:'108px'}}>
                    <Col style={{textAlign:'right'}}>
                        <Title1>Set free and unwind</Title1>
                        <Paragraph4 style={{lineHeight:'30px',marginTop:'24px'}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus in id vitae, imperdiet aenean posuere. Aliquet convallis ac eget nibh vitae, fames duis. Morbi ullamcorper nibh pretium diam. Integer dolor lorem habitant condimentum tempus dis dictumst at.
                        </Paragraph4>
                    </Col>
                    <Col>

                    </Col>
                </Row>
                <Row>

                </Row>
            </Container>
        </SectionContainer>
    </>
  )
}

export default Experience