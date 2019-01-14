import * as API from '../../api'
import { networkHandler, formatData } from '../utils'
import actionTypes from './actionTypes'

/*
 * THUNKS
 *
*/

export const fetchHistoricals = () => {
  return (dispatch) => {
    dispatch(fetchHistoricalsRequest())
    return API.getHistoricals()
      .then(response => {
        networkHandler(
          formatData('historical'),
          fetchHistoricalsSuccess,
          fetchHistoricalsError,
          dispatch,
          response.data
        )
      })
      .catch((error) => {
        // TODO: Move this to a separate function. This can be resuable
        if (error.code === 'ECONNABORTED') {
          return dispatch(fetchHistoricalsError('The server took too long to respond'))
        }
        return dispatch(fetchHistoricalsError('Something went wrong'))
      })
  }
}

/*
 * ACTIONS
 *
*/

// historicals fetching actions

function fetchHistoricalsRequest() {
  return { type: actionTypes.FETCH_HISTORICALS_REQUEST }
}

function fetchHistoricalsSuccess(payload) {
  return {
    type: actionTypes.FETCH_HISTORICALS_SUCCESS,
    payload
  }
}

function fetchHistoricalsError(payload) {
  return {
    type: actionTypes.FETCH_HISTORICALS_FAILURE,
    payload
  }
}