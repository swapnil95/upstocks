import { combineReducers } from 'redux'

import home from 'app/home/reducers'
import live from 'app/live-chart/reducers'
/*
 * Root Reducer for combining all single reducers
 */
export const reducers = combineReducers({
  home,
  live
})
