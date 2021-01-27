import {seriesDetailApi} from '../Api/api'
import axios from 'axios'

export const loadDetail = (id) => async (dispatch) =>{
    dispatch({
        type: "LOAD_TVDETAIL"
    })
    const detailData = await axios.get(seriesDetailApi(id))

    dispatch({
        type: "GET_TVDETAIL",
        payload:{
            series: detailData.data
        }
    })
}