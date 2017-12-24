import {
    FETCH_LIST_START,
    FETCH_LIST_SUCCESS,
    FETCH_LIST_FAILURE,
    ADD_FILTER,
    BUY_COURSE
} from '../constants/actionTypes'

import {
    fetchCoursesList as fetchCoursesListApi
} from '../api'

export const setFilter = filter => dispatch => {
    dispatch({
        type: ADD_FILTER,
        payload: filter
    })
}

export const buyCourse = course => dispatch => {
    dispatch({
        type: BUY_COURSE,
        payload: course
    })
}

export const fetchCoursesList = () => async dispatch => {
    dispatch({type: FETCH_LIST_START})

    try {
        const courses = await fetchCoursesListApi()
        dispatch({
            type: FETCH_LIST_SUCCESS,
            payload: courses
        })
    } catch (err) {
        dispatch({
            type: FETCH_LIST_FAILURE,
            payload: err,
            error: true
        })
    }
}