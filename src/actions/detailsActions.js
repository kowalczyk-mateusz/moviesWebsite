import axios from 'axios'
import {movieDetailApi, movieVideoAPi, movieProviderApi} from '../Api/api'

export const loadDetail = (id) => async (dispatch) =>{
    dispatch({
        type: "LOAD_DETAIL",
    })

    const detailData = await axios.get(movieDetailApi(id))
    const videoData = await axios.get(movieVideoAPi(id));
    const providerData = await axios.get(movieProviderApi(id));

    dispatch({
        type: "GET_DETAIL",
        payload: {
            movie: detailData.data,
            video: videoData.data.results[0].key,
            provider: providerData.data.results.US.rent,
        }
    })
}