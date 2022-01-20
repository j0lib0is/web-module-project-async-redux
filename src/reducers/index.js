import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL } from '../actions';

const initialState = {
	bpi: {
		eur: '',
		gbp: '',
		usd: '',
	},
	isFetching: false,
	error: 'Ooops, one moment please.',
}

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_START:
			return {
				...state,
				bpi: {
					eur: 'fetching price...',
					gbp: 'fetching price...',
					usd: 'fetching price...',
				},
				isFetching: true,
				error: '',
			};
		case FETCH_SUCCESS:
			return {
				...state,
				bpi: {
					eur: action.payload['EUR'].rate,
					gbp: action.payload['GBP'].rate,
					usd: action.payload['USD'].rate,
				},
				isFetching: false,
				error: '',
			};
		case FETCH_FAIL:
			return  {
				...state,
				bpi: {
					eur: '',
					gbp: '',
					usd: '',
				},
				isFetching: false,
				error: 'Hm. We ran into an issue.',
			};
		default:
			return state;
	}
};