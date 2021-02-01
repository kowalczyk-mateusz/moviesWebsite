const initialState = {
    movie: {
        movie: [],
    },
    latest: {

    },
}

const randomReducer = (state=initialState, action)=>{
    switch(action.type){
        case "FETCH_RANDOM":
            return{
                ...state,
                movie: action.payload.movie,
                latest: action.payload.latest,
                isLoading: false,
            }
        case "LOAD_DETAIL":
            return{
                ...state,
                isLoading: true,
            }
        default: 
        return{...state}
    }

}

export default randomReducer