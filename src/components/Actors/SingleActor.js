import React from 'react'
import styled from 'styled-components'
import {useSelector} from 'react-redux'
import Movie from '../Movie/Movie'
import questionMark from '../../assets/images/questionMark.png'
const SingleActor = ( )=>{

    const {actor, video,isLoading} = useSelector((state)=> state.actorDetails)
    return(
       <>
       {!isLoading &&(
        <StyledActor>
            <ActorBox>
            <ActorImage>
            <img src={actor.profile_path === null ?   `${questionMark}` : `https://image.tmdb.org/t/p/w300/${actor.profile_path}`} alt={actor.name}/>
            </ActorImage>
            <ActorInfo>
            <ActorName>
                {actor.name}
            </ActorName>
            
            <ActorBirthday>
                Birthday: {actor.birthday}
            </ActorBirthday>
            <ActorBiography>
                {actor.biography}
            </ActorBiography>

            {actor.deathday && (
            <ActorDeathday>
                Deathday: {actor.deathday}
            </ActorDeathday>
            )}
            </ActorInfo>
            </ActorBox>
            <ActorMovies>
                <h2>Actor:</h2>
                <MoviesList>
                    {video.cast.map((movie)=><Movie 
                        key={movie.id}
                        title={movie.original_title}
                        release={movie.release_date}
                        image={movie.poster_path}
                        overview={movie.overview}
                        id={movie.id}
                        rating={movie.vote_average}
                    />)}
                </MoviesList>
            </ActorMovies>
            <ActorMovies>
                <h2>Crew:</h2>
                {video.crew &&(
                <MoviesList>
                    {video.crew.map((movie)=><Movie 
                        key={movie.id}
                        title={movie.original_title}
                        release={movie.release_date}
                        image={movie.poster_path}
                        overview={movie.overview}
                        id={movie.id}
                        rating={movie.vote_average}
                    />)}
                </MoviesList>
                )}
            </ActorMovies>
        </StyledActor>
    )}
        </>
    )
}
const StyledActor = styled.div`
color: white;
width: 70%;
min-height: 100vh;
margin: 0 auto;
display: flex;
flex-direction: column;
@media (max-width: 900px){
    width: 100%;
    padding: 0rem 1rem;
}
`
const ActorBox = styled.div`
display: flex;
width: 100%;
height: 50vh;
justify-content: space-between;
padding: 0rem 5rem;
@media (max-width: 900px){
    height: auto;
    flex-direction: column;
    padding: 0rem;
}
`
const ActorInfo = styled.div`
flex: 2;
padding: 0rem 5rem;
display: flex;
flex-direction: column;
justify-content: flex-start;
@media (max-width: 900px){
    padding: 0rem 1rem;
    margin: 0 auto;
}
`
const ActorName = styled.h2`
padding-bottom: 1rem;
font-size: 2rem;
`
const ActorBiography = styled.div`
padding-bottom: 1rem;
font-size: 1rem;
letter-spacing: 1px;
@media (max-width: 900px){
    font-weight: lighter;
}
`

const ActorBirthday = styled.div`
@media (max-width: 900px){
    padding-bottom: 1rem;
    font-size: 1.3rem;
}
`
const ActorDeathday = styled.div`
`
const ActorMovies = styled.div`
h2{
    color:  #47CCA0;
    font-size: 2rem;
    text-align: center;
    padding-top: 2rem;
}
`
const MoviesList = styled.div`
display: grid;
width: 80%;
margin: 0 auto;
margin-top: 5rem;
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
grid-column-gap: 1rem;
grid-row-gap: 3rem;
`
const ActorImage = styled.div`
img{
    width: 100%;
    height: 100%;
    object-fit: fill;
}
@media (max-width: 900px){

    margin: 0 auto;
    margin-top: 1rem;
    img{
        width: 15rem;
        height: 20rem;
        object-fit: cover;

        margin: 0 auto;
    }
}
`

export default SingleActor