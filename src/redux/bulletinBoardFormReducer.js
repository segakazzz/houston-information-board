const SUBMIT_FORM = 'SUBMIT_FORM'
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

export const updateForm = (field, value) => ({
  type: UPDATE_FORM,
  field: field,
  value: value
})

export default (state = initialState, action) => {
  // console.log(action)
  const { type } = action
  switch (type) {
    case SUBMIT_FORM:
      return {...state}
    default:
      return { ...state }
  }
}
