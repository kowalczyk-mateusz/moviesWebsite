const initialState = {
    popularMovies: [],
    newMovies: [],
    upcomingMovies: [],
<<<<<<< HEAD
    movieGenres: [],
    movieGenresList: [],
=======
>>>>>>> 454438a4f9aebfa35152d3afeb09d223511d3a79
}


const movieReducer = (state=initialState, action) =>{
    switch(action.type){
        case "FETCH_MOVIES" :
            return {
                ...state,
                popularMovies: action.payload.popularMovies,
<<<<<<< HEAD
                upcomingMovies: action.payload.upcomingMovies,
                movieGenres: action.payload.movieGenres,
                movieGenresList: action.payload.movieGenres,
=======
                upcomingMovies: action.payload.upcomingMovies
>>>>>>> 454438a4f9aebfa35152d3afeb09d223511d3a79
            }
            default: 
            return{...state}
    }
}

export default movieReducer