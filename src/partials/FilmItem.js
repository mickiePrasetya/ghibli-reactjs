import React from "react";

const FilmItem = ({ film }) => {
	return (
		<div className="lists__item">
			<div className="lists__wrapper">
				<h4 className="lists__title">
					{film.title} ({film.release_date})
				</h4>
				<div className="lists__detail">
					<p>
						Release date: <span>{film.release_date}</span>
					</p>
					<p>
						Director: <span>{film.director}</span>
					</p>
					<p>
						Producer: <span>{film.producer}</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default FilmItem;
