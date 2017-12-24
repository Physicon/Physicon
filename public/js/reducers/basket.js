import R from 'ramda'

import {
    BUY_COURSE
} from '../constants/actionTypes'

const initialState = []

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case BUY_COURSE:
            return [...state, payload]
        default:
            return state
    }
}