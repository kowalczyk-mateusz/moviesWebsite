import axios from 'axios'
<<<<<<< HEAD
import {popularMovieApi, upcomingMoviesApi, MovieGenreApi, topMovieGenres} from '../Api/api'

//ACTIONS

export const loadMovies = (id) => async (dispatch) =>{

    const popularData = await axios.get(popularMovieApi);
    const upcomingData = await axios.get(upcomingMoviesApi);
    const genresData = await axios.get(MovieGenreApi)
    const genresListData = await axios.get(topMovieGenres(id))
=======
import {popularMovieApi, upcomingMoviesApi} from '../Api/api'

//ACTIONS

export const loadMovies = () => async (dispatch) =>{

    const popularData = await axios.get(popularMovieApi);
    const upcomingData = await axios.get(upcomingMoviesApi);
>>>>>>> 454438a4f9aebfa35152d3afeb09d223511d3a79
    dispatch({
        type: "FETCH_MOVIES",
        payload: {
            popularMovies: popularData.data.results,
            upcomingMovies: upcomingData.data,
<<<<<<< HEAD
            movieGenres: genresData.data.genres,
            movieGenresList: genresListData.data,
=======
>>>>>>> 454438a4f9aebfa35152d3afeb09d223511d3a79
        },
    });

};