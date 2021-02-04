const initialState = {
    actor: [],
    video: [],
    isLoading: true,
}

const actorsDetailsAction = (state=initialState, action) => {
    switch(action.type){
        case "FETCH_ACTOR": 
        return{
            ...state,
            actor: action.payload.actor,
            video: action.payload.video,
            isLoading: false,
        }
        case "LOADING_DATA":
            return{
                ...state,
                isLoading: true,
            }
        default: 
        return{
            ...state,
        }
    }
}

export default actorsDetailsAction