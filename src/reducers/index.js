import {combineReducers} from 'redux'
import movieReducer from '../reducers/MoviesReducer'

const rootReducer = combineReducers({
    movies: movieReducer,
})

export default rootReducer