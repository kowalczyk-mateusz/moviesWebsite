import React from 'react'
import {useSelector} from 'react-redux'
import styled from 'styled-components'
import Series from './Series'
import Actor from '../Actors/Actor'
import Loader from '../Loader'
const SingleSeries = ()=>{


    const {series, isLoading, video, credits, similar} = useSelector((state)=> state.seriesDetail)

    const finalImage = `https://image.tmdb.org/t/p/w1280/${series.backdrop_path}`;
    const SeriesInfo = styled.div`
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

    return(
        <>
        {isLoading === true ? <Loader /> :
                <SeriesDetail>
                    <SeriesInfo>
                        <SeriesPoster>
                        <img src={`https://image.tmdb.org/t/p/w500${series.poster_path}`} alt={series.poster_path}/>
                        </SeriesPoster>
                        <SeriesOverview>
                            <SeriesTitle>
                                <h2>{series.original_name}</h2>
                            </SeriesTitle>
                            <SeriesRating>
                                <p>Series Rating: {series.vote_average}</p>
                            </SeriesRating>
                            <SeriesDescription>
                                <p>{series.overview}</p>
                            </SeriesDescription>
                            <SeriesReleaseDate>
                                <p>Release date: {series.first_air_date}</p>
                            </SeriesReleaseDate>
                            <SeriesGenres>
                                {series.genres.map((genres)=><p key={genres.id}>{genres.name}</p>)}
                            </SeriesGenres>
                        </SeriesOverview>
                    </SeriesInfo>
                    <SeasonsAndNetworks>
                    <Seasons>
                        <h3>Seasons:</h3>
        {series.seasons.map((season)=><div key={season.id}><p>{season.name}: </p> <p>{season.episode_count} Episodes</p></div>)}
                    </Seasons>
                    <Networks>
                        <h3>Available on:</h3>
                        {series.networks.map((network)=><div key={network.id}><p key={network.id}>{network.name}</p></div>)}
                    </Networks>
                    </SeasonsAndNetworks>
                    <SeriesTrailer>
                <div>
                <h3>WATCH TRAILER</h3>

                </div>
                {video &&(
                    <iframe src={`https://www.youtube.com/embed/${video[0].key}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title={video[0].key}></iframe>
                )}
                </SeriesTrailer>
                <ActorsList>
                    <h3>CAST</h3>
                    <ActorsBox>
                        {
                        credits.map((actor)=>(<Actor
                                    id={actor.id}
                                    key={actor.id}
                                    name={actor.name}
                                    image={actor.profile_path}
                                />
                    


                        ))
                    }
                
                    </ActorsBox>
                    </ActorsList>
                    <SimilarSeries>
                        <h2>Similar Series:</h2>
                        <SeriesList>
                            {
                                similar.map((series)=><Series
                                title={series.original_name}
                                image={series.poster_path}
                                key={series.id}
                                id={series.id}
                                />)
                            }
                        </SeriesList>
                    </SimilarSeries>
                </SeriesDetail>

}
        </>

    )
}

const SeriesDetail = styled.div`
width: 100%;
min-height: 300vh;
background: black;

`

const SeriesPoster = styled.div`
height: 300px;
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
const SeriesOverview = styled.div`
display: flex;
flex: 1;
height: 300px;
flex-direction: column;
justify-content: space-around;
padding-left: 1rem;
@media (max-width: 900px){
 padding-left: 0rem;  
 justify-content: flex-start;
 height: auto;
}
`
const SeriesTitle = styled.div`
font-size: 1.5rem;
@media (max-width: 900px){
   font-size: 1rem;
   text-align: center;
}
`
const SeriesRating = styled.div`

`
const SeriesDescription = styled.div`
font-size: 0.8rem;
font-weight: lighter;
@media (max-width: 900px){
 padding: 0.5rem 0rem;  
}
`
const SeriesReleaseDate = styled.div`
font-size: 0.8rem;
font-size: bold;
@media (max-width: 900px){
 padding-bottom: 0.5rem;  
}
`
const SeriesGenres = styled.div`

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
const SeasonsAndNetworks = styled.div`
width: 70%;
margin: 0 auto;
display: flex;
@media (max-width: 900px){
    width: 100%;
    padding: 0 1rem;
    justify-content: space-between;
}
`
const Seasons = styled.div`
width: 70%;
margin: 0 auto;
padding: 0;
color: white;
display: flex;
flex-wrap: wrap;
flex-direction: column;
padding: 2rem 0rem;
flex: 1;
h3{
    font-weight: 500;
    letter-spacing: 1px;
}
div{
    
    display: flex;
}
p{
    margin: 0.25rem 0.25rem;
}
p:first-child{
    font-size: 1rem;
    line-height: 1.5rem;
}
p:last-child{
    font-size: 0.8rem;
    line-height: 1.5rem;
}
@media (max-width: 900px){
    width: 100%;
    p:last-child{
        font-size: 1rem;
    }
}
`
const Networks = styled.div`
padding: 2rem 0rem;
flex: 2;
display: flex;
flex-direction: column;
align-items: center;
p{
    color: white;
}
img{
    width: 100px;
    height: 100px;
    object-fit: contain;

}
h3{
    color: white;
    font-weight: 500;
    letter-spacing: 1px;
}
@media (max-width: 900px){
    flex: 1;
}
`
const SeriesTrailer = styled.div`
width: 70%;
margin: 0 auto;
height: 300px;
div{
    display: flex;
    justify-content: center;
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
        width: 90%;
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


const SimilarSeries = styled.div`
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
const SeriesList = styled.div`
display: grid;
width: 80%;
margin: 0 auto;
margin-top: 2rem;
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
grid-column-gap: 1rem;
grid-row-gap: 3rem;
justify-content: end;
`
export default SingleSeries