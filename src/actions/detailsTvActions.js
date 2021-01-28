import {seriesDetailApi,seriesVideoApi, seriesCreditsApi} from '../Api/api'
import axios from 'axios'

export const loadDetail = (id) => async (dispatch) =>{
    dispatch({
        type: "LOAD_TVDETAIL"
    })
    const detailData = await axios.get(seriesDetailApi(id))
    const videoData = await axios.get(seriesVideoApi(id));
    const creditsData = await axios.get(seriesCreditsApi(id))

    dispatch({
        type: "GET_TVDETAIL",
        payload:{
            series: detailData.data,
            video: videoData.data.results[0].key,
            credits: creditsData.data.cast,
        }
    })
}