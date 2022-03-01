import React from 'react'
import { ButtonElement,Arrow,ButtonElement2 } from './ButtonElements'
import { motion } from 'framer-motion'
const Button = (props) => {

    const buttonMotion = {
        rest: {
          scale: 1
        },
        hover: {
          scale: 1.1,
          color:'#9F5F2E',
          duration: 0.4,
        }
      };
      const arrowMotion = {
        rest: { 
            x:0
        },
        hover: {
            x:-100,
            transition:{
                delay:.4,
                
            }
        }
      };
  return (
      <>
      {
          props.border?(
            <motion.div variants={buttonMotion} initial="rest" whileHover="hover">
            <ButtonElement 
                as={motion.button}
            >
                {props.children}
                {/* <Arrow 
                    as={motion.img}
                    src={'./assets/icons.png'} 
                    variants={arrowMotion}
                /> */}
            </ButtonElement>
            </motion.div>
          ):(
            <ButtonElement2>
                {props.children}
                <Arrow src={'./assets/icons.png'} />
            </ButtonElement2>
          )
      }
        
      </>
  )
}

export default Button