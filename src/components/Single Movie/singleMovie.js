import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import {motion} from 'framer-motion'
const SingleMovie = ()=>{

const {movie, isLoading} = useSelector((state)=> state.detail)
console.log(movie)
const finalImage = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;
const companiesImage = `https://image.tmdb.org/t/p/w300`;
return(
<MovieCard>
    <MovieDetail>
            <MovieImage>
                <img src={finalImage} alt=""/>
            </MovieImage>
            <MovieTitle>
                <h2>{movie.original_title}</h2>
            </MovieTitle>
            <MovieRating>
                <p> Movie Rating:{movie.vote_average} </p>
            </MovieRating>
            <MovieDescription>
                <p> {movie.overview} </p>
            </MovieDescription>
            <MovieReleaseDate>
                <p> Relase date: {movie.release_date} </p>
            </MovieReleaseDate>
            <MovieGenres>
                {movie.genres.map((genres) => <p key={genres.id}>{genres.name}</p>)}
            </MovieGenres>
            <MovieCompanies>
                {movie.production_companies.map((companies)=>
                    <p>{companies.name}</p>
                )}
            </MovieCompanies>
    </MovieDetail>
</MovieCard>
)}

const MovieCard = styled(motion.div)`
position: fixed;
width: 100%;
height: 100vh;
background-color: rgba(71,204,160,0.5);
overflow: scroll;
top: 0;
left: 0;
z-index: 50;
`
const MovieDetail = styled.div`
width: 80%;
border-radius: 1rem;
padding: 2rem 10rem;
background: white;
position: absolute;
left: 10%;
color: black;

`
const MovieImage = styled.div`
`
const MovieTitle = styled.div`
`
const MovieRating = styled.div`
`
const MovieDescription = styled.div`
`
const MovieReleaseDate = styled.div`
`
const MovieGenres = styled.div`
`
const MovieCompanies = styled.div`
`



export default SingleMovie