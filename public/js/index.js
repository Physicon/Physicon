import '../css/index.pcss';

import React from 'react'
import ReactDOM from 'react-dom'
import {browserHistory, Router, Route} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'
import {Provider} from 'react-redux'

import configureStore from './store'

import Layout from './containers/layout'
import Home from './containers/home'

const store = configureStore();

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route components={Layout}>
                <Route path='/' component={Home} />
                {/*<Route path='/book/:id' component={Book} />*/}
                {/*<Route path='/basket' component={Basket} />*/}
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);