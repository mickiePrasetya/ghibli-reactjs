import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { User, X, ArrowRight } from "react-feather";

class Home extends Component {
	render() {
		return (
			<React.Fragment>
				<header className="header">
					<div className="brand">
						<img
							className="brand__logo"
							src="/assets/images/img-logo.png"
							alt="Ghibli Studio"
						/>
					</div>
					<nav>
						<ul className="navlist">
							<li>
								<Link to="/films">Films</Link>
							</li>
							<li>
								<Button
									onClick={() => console.log("test")}
									variant="link"
								>
									Characters
								</Button>
							</li>
						</ul>
					</nav>
				</header>
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
				<footer className="footer">
					<p className="footer__text">
						All images are copyright to respective owners and protected
						under international copyright laws.
					</p>
					<p className="footer__copy">
						&copy; 2019. Mickie Prasetya. Made by love
					</p>
				</footer>
				<div className="sidebar">
					<div className="sidebar__header">
						<h5 className="sidebar__title">Characters</h5>
						<Button className="sidebar__close" variant="link">
							<X className="icon" />
						</Button>
					</div>
					<div className="sidebar__content">
						<div className="sidebar__item">
							<div className="sidebar__box">
								<User className="icon" />
							</div>
							<div className="sidebar__text">
								<p className="sidebar__character">Ashitaka</p>
								<span className="sidebar__gender">Male</span>
							</div>
						</div>
						<div className="sidebar__item">
							<div className="sidebar__box">
								<User className="icon" />
							</div>
							<div className="sidebar__text">
								<p className="sidebar__character">Ran</p>
								<span className="sidebar__gender">Female</span>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Home;
