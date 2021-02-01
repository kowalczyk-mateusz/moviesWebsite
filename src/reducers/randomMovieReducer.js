const initialState = {
    movie: {
        movie: [],
    },
    latest: {
        latest: [],
    },
    isLoading: true,
}

const randomMovieReducer = (state=initialState, action) =>{
    switch(action.type){
        case "GET_DETAIL":
            return{
                ...state,
                movie: action.payload.movie,
                isLoading: false,
            }
        case "LOAD_DETAIL":
            return{
                ...state,
                isLoading: true,
            }
        default: 
            return{
                ...state
            }
    }
}

export default randomMovieReducer