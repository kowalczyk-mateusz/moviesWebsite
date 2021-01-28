import axios from 'axios'
import {searchMovieApi} from '../Api/api'

//ACTIONS

export const loadSearch= (searchId) => async (dispatch) =>{
   
    dispatch({
        type: "LOAD_DETAIL"
    })

    const searchData = await axios.get(searchMovieApi(searchId))

    dispatch({
        type: "FETCH_SEARCH",
        payload: {
            search: searchData,
        }
    })
}