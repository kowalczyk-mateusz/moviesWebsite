import {seriesDetailApi,seriesVideoApi, seriesCreditsApi, similarTvSeriesApi} from '../Api/api'
import axios from 'axios'

export const loadDetail = (id) => async (dispatch) =>{
    dispatch({
        type: "LOAD_TVDETAIL"
    })
    const detailData = await axios.get(seriesDetailApi(id))
    const videoData = await axios.get(seriesVideoApi(id));
    const creditsData = await axios.get(seriesCreditsApi(id))
    const similarData = await axios.get(similarTvSeriesApi(id))

    dispatch({
        type: "GET_TVDETAIL",
        payload:{
            series: detailData.data,
            video: videoData.data.results,
            credits: creditsData.data.cast,
            similar: similarData.data.results,
        }
    })
}