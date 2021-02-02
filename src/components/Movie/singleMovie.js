import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import anonymo from '../../assets/images/anonymous.png'
import {loadActorDetail} from '../../actions/actorsDetailsAction'
import  {Link} from 'react-router-dom'
import Actor from '../Actors/Actor'

const SingleMovie = ()=>{


const {movie, video, isLoading, actors} = useSelector((state)=> state.detail)
const finalImage = `https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`;

const dispatch = useDispatch()


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
                {movie.genres.map((genres) => <p key={genres.id}>{genres.name}</p>)}
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
                <Line/>
                <h3>ZOBACZ ZWIASTUN</h3>
                <Line/>
                </div>
                {video &&(
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
                                />
                    


                        ))
                    }
                    </ActorsBox>
                    </ActorsList>
          
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
`
const MovieOverview = styled.div`
display: flex;
flex: 1;
height: 400px;
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

`
const Line = styled.div`
width: calc(50% - 10rem);
height: 1px;
background: #47cca0;
`
const ActorsList = styled.div`
padding-top: 10rem;
width: 80%;
margin: 0 auto;
h3{
    min-width: 100%;
    display: block;
    text-align: center;
    font-size: 2rem;
    color: #47cca0;
}
`

const ActorsBox = styled.div`
display: grid;
width: 100%;
margin-top: 2rem;
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
grid-column-gap: 1rem;
grid-row-gap: 3rem;
`

export default SingleMovie