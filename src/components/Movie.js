import React from 'react'
import styled from 'styled-components'
import '../assets/fontAwesome';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { loadDetail } from '../actions/detailsActions';
const Movies = ({title, release, image, overview, id, rating})=>{

    const finalImage = `https://image.tmdb.org/t/p/w500${image}`

    const dispatch = useDispatch()

    const loadDetailhandler = ()=>{
                dispatch(loadDetail(id))
    }
    return(
        <Movie onClick={loadDetailhandler}>
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
background-color: black;
display: flex;
flex-direction: column;
justify-content: space-between;
overflow: hidden;
cursor: pointer;
position: relative;

&:hover{
    box-shadow: 0px 0px 50px 0px rgba(71,204,160,0.2);


}

img{
    object-fit: cover;
    width: 100%;
    height: 70%;
    position: center;
}
h1{
    font-size: 2rem;
    text-align: center;
    color: #47CCA0;
}
`

const Icon = styled(FontAwesomeIcon)`
color: white;
position: absolute;
top: 65%;
left: 50%;
transform: translate(-50%, -50%);
z-index: 2;
font-size: 2rem;


`
export default Movies