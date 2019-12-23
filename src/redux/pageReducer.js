import {
  PAGE_ADVERTISEMENT
} from '../constants'

const CHANGE_PAGE = 'CHANGE_PAGE'

const initialState = {
  windowWidth: null,
  windowHeight: null,
  currentPage: PAGE_ADVERTISEMENT
}

export const movePage = newPage => {
  return {
    type: CHANGE_PAGE,
    moveTo: newPage
  }
}

export default (state = initialState, action) => {
  const { type } = action
  switch (type) {
    case CHANGE_PAGE:
      return { ...state, currentPage: action.moveTo }
    default:
      return { ...state }
  }
}
