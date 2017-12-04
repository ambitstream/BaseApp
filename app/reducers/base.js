import {
  COMMENTS_UPDATED,
} from '../actions/actionTypes';

const initialState = {
  _updatedAt: '',
  comments: [],
};

export default function reducer(state = initialState, action = {}) {
	let curTime = new Date();

	switch (action.type) {
		case COMMENTS_UPDATED:
			return {
				...state,
				_updatedAt: curTime,
				comments: action.comments
			};

		default:
			return state;

	}
}
