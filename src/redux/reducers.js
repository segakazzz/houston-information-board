import { combineReducers } from 'redux'
import pageReducer from './pageReducer'
import userReducer from './userReducer'
import advertisementsReducer from './advertisementsReducer'
import bulltinBoardReducer from './bulletinBoardReducer'

export default combineReducers({
    page: pageReducer,
    user: userReducer,
    advertisements: advertisementsReducer,
    bulletinBoard: bulltinBoardReducer
})