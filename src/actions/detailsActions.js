import axios from 'axios'
import {movieDetailApi, movieVideoAPi, movieProviderApi, movieCreditsApi} from '../Api/api'

export const loadDetail = (id) => async (dispatch) =>{
    dispatch({
        type: "LOAD_DETAIL",
    })

    const detailData = await axios.get(movieDetailApi(id))
    const videoData = await axios.get(movieVideoAPi(id));
    const actorsData = await axios.get(movieCreditsApi(id));

    dispatch({
        type: "GET_DETAIL",
        payload: {
            movie: detailData.data,
            video: videoData.data.results[0].key,
            actors: actorsData.data.cast,
        }
    })
}