const initialState = {
    series: [],
    video: [],
    credits: [],
    similar: [],
    isLoading: true,
}

const detailTvReducer = (state=initialState, action)=>{
    switch(action.type){
        case "GET_TVDETAIL":
            return{
                ...state,
                series: action.payload.series,
                video: action.payload.video,
                credits: action.payload.credits,
                similar: action.payload.similar,
                isLoading: false,
            }
            case "LOAD_TVDETAIL":
                return{
                    ...state,
                    isLoading: true,
                }
                default: {
                    return{...state}
                }
    }
}

export default detailTvReducer