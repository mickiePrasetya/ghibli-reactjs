import axios from "axios";
import { filmsAPI } from "../variables";

export const LOAD_FILMS = "LOAD_FILMS";

export const loadFilms = cancelToken => dispatch => {
	axios
		.get(filmsAPI, { cancelToken })
		.then(response => {
			dispatch({ type: LOAD_FILMS, payload: response.data });

			return Promise.resolve();
		})
		.catch(err => console.log(err));
};
