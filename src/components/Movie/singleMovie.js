import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Actor from '../Actors/Actor'
import Movie from './Movie'

const SingleMovie = ()=>{


const {movie, video, isLoading, actors, similar} = useSelector((state)=> state.detail)
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
@media (max-width: 900px){
    padding: 0 0.5rem;
    justify-content: center;
    background-size: contain;
    align-items: center;
    -webkit-box-shadow: inset 0px -450px 100px -19px rgba(0,0,0,1);
-moz-box-shadow: inset 0px -450px 100px -19px rgba(0,0,0,1);
box-shadow: inset 0px -450px 100px -19px rgba(0,0,0,1);
height: auto;
padding-top: 15rem;
margin-bottom: 5rem;
}
`

//
return(
    <>
{!isLoading &&(
    <MovieDetail>
    <MovieInfo>
        <MoviePoster>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.poster_path}/>
        </MoviePoster>
        <MovieOverview>
            <MovieTitle>
                <h2>{movie.original_title}</h2>
            </MovieTitle>
            <MovieRating>
                <p> Movie Rating: {movie.vote_average} </p>
            </MovieRating>
            <MovieDescription>
                <p> {movie.overview} </p>
            </MovieDescription>
            <MovieReleaseDate>
                <p> Relase date: {movie.release_date} </p>
            </MovieReleaseDate>

            <MovieGenres>
                {movie.genres && (
                <>
                {movie.genres.map((genres) => <p key={genres.id}>{genres.name}</p>)}
                </>
                )}
            </MovieGenres>
            </MovieOverview>
            </MovieInfo>
            <MovieCompanies>
                <p>Companies: </p>
                {movie.production_companies.map((companies)=>
                    <p key={companies.id}>{companies.name}</p>
                )}
            </MovieCompanies>
            <MovieTrailer>
                <div>
                <h3>ZOBACZ ZWIASTUN</h3>
                </div>
                {video[0] &&(
                    <iframe src={`https://www.youtube.com/embed/${video[0].key}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title={video[0].key}></iframe>
                )}
                </MovieTrailer>

                    <ActorsList>
                    <h3>OBSADA</h3>
                    <ActorsBox>
                        {
                        actors.map((actor)=>(<Actor
                                    id={actor.id}
                                    key={actor.id}
                                    name={actor.name}
                                    image={actor.profile_path}
                                    character={actor.character}
                                />
                    


                        ))
                    }
                    </ActorsBox>
                    </ActorsList>

        <SimilarMovies>
            <h2>Similar Movies:</h2>
            <MoviesList>
                        {
                                similar.map((movie)=> <Movie key={movie.id}
                                title={movie.original_title}
                                release={movie.release_date}
                                image={movie.poster_path}
                                overview={movie.overview}
                                id={movie.id}
                                rating={movie.vote_average}/>)
                        }
            </MoviesList>
        </SimilarMovies>
          
    </MovieDetail>
)}

</>
)}


const MovieDetail = styled.div`
width: 100%;
min-height: 100vh;
background: black;

`

const MoviePoster = styled.div`
height: 400px;
flex: 1;
img{
    width: 100%;
    height: 100%;
    object-fit: contain;
}
@media (max-width: 900px){
    height: 300px;
    img{
        padding: 0rem 1rem;
        width: 200px;
        height: 250px;
        object-fit: cover;
    }
}
`
const MovieOverview = styled.div`
display: flex;
flex: 1;
height: 400px;
flex-direction: column;
justify-content: space-around;
padding-left: 1rem;
@media (max-width: 900px){
 padding-left: 0rem;  
 justify-content: flex-start;
 height: 300px;
}
`
const MovieTitle = styled.div`
font-size: 1.5rem;
@media (max-width: 900px){
   font-size: 1rem;
   text-align: center;
}
`
const MovieRating = styled.div`

`
const MovieDescription = styled.div`
font-size: 0.8rem;
font-weight: lighter;
@media (max-width: 900px){
 padding: 0.5rem 0rem;  
}
`
const MovieReleaseDate = styled.div`
font-size: 0.8rem;
font-size: bold;
@media (max-width: 900px){
 padding-bottom: 0.5rem;  
}
`
const MovieGenres = styled.div`

display: flex;
flex-wrap: wrap;
justify-content: flex-start;
p{
    background-color: #47CCA0;
    padding:0rem 0.5rem;
    font-size: 0.7rem;
    border-radius: 1rem;
    margin-right: 0.5rem;
    

}
@media (max-width: 900px){
 justify-content: center;  
}
`
const MovieCompanies = styled.div`
width: 70%;
margin: 0 auto;
padding: 0;
color: white;
display: flex;
flex-wrap: wrap;
padding: 2rem 0rem;
p{
    margin: 0.25rem 0.25rem;
}
@media (max-width: 900px){
 padding: 0rem 1rem;
 width: 100%;
 p:first-child{
     width: 100%;
 }
}

`

const MovieTrailer = styled.div`
width: 70%;
margin: 0 auto;
height: 350px;
div{
    display: flex;
    align-items: center;
}

h3{
    width: 20rem;
    color: #47CCA0;
    font-size: 1.5rem;
    text-align: center;
    display: inline-block;
}
iframe{
    margin: 0 auto;
    margin-top: 2rem;
    width: 50%;
    display: block;
    height: 100%;
    border: 3px solid #47CCA0;
}
@media (max-width: 900px){
    width: 100%;
    div{
        justify-content: center;
    }
    iframe{
        width: 100%;
        height: 80%;
    }
}
`
const ActorsList = styled.div`
padding-top: 10rem;
width: 70%;
margin: 0 auto;
h3{
    min-width: 100%;
    display: block;
    text-align: center;
    font-size: 2rem;
    color: #47cca0;
}
@media (max-width: 900px){
    padding-top: 2rem;
}
`

const ActorsBox = styled.div`
display: grid;
width: 100%;
margin-top: 2rem;
height: 80vh;
overflow-y: scroll;
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
grid-column-gap: 1rem;
grid-row-gap: 3rem;

::-webkit-scrollbar {
  width: 0.5rem;
}

::-webkit-scrollbar-track {
  background: #fff;
}

::-webkit-scrollbar-thumb {
  background: #47cca0;
}

`
const SimilarMovies = styled.div`
width: 80%;
margin: 0 auto;
padding-bottom: 2rem;
h2{
    color:  #47cca0;
    padding-top: 4rem;
    text-align: center;
    font-size: 2rem;
}
`
const MoviesList = styled.div`
display: grid;
width: 80%;
margin: 0 auto;
margin-top: 2rem;
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
grid-column-gap: 1rem;
grid-row-gap: 3rem;
justify-content: end;
`
export default SingleMovie