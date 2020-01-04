const initialState = {
	data: []
};

export default (state = initialState, action) => {
	switch (action.type) {
		case "LOAD_PEOPLE":
			return {
				...state,
				data: action.payload
			};
		default:
			return state;
	}
};
