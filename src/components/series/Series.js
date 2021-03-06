import React from 'react'
import styled from 'styled-components'
import { loadDetail } from '../../actions/detailsTvActions'
import {useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'

const Series = ({title,image,id})=>{
    const finalImage = `https://image.tmdb.org/t/p/w500${image}`
    const dispatch = useDispatch();
    const loadDetailHandler = () =>{
        dispatch(loadDetail(id))
    }
    return(
        <Serie onClick={loadDetailHandler}>
            <Link to={`/series/${id}`}>
                <h1>{title}</h1>
                <img src={finalImage} alt={title}/>
                </Link>
        </Serie>
    )
}

const Serie = styled.div`
width: 100%;
max-height: 400px;
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
    height: 2rem;
    font-size: 1rem;
    text-align: center;
    color: #47CCA0;
    z-index: 4;
}
`

export default Series