import {
    FETCH_LIST_SUCCESS
} from '../constants/actionTypes'

const initialState = []

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case FETCH_LIST_SUCCESS:
            return payload.items
        default:
            return state
    }
}