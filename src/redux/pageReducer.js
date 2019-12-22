import {
  PAGE_ADVERTISEMENT,
  PAGE_INFOBOARD_SELL_BUY,
  PAGE_INFOBOARD_EVENTS
} from '../constants'

const CHANGE_PAGE = 'PAGE/CHANGE_PAGE'

const initialState = {
  windowWidth: null,
  windowHeight: null,
  currentPage: PAGE_ADVERTISEMENT
}

const movePage = newPage => {
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
