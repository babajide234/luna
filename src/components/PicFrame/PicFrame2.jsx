import React from 'react'
import { 
  PicContainer,
  PicLabel,
 } from './PicElement';
import { Title4 } from '../Typography';

const PicFrame2 = (props) => {
  return (
      <>
          <PicContainer url={props.url} width={'100%'} height={props.height}>
            <PicLabel>
                <Title4 as={'h3'}>{props.title}</Title4>
            </PicLabel>
          </PicContainer>
      </>
  )
}

export default PicFrame2