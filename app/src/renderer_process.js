import 'babel-polyfill'

import React from 'react'
import {render} from 'react-dom'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { AppContainer } from 'react-hot-loader'

import allReducers from './reducers'
import App from './App'
import './global.css'


const logger = createLogger()

const store = createStore(allReducers)

// Save file, etc
store.subscribe(() => {
  const state = store.getState()

})

const rootElement = document.getElementById('app')

render(
  <AppContainer>
    <Provider store={store}>
      <App />
    </Provider>
  </AppContainer>,
  rootElement
)

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default
    render(
      <AppContainer>
        <Provider store={store}>
          <NextApp />
        </Provider>
      </AppContainer>,
      rootElement
    )
  })
}
