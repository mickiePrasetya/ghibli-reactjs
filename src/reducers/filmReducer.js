const initialState = {
	data: [],
	banner_data: []
};

export default (state = initialState, action) => {
	switch (action.type) {
		case "LOAD_FILM":
			return {
				...state,
				data: action.payload
			};
		default:
			return state;
	}
};
