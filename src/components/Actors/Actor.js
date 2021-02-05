import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {loadActorDetail} from '../../actions/actorsDetailsAction'
import { useDispatch } from 'react-redux'
import anonymo from '../../assets/images/anonymous.png'
const Actor = ({id, name, image, character}) =>{
    const dispatch = useDispatch()
    const loadDetailHandler = () =>{
        dispatch(loadActorDetail(id))
    }

    return(
    <StyledActor onClick={loadDetailHandler}>
        <Link to={`/actor/${id}`}>
            <h1>{name}</h1>
            <h2>{character}</h2>
            <img src={image === null ?   `${anonymo}` : `https://image.tmdb.org/t/p/w300/${image}`} alt={image}/>

        </Link>
    </StyledActor>
    )
}

const StyledActor = styled.div`
width: 100%;
height: 300px;
overflow: hidden;
justify-content: space-between;
cursor: pointer;
&:hover{
   transform: scale(1.02);


}

img{
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
}
h1{
    font-size: 1rem;
    text-align: center;
    color: #47CCA0;
    z-index: 4;
}
h2{
    font-size: 0.8rem;
    text-align: left;
    color: #47CCA0;
    z-index: 4;
}
`

export default Actor