import axios from 'axios';

export const FETCH_PRICE = 'FETCH_PRICE';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';

// export const getPrice = () {
// 	return (dispatch) => {
// 		dispatch(fetchStart());
// 		axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
// 			.then(resp => console.log(resp))
// 			.catch(err => console.error(err))
// 	}
// }
