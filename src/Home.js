import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import { ArrowRight } from "react-feather";
import axios from "axios";

// ACTIONS
import { loadFilms } from "./actions/filmActions";

// Partials
import Header from "./partials/Header";
import DefaultFooter from "./partials/DefaultFooter";

class Home extends Component {
	state = {
		slides_list: [],
		selected_slide: {}
	};

	source = axios.CancelToken.source();

	componentDidMount() {
		this.props.loadFilms(this.source.token);
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.films !== this.props.films) {
			if (this.props.films.data.length) {
				this.setState({
					...this.state,
					slides_list: this.props.films.data.slice(0, 6)
				});
			}
		}
	}

	render() {
		const { slides_list } = this.state;
		const slideLength = slides_list.length;

		console.log(slideLength);

		return (
			<React.Fragment>
				<Header />
				<div className="slides">
					<div
						className="slides__wrapper"
						style={{
							backgroundImage: 'url("/assets/images/img-bg-3.jpg")'
						}}
					>
						<div className="slides__content">
							<div className="slides__title">My Neighbor Totoro</div>
							<div className="slides__text">
								<p>
									Two sisters move to the country with their father in
									order to be closer to their hospitalized mother, and
									discover the surrounding trees are inhabited by
									Totoros, magical spirits of the forest. When the
									youngest runs away from home, the older sister seeks
									help from the spirits to find her.
								</p>
								<p className="slides__score">
									score: <span>9.3</span> /100
								</p>
							</div>
						</div>
						<div className="slides__thumbnail">
							<div className="slides__thumb">
								<img
									src="/assets/images/img-thumbnail-1.jpg"
									alt="thumbnail slide"
								/>
							</div>
							<div className="slides__thumb">
								<Button
									variant="link"
									className="slides__btn"
									onClick={() => console.log("clicked!")}
								>
									<ArrowRight className="icon" />
								</Button>
							</div>
						</div>
					</div>
				</div>
				<div className="ornament">
					<img
						className="ornament__img"
						src="/assets/images/img-totoro-left.png"
						alt="ornament website"
					/>
				</div>
				<DefaultFooter />
			</React.Fragment>
		);
	}
}

const mapStateToProps = state => ({
	films: state.films
});

export default connect(mapStateToProps, { loadFilms })(Home);
