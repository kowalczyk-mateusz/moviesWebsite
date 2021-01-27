import axios from 'axios'
import {popularTvApi} from '../Api/api'

//ACTIONS

export const loadSeries = (id) => async (dispatch) =>{
    const popularData = await axios.get(popularTvApi)

    dispatch({
        type: "FETCH_SERIES",
        payload:{
            popularSeries: popularData.data.results,
        }
    })
}