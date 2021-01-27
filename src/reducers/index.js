import {combineReducers} from 'redux'
import movieReducer from '../reducers/MoviesReducer'
import detailReducer from '../reducers/detailReducer'
<<<<<<< HEAD
import seriesReducer from '../reducers/SeriesReducer'

const rootReducer = combineReducers({
    movies: movieReducer,
    detail: detailReducer,
    series: seriesReducer,
=======

const rootReducer = combineReducers({
    movies: movieReducer,
    detail: detailReducer
>>>>>>> 454438a4f9aebfa35152d3afeb09d223511d3a79
})

export default rootReducer