import {
  BASES_UPDATED,
} from '../actions/actionTypes';

const initialState = {
  _updatedAt: '',
  data:[],
};

export default function reducer(state = initialState, action = {}) {
	let curTime = new Date();

	switch (action.type) {
		case BASES_UPDATED:
			return {
				...state,
				_updatedAt: curTime,
				data: action.list
			};

		default:
			return state;

	}
}
