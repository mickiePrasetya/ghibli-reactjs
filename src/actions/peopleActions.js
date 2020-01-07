import axios from "axios";
import { peopleAPI } from "../variables";

export const LOAD_PEOPLE = "LOAD_PEOPLE";

export const loadPeople = cancelToken => dispatch => {
	axios
		.get(peopleAPI, { cancelToken })
		.then(response => {
			dispatch({ type: LOAD_PEOPLE, payload: response.data });
		})
		.catch(err => console.log(err));
};
