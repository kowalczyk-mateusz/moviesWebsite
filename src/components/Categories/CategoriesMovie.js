import React,{useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {loadMovies} from '../../actions/movieAction'
import {useParams} from 'react-router-dom'
import Movies from '../../components/Movie/Movie'
import styled from 'styled-components'
import {motion} from 'framer-motion'
const CategoriesMovie = ()=>{
  const {id, genreName} = useParams()





  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(loadMovies(id));
  },[dispatch, id])
  const {movieGenresList} = useSelector((state) => state.movies)
    return(
      <HomePage>

    <h2>Top 20 {genreName} Movies</h2>
      {movieGenresList&&(

      <MoviesList>
          {movieGenresList.map((movie) =><Movies title={movie.original_title} image={movie.poster_path} key={movie.id} id={movie.id}/>)}
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

export default CategoriesMovie