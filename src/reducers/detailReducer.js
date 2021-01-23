const initialState ={
    movie: {
        
    },
    video: {
        video: [],
    },
    isLoading: true,
}

const detailReducer = (state=initialState, action) =>{
    switch(action.type){
        case "GET_DETAIL":
            return{
                ...state,
                movie: action.payload.movie,
                video: action.payload.video,
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