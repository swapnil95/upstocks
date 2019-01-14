import Immutable from 'seamless-immutable'

import actionTypes from './actionTypes'


const initialState = Immutable({
  // HISTORICALS
  historicals:[],
  areHistoricalsLoading: false,
  historicalsErrorMessage: null
})

export default (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case actionTypes.FETCH_HISTORICALS_REQUEST:
      // Set loading status to true
      return state.merge({
        areHistoricalsLoading: true
      })
    case actionTypes.FETCH_HISTORICALS_SUCCESS:
      // load historicals and set loading status to false
      return state.merge({
        historicals: payload,
        areHistoricalsLoading: false
      })
    case actionTypes.FETCH_HISTORICALS_FAILURE:
      // Set error message when historicals loading fails
      return state.merge({
        areHistoricalsLoading: false,
        historicalsErrorMessage: payload
      })
    default:
      return state
  }
}
