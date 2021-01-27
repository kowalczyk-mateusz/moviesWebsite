const initialState = {
    series: {
            series: [],
    },
    isLoading: true,
}

const detailTvReducer = (state=initialState, action)=>{
    switch(action.type){
        case "GET_TVDETAIL":
            return{
                ...state,
                series: action.payload.series,
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