import axios from 'axios'
import {actorDetailApi} from '../Api/api'


export const loadActorDetail = (id) => async (dispatch) =>{
    const actorData = await axios.get(actorDetailApi(id))

    dispatch({
        type: "FETCH_ACTOR",
        payload: {
            actor: actorData.data,
        }
    })

}
