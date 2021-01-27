import React from 'react'
import {useSelector} from 'react-redux'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'
import { movieCreditsApi } from '../../Api/api'

const SingleSeries = ()=>{

    const history = useHistory()

    const {series, isLoading} = useSelector((state)=> state.seriesDetail)


    return(
        <>
        {!isLoading &&(

            <SeriesCard classname="shadow">
                <SeriesDetail>
                    <SeriesInfo>
                        <SeriesPoster>
                        <img src={`https://image.tmdb.org/t/p/w500${series.poster_path}`}/>
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
                    <SeriesCompanies></SeriesCompanies>
                </SeriesDetail>

            </SeriesCard>

        )}
        </>

    )
}
export default SingleSeries