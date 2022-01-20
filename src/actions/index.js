import axios from 'axios';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';

export const getPrice = () => {
	return (dispatch) => {
		dispatch({type: FETCH_START});
		axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
			.then(resp => {
        		dispatch({type: FETCH_SUCCESS, payload: resp.data.bpi});
      		})
			.catch(err => {
				dispatch({type: FETCH_FAIL, payload: err});
      		});
	}
}

export const fetchStart = () => {
	return ({type: FETCH_START});
}
export const fetchSuccess = (obj) => {
	return ({type: FETCH_SUCCESS, payload: obj});
}
export const fetchFail = (error) => {
	return ({type: FETCH_FAIL, error: error});
}
