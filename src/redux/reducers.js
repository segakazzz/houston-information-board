import { combineReducers } from 'redux'
import pageReducer from './pageReducer'
import userReducer from './userReducer'
import advertisementsReducer from './advertisementsReducer'
import bulletinBoardFormReducer from './bulletinBoardFormReducer'
import bulltinBoardPostsReducer from './bulletinBoardPostsReducer'

export default combineReducers({
    page: pageReducer,
    user: userReducer,
    advertisements: advertisementsReducer,
    bulletinForm: bulletinBoardFormReducer,
    bulletinPosts: bulltinBoardPostsReducer
})