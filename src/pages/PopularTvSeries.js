import React, { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {loadSeries} from '../actions/seriesAction'
import styled from 'styled-components'
import Series from '../components/series/Series'
const PopularTvSeries = () =>{
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(loadSeries())
    }, [dispatch])

    const {popularSeries} = useSelector((state)=>state.series)
        console.log(popularSeries)
    return(
        <HomePage>
            <h2>Top 20 seriali dzisiaj</h2>
            {popularSeries && (

                <SeriesList>
                    {
                        popularSeries.map((series)=><Series 
                            title={series.original_name}
                            image={series.poster_path}
                            key={series.id}
                            id={series.id}
                        />)
                    }
                </SeriesList>
            )}
        </HomePage>
    )
}

const HomePage = styled.div`
width: 100%;
height: auto;
h2{
    text-align: center;
    color: #47CCA0;
    padding-top: 1rem;
    font-size: 2rem;

}`

const SeriesList = styled.div`
display: grid;
width: 80%;
margin: 0 auto;
margin-top: 5rem;
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
grid-column-gap: 1rem;
grid-row-gap: 3rem;
`
export default PopularTvSeries