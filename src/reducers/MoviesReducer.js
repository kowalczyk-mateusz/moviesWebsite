const initialState = {
    popularMovies: [],
    newMovies: [],
    upcomingMovies: [],
}


const movieReducer = (state=initialState, action) =>{
    switch(action.type){
        case "FETCH_MOVIES" :
            return {
                ...state,
                popularMovies: action.payload.popularMovies,
                upcomingMovies: action.payload.upcomingMovies
            }
            default: 
            return{...state}
    }
}

export default movieReducer