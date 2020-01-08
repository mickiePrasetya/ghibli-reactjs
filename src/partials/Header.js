import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

// ACTIONS
import { loadPeople } from "../actions/peopleActions";

// PARTIALS
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Sidebar from "./Sidebar";

class Header extends Component {
	state = {
		isOpen: false
	};

	headerRef = React.createRef();
	source = axios.CancelToken.source();

	componentDidMount() {
		this.props.loadPeople(this.source.token);

		// window scroll
		window.onscroll = () => {
			if (
				document.body.scrollTop > 100 ||
				document.documentElement.scrollTop > 100
			) {
				this.headerRef.current.classList.add("header--slideup");
			} else {
				this.headerRef.current.classList.remove("header--slideup");
			}
		};
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.isOpen !== this.state.isOpen) {
			if (this.state.isOpen) {
				document.body.classList.add("body--locked");
			} else {
				document.body.classList.remove("body--locked");
			}
		}
	}

	toggleHandler = () => {
		this.setState({ isOpen: !this.state.isOpen });
	};

	render() {
		return (
			<React.Fragment>
				<header className="header" ref={this.headerRef}>
					<div className="brand">
						<Link to="/">
							<img
								className="brand__logo"
								src="/assets/images/img-logo.png"
								alt="Ghibli Studio"
							/>
						</Link>
					</div>
					<nav>
						<ul className="navlist">
							<li>
								<Link to="/films">Films</Link>
							</li>
							<li>
								<Button onClick={this.toggleHandler} variant="link">
									Characters
								</Button>
							</li>
						</ul>
					</nav>
				</header>
				<Sidebar
					people={this.props.people.data}
					reveal={this.state.isOpen}
					toggleHandler={this.toggleHandler}
				/>
			</React.Fragment>
		);
	}
}

const mapStateToProps = state => ({
	people: state.people
});

export default connect(mapStateToProps, { loadPeople })(Header);
