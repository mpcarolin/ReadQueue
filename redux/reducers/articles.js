import produce from 'immer'
import { TYPES } from '../actionTypes.js'

const initialState = {
    elements: [], // determine obj or array depending on operations. Frequent add/removes/lookups? obj. Otherwise array.
    pending: true,
    error: null
} 
export default (state=initialState, action) => {
    switch (action.type) {
        case TYPES.FETCH_ARTICLES_PENDING:
            console.log('pending: ', action.payload)
            return {
                ...state,
                pending: true
            }
        case TYPES.FETCH_ARTICLES_SUCCESS:
            console.log('success: ', action.payload)
            return {
                elements: action.payload,
                pending: false
            }
        case TYPES.FETCH_ARTICLES_ERROR:
            console.log('error: ', action.payload)
            return {
                ...state,
                error: action.payload,
                pending: false
            }
        case TYPES.ADD_ARTICLE:
            return produce(state, nextState => {
                nextState.elements.push(action.payload)
            })
        default:
            return state
    }
}