import {combineReducers} from 'redux'
import movieReducer from '../reducers/MoviesReducer'
import detailReducer from '../reducers/detailReducer'
import seriesReducer from '../reducers/SeriesReducer'

const rootReducer = combineReducers({
    movies: movieReducer,
    detail: detailReducer,
    series: seriesReducer,
})
export default rootReducer