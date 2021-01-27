
const initialState = {
    popularSeries: [],
}

const seriesReducer = (state=initialState, action)=>{
    switch(action.type){
        case "FETCH_SERIES":
            return{
                ...state,
                popularSeries: action.payload.popularSeries
            }
        default:
            return{...state}
    }
}

export default seriesReducer