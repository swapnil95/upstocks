import shortid from 'short-id'

import * as API from 'api'
import { networkHandler, formatData } from 'app/utils'
import actionTypes from './actionTypes'

/*
 * THUNKS
 *
*/

export const setInitialData = () => {
  return (dispatch) => 
    API.dbPromise.then(db => {
      db.transaction('data-store')
          .objectStore('data-store')
          .getAll().then(allObjs => {
            return dispatch({
              type: 'SET_INITIAL_DATA',
              payload: allObjs.sort(sortByTime)
            })
          })
    })
}

export const subscribe = () => {
  return (dispatch) => {
    const dataFormatter = formatData('liveData')
    API.subscribe((data, raiseError) => {
      networkHandler(
        dataFormatter,
        fetchDataSuccess,
        fetchDataError,
        dispatch,
        data,
        raiseError
      )
      API.dbPromise.then(db => {
        const tx = db.transaction('data-store', 'readwrite')
        tx.objectStore('data-store').put(dataFormatter(data), shortid.generate())
      })
    })
  }
}

export const unsubscribe = () => {
  return (dispatch) => {
    API.unsubscribe()
  }
}

/*
 * ACTIONS
 *
*/

// data fetching actions


function fetchDataSuccess(payload) {
  return {
    type: actionTypes.FETCH_DATA_SUCCESS,
    payload
  }
}

function fetchDataError(payload) {
  return {
    type: actionTypes.FETCH_DATA_FAILURE,
    payload
  }
}

function sortByTime(a, b) {
  return a[0] > b[0] ? 1 : -1;
}