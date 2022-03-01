import React from 'react'
import { HeaderBackground } from './HeaderElement'
import { Container,Col,Row } from './../styles/index';
import { Title1, Paragraph3 } from './../Typography/index';
const HeaderSub = () => {
  return (
    <>
        <HeaderBackground url={'./assets/landing.jpg'} bg={true}>
            <Container>
                <Row>
                    <Col>
                        <Title1>
                            Come experience the finest cities.
                        </Title1>
                        <Paragraph3>
                        Take a trip away from home, and have the best of vacation experiences.
                        </Paragraph3>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </HeaderBackground>
    </>
  )
}

export default HeaderSub