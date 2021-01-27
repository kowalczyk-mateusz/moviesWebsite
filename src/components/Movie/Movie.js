import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux';
import { loadDetail } from '../../actions/detailsActions';
import {Link} from 'react-router-dom'
const Movies = ({title,  image, id})=>{

    const finalImage = `https://image.tmdb.org/t/p/w500${image}`

    const dispatch = useDispatch()

    const loadDetailhandler = ()=>{
                dispatch(loadDetail(id))
    }
    return(
        <Movie onClick={loadDetailhandler}>
            <Link to={`/movie/${id}`}>

            <h1>{title}</h1>
            <img src={finalImage} alt={title}/>
            </Link>
        </Movie>
    )
}

const Movie = styled.div`
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

export default Movies