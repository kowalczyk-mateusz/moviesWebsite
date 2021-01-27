import {combineReducers} from 'redux'
import movieReducer from '../reducers/MoviesReducer'
import detailReducer from '../reducers/detailReducer'
import seriesReducer from '../reducers/SeriesReducer'
import detailTvReducer from '../reducers/detailTvReducer'

const rootReducer = combineReducers({
    movies: movieReducer,
    detail: detailReducer,
    series: seriesReducer,
    seriesDetail: detailTvReducer,
})
export default rootReducer