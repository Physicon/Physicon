import R from 'ramda'

export const getList = (state, ownProps) => {
    return state.list
}

export const getFilter = (state, ownProps) => {
    return state.filter
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