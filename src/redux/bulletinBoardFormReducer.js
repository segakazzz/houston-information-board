const UPDATE_FORM = 'UPDATE_FORM'
// const OPEN_MODAL = 'OPEN_MODAL'
// const ADD_PHOTO = 'ADD_PHOTO'
// const ADD_LOCATION = 'ADD_LOCATION'
// const ADD_DATETIME = 'ADD_DATETIME'
// const ADD_LINK = 'ADD_LINK'
// const REMOVE_PHOTO = 'REMOVE_PHOTO'
// const REMOVE_LOCATION = 'REMOVE_LOCATION'
// const REMOVE_DATETIME = 'REMOVE_DATETIME'
// const REMOVE_LINK = 'REMOVE_LINK'
// const SUBMIT = 'SUBMIT'


const initialState = {
  title: null,
  text: null,
  photos: null,
  location: null,
  datetime: null,
  link: null,
  hasError: false,
  errorMessage: null
}

export const updateForm = (title, text) => ({
  type: UPDATE_FORM,
  title: title,
  text: text
})

export default (state = initialState, action) => {
  // console.log(action)
  const { type } = action
  switch (type) {
    case UPDATE_FORM:
      const { title, text } = action
      return { ...state, title: title, text: text }
    default:
      return { ...state }
  }
}
