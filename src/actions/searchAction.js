import axios from 'axios'
import {searchActorApi, searchMovieApi, searchSeriesApi} from '../Api/api'

//ACTIONS

export const loadSearch= (searchId) => async (dispatch) =>{
   
    dispatch({
        type: "LOAD_DETAIL"
    })

    const searchMovie = await axios.get(searchMovieApi(searchId))
    const searchActor = await axios.get(searchActorApi(searchId))
    const searchSeries = await axios.get(searchSeriesApi(searchId))


    dispatch({
        type: "FETCH_SEARCH",
        payload: {
            searchMovie: searchMovie.data.results,
            searchActor: searchActor.data.results,
            searchSeries: searchSeries.data.results,

        }
    })
}