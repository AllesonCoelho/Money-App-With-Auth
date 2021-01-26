import reportWebVitals from './reportWebVitals';
import React from 'react'
import ReactDom from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'

import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

import AuthOrApp from './main/authOrApp.jsx'
import reducers from './main/reducer.js'


const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = applyMiddleware(multi, thunk, promise)(createStore)(reducers, devTools)
ReactDom.render(
  <Provider store={store}>
    <AuthOrApp />
  </Provider>,

  document.getElementById('app'))
reportWebVitals();