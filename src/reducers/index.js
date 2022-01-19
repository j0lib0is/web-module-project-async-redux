import { FETCH_PRICE, FETCH_SUCCESS, FETCH_FAIL } from "../actions";

const initialState = {
	time: '',
	usdPrice: '',
	gbpPrice: '',
	eurPrice: '',
	isFetching: false,
	error: 'Ooops, one moment please.',
}

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_PRICE:
			return state;
		case FETCH_SUCCESS:
			return state;
		case FETCH_FAIL:
			return state;
		default:
			return state;
	}
};