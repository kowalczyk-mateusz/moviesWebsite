import axios from 'axios'
<<<<<<< HEAD
import {movieDetailApi, movieVideoAPi, movieCreditsApi} from '../Api/api'
=======
import {movieDetailApi, movieVideoAPi, movieProviderApi, movieCreditsApi} from '../Api/api'
>>>>>>> 454438a4f9aebfa35152d3afeb09d223511d3a79

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