const initialState = {
    searchMovie: {
        search: [],
    },
    searchActor: {
        searchActor: [],
    },
    searchSeries: {
        searchSeries: [],
    },

}

const searchReducer = (state=initialState, action) =>{
    switch(action.type){
        case "FETCH_SEARCH":
            return{
                ...state,
                searchMovie: action.payload.searchMovie,
                searchActor: action.payload.searchActor,
                searchSeries: action.payload.searchSeries,
                isLoading: false,
            }

        case 'LOAD_DETAIL':
            return{
                ...state,
                isLoading: true,
            }
        default:
            return{...state}

    }
}

export default searchReducer