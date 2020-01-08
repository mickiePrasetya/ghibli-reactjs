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
		current_slide: 0
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
		const { slides_list, current_slide } = this.state;
		const slideLength = slides_list.length;

		const nextSlide = () => {
			if (current_slide < slideLength - 1) {
				return this.setState({
					...this.state,
					current_slide: this.state.current_slide + 1
				});
			} else {
				return this.setState({
					...this.state,
					current_slide: 0
				});
			}
		};

		const slideShow = currIndex => {
			if (slides_list.length) {
				return (
					<div
						className="slides__wrapper"
						style={{
							backgroundImage: `url("/assets/images/img-bg-${slides_list[currIndex].id}.jpg")`
						}}
					>
						<div className="slides__content">
							<div className="slides__title">
								{slides_list[currIndex].title}
							</div>
							<div className="slides__text">
								<p>{slides_list[currIndex].description}</p>
								<p className="slides__score">
									score: <span>{slides_list[currIndex].rt_score}</span>
									/100
								</p>
							</div>
						</div>
						<div className="slides__thumbnail">
							<div className="slides__thumb">
								<img
									src={
										currIndex < slides_list.length - 1
											? `/assets/images/img-thumb-${
													slides_list[currIndex + 1].id
											  }.jpg`
											: `/assets/images/img-thumb-${slides_list[0].id}.jpg`
									}
									alt="thumbnail slide"
								/>
							</div>
							<div className="slides__thumb">
								<Button
									variant="link"
									className="slides__btn"
									onClick={nextSlide}
								>
									<ArrowRight className="icon" />
								</Button>
							</div>
						</div>
					</div>
				);
			}
		};

		return (
			<React.Fragment>
				<Header />
				<div className="slides">{slideShow(current_slide)}</div>
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
