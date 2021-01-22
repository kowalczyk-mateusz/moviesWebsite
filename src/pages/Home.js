import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {loadMovies} from '../actions/movieAction'
import Movies from '../components/Movie'
import MainMovie from '../components/Main Movie/mainMovie'
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
            {popularMovies &&(
                            <>
            <MainMovie key={popularMovies[0].id}
            title={popularMovies[0].original_title}
            release={popularMovies[0].release_date}
            image={popularMovies[0].backdrop_path}
            overview={popularMovies[0].overview}
            id={popularMovies[0].id}
            rating={popularMovies[0].vote_average}/>
            <MoviesList>{
                popularMovies.map((movie)=>{
                   if(popularMovies[0].id !== movie.id) return <Movies key={movie.id}
                    title={movie.original_title}
                    release={movie.release_date}
                    image={movie.poster_path}
                    overview={movie.overview}
                    id={movie.id}
                    rating={movie.vote_average}/>
                })}
                </MoviesList>
                </>
                                )}
        </HomePage>
    )
}

const HomePage = styled(motion.div)`
width: 100%;
height: auto;
`
const MoviesList = styled(motion.div)`
display: grid;
width: 80%;
margin: 0 auto;
margin-top: 5rem;
grid-template-columns: repeat(4, 1fr);
grid-gap: 1rem;
`
export default Home