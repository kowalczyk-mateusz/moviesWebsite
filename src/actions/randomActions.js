import axios from 'axios'
import {latestMovieApi, movieDetailApi} from '../Api/api'

export const loadRandom = (movieId) => async (dispatch) =>{
    dispatch({
        type: "LOAD_DETAIL",
    })

    const latestMovie = await axios.get(latestMovieApi)
    const movieDetail = await axios.get(movieDetailApi(movieId))

    dispatch({
        type: "FETCH_RANDOM",
        payload: {
            latest: latestMovie.data.id,
            movie: movieDetail.data.results,
        }
    })
}