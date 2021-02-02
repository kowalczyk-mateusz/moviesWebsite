import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
const Actor = ({id, name, image}) =>{
    const finalImage = `https://image.tmdb.org/t/p/w300${image}`
    return(
    <StyledActor>
        <Link to={`/actor/${id}`}>
            <h1>{name}</h1>
            <img src={finalImage} alt={name}/>

        </Link>
    </StyledActor>
    )
}

const StyledActor = styled.div`
width: 100%;
max-height: 250px;
overflow: hidden;
justify-content: space-between;
cursor: pointer;
&:hover{
   transform: scale(1.02);


}

img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}
h1{
    height: 2rem;
    font-size: 1rem;
    text-align: left;
    color: #47CCA0;
    z-index: 4;
}
`

export default Actor