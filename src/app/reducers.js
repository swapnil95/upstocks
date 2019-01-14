import { combineReducers } from 'redux'

import home from './home/reducers'
import live from './live-data/reducers'
/*
 * Root Reducer for combining all single reducers
 */
export const reducers = combineReducers({
  home,
  live
})
