import {
  combineReducers
} from 'redux'
import homeReducer from './home'

//合并成根reducer
const rootReducer = combineReducers({
  homeReducer
})

export default rootReducer