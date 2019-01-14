import Immutable from 'seamless-immutable'

import actionTypes from './actionTypes'


const initialState = Immutable({
  // DATA
  data:[],
  dataErrorMessage: null
})

export default (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case 'SET_INITIAL_DATA':
      return state.merge({
        data: payload
      })
    case actionTypes.FETCH_DATA_SUCCESS:
      // load data and set loading status to false
      return state.merge({
        data: [...state.data, payload],
      })
    case actionTypes.FETCH_DATA_FAILURE:
      // Set error message when data loading fails
      return state.merge({
        dataErrorMessage: payload
      })
    default:
      return state
  }
}
