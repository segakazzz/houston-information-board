const REQUEST_POSTS = 'REQUEST_POSTS'
const RECEIVE_POSTS = 'RECEIVE_POSTS'
const REQUEST_FAIL_POSTS = 'REQUEST_FAIL_POSTS'

const SUBMIT_POST = 'SUBMIT_POST'
const REQUEST_SUBMIT_POST = 'REQUEST_SUBMIT_POST'
const RESPONSE_SUBMIT_POST = 'RESPONSE_SUBMIT_POST'

const POSTS_URL = 'http://localhost:5000/posts'

const getInitialForm = () => {
  const form = {
    title: null,
    text: null,
    photos: null,
    location: null,
    datetime: null,
    link: null
  }
  return { ...form }
}

const initialState = {
  form: getInitialForm(),
  posts: [],
  isLoading: false,
  isSubmitting: false,
  error: false,
  errorMessage: null
}

const requestPosts = () => {
  return {
    type: REQUEST_POSTS
  }
}

export const fetchPosts = () => {
  return dispatch => {
    dispatch(requestPosts())
    return fetch(POSTS_URL, { credentials: 'include' })
      .then(res => {
        if (!res.ok) {
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

const receivePosts = json => {
  // console.log(json.data)
  return {
    type: RECEIVE_POSTS,
    posts: json.data
  }
}

const failRequest = error => {
  return {
    type: REQUEST_FAIL_POSTS,
    error: true,
    errorMessage: error
  }
}

export const submitPost = () => {
  return dispatch => {
    dispatch(requestSubmitPost())
    return fetch(POSTS_URL, { credentials: 'include' })
      .then(res => {
        if (!res.ok) {
          return Promise.resolve(new Error(res.statusText))
        } else {
          // console.log(res)
          return res.json()
        }
      })
      .then(json => dispatch(responseSubmitPost(json)))
      .catch(error => {})
  }
}

const requestSubmitPost = () => {
  return {
    type: REQUEST_SUBMIT_POST
  }
}

const responseSubmitPost = () => {
  return {
    type: RESPONSE_SUBMIT_POST
  }
}

// export const updateForm = (field, value) => {
//   return {
//     type: UPDATE_FORM,
//     field: field,
//     value: value
//   }
// }

export default (state = initialState, action) => {
  console.log(action)
  const { type } = action
  switch (type) {
    case REQUEST_POSTS:
      return { ...state, isLoading: true }
    case RECEIVE_POSTS:
      return { ...state, posts: action.posts, isLoading: false }
    case REQUEST_FAIL_POSTS:
      return { ...state, error: true, errorMessage: action.errorMessage }
    case REQUEST_SUBMIT_POST:
      return { ...state, isSubmitting: true}
    case RESPONSE_SUBMIT_POST:
      return { ...state, isSubmitting: false}
    default:
      return { ...state }
  }
}
