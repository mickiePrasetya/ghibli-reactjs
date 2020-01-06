import React from "react";

const NoPage = () => {
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
			</header>
			<div className="board">
				<img
					className="board__img"
					src="/assets/images/img-404.png"
					alt="404 Not Found"
				/>
				<h3 className="board__title">omayghad!</h3>
				<p className="board__text">We can’t find page you’ve requested</p>
			</div>
			<footer className="footer">
				<p className="footer__text">
					All images are copyright to respective owners and protected under
					international copyright laws.
				</p>
				<p className="footer__copy">
					&copy; 2019. Mickie Prasetya. Made by love
				</p>
			</footer>
		</React.Fragment>
	);
};

export default NoPage;
