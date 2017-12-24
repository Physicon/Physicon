import R from 'ramda'

import {
    ADD_FILTER
} from '../constants/actionTypes'

const initialState = {
    title: '',
    subj: '',
    genre: '',
    grade: ''
}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case ADD_FILTER:
            return R.merge(state, payload)
        default:
            return state
    }
}