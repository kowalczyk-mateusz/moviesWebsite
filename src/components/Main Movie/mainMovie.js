import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'

const MainMovie = ({title, release, image, overview, id, rating}) =>{
    
    const finalImage = `https://image.tmdb.org/t/p/w500${image}`

    const Movie = styled(motion.div)`
    width: 80%;
    height: 50vh;
    margin: 0 auto;
    margin-top: 5rem;
    cursor: pointer;
    background-image: url(${finalImage});
    background-color: white;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    `

    return(
        <Movie>
            <Title>
                {title}
            </Title>
        </Movie>
    )
}

const finalImage = (props) => props.image;
console.log(finalImage);
 



const Title = styled(motion.h1)`
color: white;
text-align: center;
font-size: 2rem;

`
export default MainMovie