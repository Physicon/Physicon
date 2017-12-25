import R from 'ramda'

import {
    CHANGE_CURRENCY
} from '../constants/actionTypes'

const initialState = {
    rub: true
}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case CHANGE_CURRENCY:
            return payload
        default:
            return state
    }
}