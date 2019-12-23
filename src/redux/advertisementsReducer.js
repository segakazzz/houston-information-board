const REQUEST_ADVERTIESEMENTS = 'REQUEST_ADVERTIESEMENTS'
const RECEIVE_ADVERTISEMENTS = 'RECEIVE_ADVERTISEMENTS'
const REQUEST_FAIL_ADVERTISEMENTS = 'REQUEST_FAIL_ADVERTISEMENTS'
const ADVERTISEMENT_URL = 'http://localhost:5000/advertisements'


const initialState = {
    advertisements: [],
    isLoading: false,
    error: false,
    errorMessage: null
}

const requestAdvertisements = () => {
    return {
        type: REQUEST_ADVERTIESEMENTS
    }
}

export const fetchAdvertisements = () => {
    return (dispatch) => {
        dispatch(requestAdvertisements())
        return fetch(ADVERTISEMENT_URL, {credentials: 'include'})
        .then(res => {
            if(!res.ok){
                return Promise.resolve(new Error(res.statusText))
            } else {
                // console.log(res)
                return res.json()    
            }
        })
        .then(json => dispatch(receiveAdvertisements(json)))
        .catch(error => dispatch(failRequest(error)))
    }
}

const receiveAdvertisements = (json) => {
    // console.log(json.data)
    return {
        type: RECEIVE_ADVERTISEMENTS,
        advertisements: json.data
    }
}

const failRequest = (error) => {
    return {
        type: REQUEST_FAIL_ADVERTISEMENTS,
        error: true,
        errorMessage: error
    }
}

export default (state = initialState, action) => {

    const {type} = action
    switch(type){
        case REQUEST_ADVERTIESEMENTS:
            return {...state, isLoading: true}
        case RECEIVE_ADVERTISEMENTS:
            return {...state, advertisements: action.advertisements, isLoading: false}
        case REQUEST_FAIL_ADVERTISEMENTS:
            return {...state, error: true, errorMessage: action.errorMessage}
        default:
            return {...state}
    }
}