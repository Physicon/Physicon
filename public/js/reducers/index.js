import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'

import list from './list'
import filter from './filter'
import basket from './basket'
import currency from './currency'

export default combineReducers({
    routing: routerReducer,
    list,
    filter,
    basket,
    currency
})