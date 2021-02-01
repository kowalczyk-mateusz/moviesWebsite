import {movieDetailApi, latestMovieApi} from '../Api/api'
import axios from 'axios'

export const loadMovie = (id) => async (dispatch) => {
    dispatch({
        type: "LOAD_DETAIL",
    })

    const movieData = await axios.get(movieDetailApi(id))
    const latestMovie = await axios.get(latestMovieApi)

    dispatch({
        type: "GET_DETAIL",
        payload: {
            movie: movieData.data,
            latest: latestMovie.data
        }
    })
}