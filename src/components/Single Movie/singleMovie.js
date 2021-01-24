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

const {movie, video, isLoading, provider} = useSelector((state)=> state.detail)
const finalImage = `https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`;

return(
    <>
{!isLoading &&(
<MovieCard className="shadow" onClick={exitMovieHandler}>
    <MovieDetail>
            <MovieImage>
                <img src={finalImage} alt={finalImage}/>
                <div></div>
            </MovieImage>
    <MovieInfo>
        <MoviePoster>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
        </MoviePoster>
        <MovieOverview>
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
            </MovieOverview>
            </MovieInfo>
            <MovieGenres>
                {movie.genres.map((genres) => <p key={genres.id}>{genres.name}</p>)}
            </MovieGenres>
            <MovieCompanies>
                {movie.production_companies.map((companies)=>
                    <p key={companies.id}>{companies.name}</p>
                )}
            </MovieCompanies>
            <MovieTrailer>
            <iframe src={`https://www.youtube.com/embed/${video}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title={video}></iframe>
            </MovieTrailer>
            {provider && (
            <MovieProviders>
                <ProviderName>
            {provider.map((providers)=> <p>{providers.provider_name}</p>)}
                </ProviderName>
                <ProviderImage>
                {provider.map((providers)=> <img src={`https://image.tmdb.org/t/p/w500${providers.logo_path}`} alt={providers.logo_path}/>)}
                </ProviderImage>
            </MovieProviders>
            )}
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
overflow-x: hidden;
`
const MovieDetail = styled.div`
width: 80%;
border-radius: 1rem;
background: black;
position: absolute;
left: 10%;
color: #47CCA0;
`
const MovieImage = styled.div`
width: 100%;
height: 70vh;
overflow: hidden;
position: relative;
div{
    padding: 0;
    position: absolute;
    top: 0;
    left: -10;
    width: 100%;
    height: 100%;
    -webkit-box-shadow: inset 0px -164px 44px -19px rgba(0,0,0,0.99);
-moz-box-shadow: inset 0px -164px 44px -19px rgba(0,0,0,0.99);
box-shadow: inset 0px -164px 44px -19px rgba(0,0,0,0.99);
}
img{
    object-fit: cover;
    width: 100%;
    
}

`
const MovieInfo = styled.div`
width: 70%;
position: absolute;
height: 300px;
top: 53%;
left: 15%;
display: flex;
`
const MoviePoster = styled.div`
width: 50%;

img{
    width: 100%;
    height: 100%;
    object-fit: contain;
}
`
const MovieOverview = styled.div`
width: 50%;
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
const MovieProviders = styled.div`
img{
    width: 100%;
    height: 100%;
}
p{
    font-size: 2rem;
    color: white;
    
}
`
const ProviderName = styled.div`
`
const ProviderImage = styled.div`
`


export default SingleMovie