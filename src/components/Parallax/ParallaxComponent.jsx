import React from 'react'
import { Psection,Pcontent } from './ParallaxElement';
import { useParallax } from 'react-scroll-parallax';
import { ParallaxBanner } from 'react-scroll-parallax';
import { Container, Row,Col } from './../styles/index';
import { Paragraph4, Title4 } from './../Typography/index';
const ParallaxComponent = () => {
//   const { ref } = useParallax({ speed: 10 });

  return (
      <>
        <Psection url={'./assets/parallax.jpg'}>

            {/* <ParallaxBanner
                layers={[{ image: './assets/parallax.jpg', speed: 10 }]}
                className="parallax"
            > */}
                <Container>
                    <Row>
                        <Col></Col>
                        <Col>
                            <Pcontent>
                                <Paragraph4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea vestibulum est viverra massa massa nibh leo in vitae. Tempor molestie dignissim nunc semper elit odio ipsum. Convallis nisl donec venenatis, aenean tortor viverra.</Paragraph4>
                                <Title4>Mohammed Saleh</Title4>
                            </Pcontent>
                        </Col>
                    </Row>
                </Container>
            {/* </ParallaxBanner> */}
        </Psection>
      </>
  )
}

export default ParallaxComponent