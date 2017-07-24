import {
  BASES_UPDATE,
  BASES_UPDATED,
  BASES_UPDATE_FAILED,
} from '../constants/actionTypes';

const initialState = {
	_loadedAt: '',
  _updatedAt: '',
  _loading: false,
  _error: false,
  meta: false,
  data:[]
};

export default function reducer(state = initialState, action = {}) {
	let curTime = new Date();

	switch (action.type) {
		case BASES_UPDATE:
			return {
				...state,
				_loading: true
			};

		case BASES_UPDATED:
			return {
				...state,
				_error: false,
				_updatedAt: curTime,
				_loading: false,
				meta: action.meta || false,
				data: action.data
			};

		case BASES_UPDATE_FAILED:
			return {
				...state,
				_loading: false,
				_error: {
					message: action.error || '',
					counter: state._error ? state._error.counter + 1 : 1,
					lastAt: curTime
				}
			};

		default:
			return state;

	}
}
