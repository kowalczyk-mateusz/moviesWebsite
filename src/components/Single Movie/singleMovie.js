import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import {useHistory} from 'react-router-dom'
const SingleMovie = ()=>{

    const history = useHistory()

    const exitMovieHandler = (e) =>{
        const element = e.target;
        if(element.classList.contains('shadow')){
            document.body.style.overflow = 'auto'
            history.push('/');
        }
    
    }

const {movie, video, isLoading} = useSelector((state)=> state.detail)
const finalImage = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

return(
    <>
{!isLoading &&(
<MovieCard className="shadow" onClick={exitMovieHandler}>
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
            <MovieTrailer>
            <iframe width="560" height="315" src={`https://www.youtube.com/embed/${video}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </MovieTrailer>
    </MovieDetail>
</MovieCard>
)}
</>
)}

const MovieCard = styled(motion.div)`
position: fixed;
width: 100%;
height: 100vh;
background-color: rgba(0,0,0,0.5);
overflow: scroll;
top: 0;
left: 0;
z-index: 50;
`
const MovieDetail = styled.div`
width: 80%;
border-radius: 1rem;
padding: 2rem 10rem;
background: black;
position: absolute;
left: 10%;
color: #47CCA0;

`
const MovieImage = styled.div`
width: 100%;
height: 45vh;
img{
    width: 100%;
    height: 100%;
}
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
const MovieTrailer = styled.div`
`


export default SingleMovie