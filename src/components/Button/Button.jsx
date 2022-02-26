import React from 'react'
import { ButtonElement } from './ButtonElements'
const Button = (props) => {
  return (
      <>
        {
            props.border ? (
                <>
                    <ButtonElement>
                        {props.children}
                    </ButtonElement>
                </>

            ):(
                    
                <>
                
                </>
            ) 
        }
      </>
  )
}

export default Button