import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
const Loader = () =>{
    const loadingContainerVariants = {
        start: {
          transition: {
            staggerChildren: 0.2
          }
        },
        end: {
          transition: {
            staggerChildren: 0.2
          }
        }
      };
      
      const loadingCircleVariants = {
        start: {
          y: "50%"
        },
        end: {
          y: "150%"
        }
      };
      
      const loadingCircleTransition = {
        duration: 0.5,
        yoyo: Infinity,
        ease: "easeInOut"
      };
      
    return(
        <StyledLoader>
            <Load variants={loadingContainerVariants}
      initial="start"
      animate="end">
                <LoadSpan variants={loadingCircleVariants}
        transition={loadingCircleTransition} ></LoadSpan>
                <LoadSpan variants={loadingCircleVariants}
        transition={loadingCircleTransition}></LoadSpan>
                <LoadSpan variants={loadingCircleVariants}
        transition={loadingCircleTransition}></LoadSpan>
            </Load> 
        </StyledLoader>
    )
}
const StyledLoader = styled(motion.div)`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`

const Load = styled(motion.div)`
width: 10rem;
height: 10rem;
display: flex;
justify-content: space-around;
`
const LoadSpan = styled(motion.span)`
  display: block;
  width: 3rem;
  height: 3rem;
  background-color: black;
  border-radius: 5rem;
`
export default Loader