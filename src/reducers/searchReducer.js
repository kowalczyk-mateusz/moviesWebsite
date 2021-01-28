const initialState = {
    search: {
        search: [],
    },

}

const searchReducer = (state=initialState, action) =>{
    switch(action.type){
        case "FETCH_SEARCH":
            return{
                ...state,
                search: action.payload.search,
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