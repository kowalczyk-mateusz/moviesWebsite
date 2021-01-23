import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {loadMovies} from '../actions/movieAction'
import Movies from '../components/Movie'
import styled from 'styled-components'
import {motion} from 'framer-motion'

const Home = () =>{


    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(loadMovies());
    }, [dispatch])
    
    const {popularMovies} = useSelector((state) => state.movies)
    return(
        <HomePage>

            <h2>Top 20 filmów dzisiaj</h2>
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
        </HomePage>
    )
}

const HomePage = styled(motion.div)`
width: 100%;
height: auto;
h2{
    text-align: center;
    color: #47CCA0;
    padding-top: 1rem;
    font-size: 2rem;

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
`
export default Home