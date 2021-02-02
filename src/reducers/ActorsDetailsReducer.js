const initialState = {
    actor: [],
}

const actorsDetailsAction = (state=initialState, action) => {
    switch(action.type){
        case "FETCH_ACTOR": 
        return{
            ...state,
            actor: action.payload.actor,
        }
        default: 
        return{
            ...state,
        }
    }
}

export default actorsDetailsAction