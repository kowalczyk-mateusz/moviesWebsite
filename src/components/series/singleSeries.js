import React from 'react'
import {useSelector} from 'react-redux'
import styled from 'styled-components'
import anonymo from '../../assets/images/anonymous.png'

const SingleSeries = ()=>{


    const {series, isLoading, video, credits} = useSelector((state)=> state.seriesDetail)

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
    
    `

    return(
        <>
        {!isLoading &&(
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
        {series.seasons.map((season)=><div><p>{season.name}: </p> <p>{season.episode_count} Episodes</p></div>)}
                    </Seasons>
                    <Networks>
                        <p>series available on </p>
                        {series.networks.map((network)=><div><p key={network.id}>{network.name}</p> <img src={`https://image.tmdb.org/t/p/w300${network.logo_path}`} alt={network.logo_path} /></div>)}
                    </Networks>
                    </SeasonsAndNetworks>
                    <SeriesTrailer>
                <div>
                <Line/>
                <h3>ZOBACZ ZWIASTUN</h3>
                <Line/>
                </div>
            <iframe src={`https://www.youtube.com/embed/${video}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title={video}></iframe>

                </SeriesTrailer>
                <ActorsList>
                    <h3>OBSADA</h3>
                        {
                        credits.map((actor)=>(
                            <Actor>
                                <img src={actor.profile_path === null ?   `${anonymo}` : `https://image.tmdb.org/t/p/w300/${actor.profile_path}`} alt={actor.profile_path} />
                                <ActorName>
                        <p>{actor.name}</p>
                        <p>{actor.character}</p>
                                </ActorName>
                            </Actor>
                        ))
                    }
                    </ActorsList>
                </SeriesDetail>

        )}
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
`
const SeriesOverview = styled.div`
display: flex;
flex: 1;
height: 300px;
flex-direction: column;
justify-content: space-around;
padding-left: 1rem;
`
const SeriesTitle = styled.div`
font-size: 1.5rem;
`
const SeriesRating = styled.div`

`
const SeriesDescription = styled.div`
font-size: 0.8rem;
font-weight: lighter;
`
const SeriesReleaseDate = styled.div`
font-size: 0.8rem;
font-size: bold;
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
`
const SeasonsAndNetworks = styled.div`
width: 70%;
margin: 0 auto;
display: flex;
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
`
const SeriesTrailer = styled.div`
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
    font-size: 1.5rem;
    text-align: center;
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
const ActorsList = styled.div`
color: white;
width: 80%;
min-height: 100vh;
display: flex;
flex-wrap: wrap;
display: flex;
margin: 0 auto;
margin-top: 10rem;
justify-content: space-around;
h3{
    width: 100%;
    display: block;
    text-align: center;
    font-size: 1.5rem;
    color: #47cca0;
}

`
const Actor = styled.div`
width: 250px;
height: 70px;
display: flex;
margin-top: 1rem;
margin-bottom: 1rem;
justify-content: space-around;
transition: background-color 0.3s ease-in-out;
&:hover{
    background-color: rgba(71, 204, 160, 0.1)
}
img{
    margin-left: 0.5rem;
    display: block;
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 50%;
    align-self: center;
}
svg{
    fill: #fff;
}
`
const ActorName = styled.div`
width: 100%;
padding-left: 1rem;
color: white;
display: flex;
flex-direction: column;
justify-content: center;
    p:first-child{
        font-size: 1.2rem;
    }
    p:last-child{
        font-size: 0.8rem;
    }
`

export default SingleSeries