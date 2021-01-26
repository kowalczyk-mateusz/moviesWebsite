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

const {movie, video, isLoading, actors} = useSelector((state)=> state.detail)
const finalImage = `https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`;


const MovieInfo = styled.div`
width: 100%;
height: 90vh;
background: url(${finalImage});
background-size: cover;
background-repeat: no-repeat;
-webkit-box-shadow: inset 0px -200px 800px -19px rgba(0,0,0,1);
-moz-box-shadow: inset 0px -300px 80px -19px rgba(0,0,0,1);
box-shadow: inset 0px -300px 80px -19px rgba(0,0,0,1);
display: flex;
align-items: flex-end;
color: white;
padding: 0rem 12rem;
font-family: 'Oswald', sans-serif;

`

//
return(
    <>
{!isLoading &&(
<MovieCard className="shadow" onClick={exitMovieHandler}>
    <MovieDetail>
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
                <div>
                <Line/>
                <h3>ZOBACZ ZWIASTUN</h3>
                <Line/>
                </div>
            <iframe src={`https://www.youtube.com/embed/${video}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title={video}></iframe>

                </MovieTrailer>
                    <MovieActors>
               {actors.map((actor) => (<h1> actor.name</h1>))};
                    </MovieActors>
          
    </MovieDetail>
</MovieCard>
)}
</>
)}

const MovieCard = styled(motion.div)`
width: 100%;
min-height: 100vh;
background: rgba(0,0,0,0.5);
position: fixed;
overflow-y: scroll;
z-index: 999;
top: 0;
left: 0;
&::-webkit-scrollbar{
width: 0.5rem;
}
&::-webkit-scrollbar-thumb{
background-color: #ff7676;
}
&::-webkit-scrollbar-track{
background-color: white;
}
`
const MovieDetail = styled.div`
width: 80%;
position: absolute;
left: 10%;
z-index: 999;
background: black;
`

const MoviePoster = styled.div`
height: 300px;
flex: 1;
img{
    width: 100%;
    height: 100%;
    object-fit: contain;
}
`
const MovieOverview = styled.div`
display: flex;
flex: 1;
height: 300px;
flex-direction: column;
justify-content: space-around;
padding-left: 1rem;
`
const MovieTitle = styled.div`
font-size: 1.5rem;
`
const MovieRating = styled.div`

`
const MovieDescription = styled.div`
font-size: 0.8rem;
font-weight: lighter;
`
const MovieReleaseDate = styled.div`
font-size: 0.8rem;
font-size: bold;
`
const MovieGenres = styled.div`

`
const MovieCompanies = styled.div`
`
const MovieTrailer = styled.div`
width: 70%;
margin: 0 auto;
height: 300px;
div{
    display: flex;
    align-items: center;
}

h3{
    width: 20rem;
    color: #47CCA0;
    font-size: 2rem;
    text-align: left;
    display: inline-block;
}
iframe{
    margin-top: 1rem;
    width: 100%;
    height: 100%;
    border: 3px solid #47CCA0;
}

`
const Line = styled.div`
width: calc(50% - 10rem);
height: 1px;
background: #47cca0;
`
const MovieActors = styled.div`
color: white;
`


export default SingleMovie