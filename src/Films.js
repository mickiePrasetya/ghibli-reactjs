import React, { Component } from "react";
import { connect } from "react-redux";
import { Container } from "react-bootstrap";
import axios from "axios";

// ACTIONS
import { loadFilms } from "./actions/filmActions";

// Partials
import PageFooter from "./partials/PageFooter";
import Header from "./partials/Header";
import FilmItem from "./partials/FilmItem";

class Films extends Component {
	source = axios.CancelToken.source();

	componentDidMount() {
		this.props.loadFilms(this.source.token);
	}

	render() {
		console.log(this.props.films);
		const { films } = this.props;
		return (
			<React.Fragment>
				<Header />
				<div className="content">
					<div
						className="content__header"
						style={{
							backgroundImage:
								'url("/assets/images/img-bg-2baf70d1-42bb-4437-b551-e5fed5a87abe.jpg")'
						}}
					></div>
					<div className="content__body">
						<div className="content__inner">
							<Container>
								<h3 className="content__title">Films</h3>
								<div className="lists">
									{films.data.length ? (
										films.data.map((x, i) => (
											<FilmItem film={x} key={x.id} />
										))
									) : (
										<p>Loading</p>
									)}
								</div>
							</Container>
						</div>
					</div>
				</div>
				<PageFooter />
			</React.Fragment>
		);
	}
}

const mapStateToProps = state => ({
	films: state.films
});

export default connect(mapStateToProps, { loadFilms })(Films);
