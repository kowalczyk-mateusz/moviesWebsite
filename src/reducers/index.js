import {combineReducers} from 'redux'
import movieReducer from '../reducers/MoviesReducer'
import detailReducer from '../reducers/detailReducer'

const rootReducer = combineReducers({
    movies: movieReducer,
    detail: detailReducer
})

export default rootReducer