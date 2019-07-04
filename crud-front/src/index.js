import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import Reducers from './Reducers/reducers'

import { all } from 'redux-saga/effects'

import createSagaMiddleware from 'redux-saga'

import Init from './Saga/Init'
import Create from './Saga/Create'
import Update from './Saga/Update'
import Delete from './Saga/Delete'



function* rootSaga() {
    yield all([
        ...Init,
        ...Create,
        ...Update,
        ...Delete,
    ])
}

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    Reducers,
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
