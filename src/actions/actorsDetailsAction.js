import axios from 'axios'
import {actorDetailApi, actorMoviesApi} from '../Api/api'


export const loadActorDetail = (id) => async (dispatch) =>{
    const actorData = await axios.get(actorDetailApi(id))
    const videoData = await axios.get(actorMoviesApi(id))
    dispatch({
        type: "FETCH_ACTOR",
        payload: {
            actor: actorData.data,
            video: videoData.data.cast
        }
    })

}
