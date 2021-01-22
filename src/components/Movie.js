import React from 'react'
import styled from 'styled-components'

const Movies = ({title, release, image, overview, id, rating})=>{
    const finalImage = `https://image.tmdb.org/t/p/w500${image}`
    return(
        <Movie>
            <h1>{title}</h1>
            {/* <h2>{release}</h2>
            <h3>Rating: {rating}</h3> */}
            <img src={finalImage} alt={title}/>
            {/* <p>{overview}</p> */}


        </Movie>
    )
}

const Movie = styled.div`
width: 100%;
height: 50vh;
border-radius: 1rem;
background-color: white;
display: flex;
flex-direction: column;
justify-content: space-between;
overflow: hidden;
img{
    object-fit: cover;
    width: 100%;
    height: 70%;
    position: center;
}
h1{
    font-size: 2rem;
    text-align: center;
}
`
export default Movies