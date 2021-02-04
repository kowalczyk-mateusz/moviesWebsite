import axios from 'axios'
import {popularMovieApi, upcomingMoviesApi, MovieGenreApi, topMovieGenres} from '../Api/api'

//ACTIONS

export const loadMovies = (id) => async (dispatch) =>{

    const popularData = await axios.get(popularMovieApi(id));
    const upcomingData = await axios.get(upcomingMoviesApi);
    const genresData = await axios.get(MovieGenreApi)
    const genresListData = await axios.get(topMovieGenres(id))

    dispatch({
        type: "FETCH_MOVIES",
        payload: {
            popularMovies: popularData.data.results,
            upcomingMovies: upcomingData.data,
            movieGenres: genresData.data.genres,
            movieGenresList: genresListData.data.results,
        },
    });

};