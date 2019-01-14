import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'

import { reducers } from './reducers'


// middleware for checking token and thunk logger
const middlewares = [thunk]
if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`)
  middlewares.push(logger)
}
const appliedMiddleware = applyMiddleware(...middlewares)
// connecting middleware with store
const store = createStore(reducers, appliedMiddleware)

export default store
