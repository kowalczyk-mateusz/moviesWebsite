import {combineReducers} from 'redux'
import movieReducer from '../reducers/MoviesReducer'
import detailReducer from '../reducers/detailReducer'
import seriesReducer from '../reducers/SeriesReducer'
import detailTvReducer from '../reducers/detailTvReducer'
import searchReducer from '../reducers/searchReducer'
import randomReducer from '../reducers/randomReducer'

const rootReducer = combineReducers({
    movies: movieReducer,
    detail: detailReducer,
    series: seriesReducer,
    seriesDetail: detailTvReducer,
    search: searchReducer,
    randomMovie: randomReducer,
})
export default rootReducer