import { LOAD_FILMS } from "../actions/filmActions";

const initialState = {
	data: [],
	banner_data: []
};

export default (state = initialState, action) => {
	switch (action.type) {
		case LOAD_FILMS:
			return {
				...state,
				data: action.payload
			};
		default:
			return state;
	}
};
