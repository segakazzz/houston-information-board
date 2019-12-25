const REQUEST_POSTS = 'REQUEST_POSTS'
const RECEIVE_POSTS = 'RECEIVE_POSTS'
const REQUEST_FAIL_POSTS = 'REQUEST_FAIL_POSTS'

const POSTS_URL = 'http://localhost:5000/posts'

const initialState = {
  posts: [],
  isLoading: false,
  error: false,
  errorMessage: null
}
const requestPosts = () => {
  return {
      type: REQUEST_POSTS
  }
}

export const fetchPosts = () => {
  return (dispatch) => {
      dispatch(requestPosts())
      return fetch(POSTS_URL, {credentials: 'include'})
      .then(res => {
          if(!res.ok){
              return Promise.resolve(new Error(res.statusText))
          } else {
              // console.log(res)
              return res.json()    
          }
      })
      .then(json => dispatch(receivePosts(json)))
      .catch(error => dispatch(failRequest(error)))
  }
}

const receivePosts = (json) => {
  // console.log(json.data)
  return {
      type: RECEIVE_POSTS,
      posts: json.data
  }
}

const failRequest = (error) => {
  return {
      type: REQUEST_FAIL_POSTS,
      error: true,
      errorMessage: error
  }
}

export default (state = initialState, action) => {

  const {type} = action
  switch(type){
      case REQUEST_POSTS:
          return {...state, isLoading: true}
      case RECEIVE_POSTS:
          return {...state, posts: action.posts, isLoading: false}
      case REQUEST_FAIL_POSTS:
          return {...state, error: true, errorMessage: action.errorMessage}
      default:
          return {...state}
  }
}