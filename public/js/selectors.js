import R from 'ramda'

export const getList = (state) => {
    return state.list
}

export const getFilter = (state) => {
    return state.filter
}

export const getBasket = (state) => {
    return state.basket
}

export const getFilterList = (list, filter) => {
    return R.filter((item) => {
        return (
            (!filter.subj || item.subject === filter.subj) &&
            (!filter.genre || item.genre === filter.genre) &&
            (!filter.grade || item.grade.split(";").includes(filter.grade)) &&
            (!filter.title || item.title.includes(filter.title))
        )
    }, list)
}