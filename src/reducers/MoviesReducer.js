const initialState = {
    popularMovies: [],
    newMovies: [],
    upcomingMovies: [],
    movieGenres: [],
    movieGenresList: [],

}


const movieReducer = (state=initialState, action) =>{
    switch(action.type){
        case "FETCH_MOVIES" :
            return {
                ...state,
                popularMovies: action.payload.popularMovies,
                upcomingMovies: action.payload.upcomingMovies,
                movieGenres: action.payload.movieGenres,
                movieGenresList: action.payload.movieGenres,

            }
            default: 
            return{...state}
    }
}

export default movieReducer