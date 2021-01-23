import axios from 'axios'
import {movieDetailApi} from '../Api/api'

export const loadDetail = (id) => async (dispatch) =>{
    dispatch({
        type: "LOAD_DETAIL",
    })

    const detailData = await axios.get(movieDetailApi(id))

    dispatch({
        type: "GET_DETAIL",
        payload: {
            movie: detailData.data,
        }
    })
}