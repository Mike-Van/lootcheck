import {FETCH_BITCOIN, END_POINT} from './constants'

export const fetchBitcoin = () => {
  return dispatch => {
    return fetch(END_POINT)
      .then(response => response.json())
      .then(json => dispatch({type: FETCH_BITCOIN, bitcoin: json}))
  }
}