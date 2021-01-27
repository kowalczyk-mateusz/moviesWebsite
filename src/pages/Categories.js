import React, {useEffect} from 'react'
import styled from 'styled-components'
import {useSelector, useDispatch} from 'react-redux'
import {loadMovies} from '../actions/movieAction'
const Categories = () =>{
const {movieGenres} = useSelector((state)=>state.movies)
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(loadMovies());
    }, [dispatch])
    
return(
       <Main>       
                <Headline>CATEGORIES</Headline>
        <CategoriesList>

                        {
                            movieGenres.map((genres)=>
                            <Genre>{genres.name}</Genre>
                        )}
        </CategoriesList>
       </Main>
    )
}

const Main = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #030B11;
`
const CategoriesList = styled.div`
width: 80%;
margin: 0 auto;
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
`
const Headline = styled.h2`
 color: #47CCA0;
 font-size: 2rem;
 padding: 1rem 0rem;
 text-align: center;
`
const Genre = styled.div`
width: 125px;
height: 100px;
background: #47CCA0;
color: #030B11;
margin: 1rem 1rem;
display: flex;
align-items: center;
justify-content: center;
font-size: 1.2rem;
&:hover{
    transform: scale(1.05);
}
`
export default Categories