import axios from 'axios'
import {popularActorsApi} from '../Api/api'

export const loadActors = () => async (dispatch) =>{
    dispatch({
        type: "LOAD_ACTORS"
    })
    const actorsData = await axios.get(popularActorsApi)

    dispatch({
        type: "FETCH_ACTORS",
        payload: {
            actors: actorsData.data.results,
        }
    })
}