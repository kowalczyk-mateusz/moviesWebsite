import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {loadMovies} from '../actions/movieAction'
import Movies from '../components/Movie/Movie'
import styled from 'styled-components'
import {motion} from 'framer-motion'


const PopularMovies = ({pageNumber, setPageNumber}) =>{

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
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(loadMovies(pageNumber));
    }, [pageNumber])
    
    const {popularMovies} = useSelector((state) => state.movies)
    return(
        <HomePage>

            <h2>Popular Movies</h2>
            <h3>Page: {pageNumber}</h3>
            {popularMovies &&(
   
            <MoviesList>
                {
                popularMovies.map((movie) =><Movies key={movie.id}
                    title={movie.original_title}
                    release={movie.release_date}
                    image={movie.poster_path}
                    overview={movie.overview}
                    id={movie.id}
                    rating={movie.vote_average}/>

                )}
                </MoviesList>
                                )}

            <Pages>
                <PreviousPage onClick={previousPageHandler}>Previus page</PreviousPage>
                <NextPage onClick={nextPageHandler}>Next page</NextPage>
            </Pages>
        </HomePage>
    )
}

const HomePage = styled(motion.div)`
width: 100%;
min-height: 100vh;
h2{
    text-align: center;
    color: #47CCA0;
    padding-top: 1rem;
    font-size: 2rem;

}
h3{
    text-align: center;
    color: #47CCA0;
    padding-top: 1rem;
    font-size: 1.5rem;
}
`
const MoviesList = styled(motion.div)`
display: grid;
width: 80%;
margin: 0 auto;
margin-top: 5rem;
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
grid-column-gap: 1rem;
grid-row-gap: 3rem;
justify-content: end;
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
export default PopularMovies