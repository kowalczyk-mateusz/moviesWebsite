import axios from 'axios'
import {popularMovieApi, upcomingMoviesApi} from '../Api/api'

//ACTIONS

export const loadMovies = () => async (dispatch) =>{

    const popularData = await axios.get(popularMovieApi);
    const upcomingData = await axios.get(upcomingMoviesApi);
    dispatch({
        type: "FETCH_MOVIES",
        payload: {
            popularMovies: popularData.data.results,
            upcomingMovies: upcomingData.data,
        },
    });

};