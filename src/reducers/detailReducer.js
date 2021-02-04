const initialState ={
    movie: [],
    video: [],
    actors: [],
    similar: [],
    isLoading: true,
}

const detailReducer = (state=initialState, action) =>{
    switch(action.type){
        case "GET_DETAIL":
            return{
                ...state,
                movie: action.payload.movie,
                video: action.payload.video,
                actors: action.payload.actors,
                similar: action.payload.similar,
                isLoading: false,
            }
            case 'LOAD_DETAIL':
                return{
                    ...state,
                    isLoading: true,
                }
            default:
                return {...state}
    }

}

export default detailReducer