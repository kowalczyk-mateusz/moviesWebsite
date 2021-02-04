import React, { useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {loadSeries} from '../actions/seriesAction'
import styled from 'styled-components'
import Series from '../components/series/Series'
const PopularTvSeries = ({pageNumber, setPageNumber}) =>{

    const nextPageHandler = () =>{
        window.scrollTo(0, 0);
        if(pageNumber === 10){
            setPageNumber(1)
        }
        else{
            setPageNumber(pageNumber + 1);
        }
    }
    const previousPageHandler = ( )=>{
        window.scrollTo(0, 0);
        if(pageNumber === 1){
            setPageNumber(10)
        }
        else{
            setPageNumber(pageNumber - 1);
        }

    }

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(loadSeries(pageNumber))
    }, [pageNumber])

    const {popularSeries} = useSelector((state)=>state.series)
    return(
        <HomePage>
            <h2>Popular TV SERIES</h2>
            <h3>Page: {pageNumber}</h3>
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
                        <Pages>
                <PreviousPage onClick={previousPageHandler}>Previus page</PreviousPage>
                <NextPage onClick={nextPageHandler}>Next page</NextPage>
            </Pages>
        </HomePage>
    )
}

const HomePage = styled.div`
width: 100%;
height: auto;
h3{
    text-align: center;
    color: #47CCA0;
    padding-top: 1rem;
    font-size: 1.5rem;
}
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
const Pages = styled.div`
text-align: center;
margin-top: 1rem;
display: flex;
justify-content: center;
`
const PreviousPage = styled.div`
color: #47CCA0;
padding: 0rem 1rem;
font-size: 2rem;
cursor: pointer;
`
const NextPage = styled.div`
color: #47CCA0;
padding: 0rem 1rem;
font-size: 2rem;
cursor: pointer;
`
export default PopularTvSeries