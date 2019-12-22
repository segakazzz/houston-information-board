import { combineReducers } from 'redux'
import pageReducer from './pageReducer'
import userReducer from './userReducer'
import advertisementsReducer from './advertisementsReducer'

export default combineReducers({
    page: pageReducer,
    user: userReducer,
    advertisements: advertisementsReducer
})