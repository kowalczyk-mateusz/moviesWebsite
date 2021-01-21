const initialState = {
    popularMovies: [],
    newMovies: [],
    upcomingMovies: [],
}


const movieReducer = (state=initialState, action) =>{
    switch(action.type){
        case "FETCH_MOVIES" :
            return {...state}
            default: 
            return{...state}
    }
}

export default movieReducer