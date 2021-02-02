const initialState = {
    actors: [],
}


const actorsReducer = (state=initialState, action) =>{
    switch(action.type){
        case "FETCH_ACTORS":
            return{
                ...state,
                actors: action.payload.actors,
                isLoading: false,
            }

        case "LOAD_ACTORS":
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

export default actorsReducer