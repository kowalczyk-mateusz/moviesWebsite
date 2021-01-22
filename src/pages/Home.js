import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {loadMovies} from '../actions/movieAction'
import Movies from '../components/Movie'
const Home = () =>{
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(loadMovies());
    }, [dispatch])

    const {popularMovies} = useSelector((state) => state.movies)
    
    return(
        <div>
            <h1>HoMe</h1>
            {popularMovies &&(
                popularMovies.map((movie)=>(
                    <Movies key={movie.id} title={movie.original_title} release={movie.release_date} image={movie.poster_path} overview={movie.overview} id={movie.id} rating={movie.vote_average}/>
                ))
                )}
        </div>
    )
}

export default Home