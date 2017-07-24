const initialState = {
  data: [
		{
			test: '1'
		}
	],
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {

    // case ActionConst.FOCUS:
      // return {
      //   ...state,
      //   scene: action.scene,
      // };

    default:
      return state;
  }
}
