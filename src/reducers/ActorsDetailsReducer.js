const initialState = {
    actor: [],
    video: [],
}

const actorsDetailsAction = (state=initialState, action) => {
    switch(action.type){
        case "FETCH_ACTOR": 
        return{
            ...state,
            actor: action.payload.actor,
            video: action.payload.video,
        }
        default: 
        return{
            ...state,
        }
    }
}

export default actorsDetailsAction