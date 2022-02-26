import React from 'react'
import { 
    Paragraph5,
    Title4
} from '../Typography';
import { 
    PicContainer,
    PicLabel,
    PicFlag
 } from './PicElement';
 import { IoLocationOutline } from 'react-icons/io5';
const PicFrame = (props) => {
  return (
      <>
        <PicContainer url={props.url} width={'100%'} height={props.height}>
            <PicLabel>
                <Title4 as={'h3'}>{props.title}</Title4>
                <PicFlag>
                    <IoLocationOutline/>
                    <Paragraph5>{props.location}</Paragraph5>
                </PicFlag>
            </PicLabel>
        </PicContainer>
      </>
  )
}

export default PicFrame