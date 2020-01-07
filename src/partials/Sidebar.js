import React from "react";
import { Button } from "react-bootstrap";
import { User, X } from "react-feather";

const Sidebar = ({ people, reveal, toggleHandler }) => {
	return (
		<div className={reveal ? "sidebar is--open" : "sidebar"}>
			<div className="sidebar__header">
				<h5 className="sidebar__title">Characters</h5>
				<Button
					className="sidebar__close"
					variant="link"
					onClick={toggleHandler}
				>
					<X className="icon" />
				</Button>
			</div>
			<div className="sidebar__content">
				{people.length ? (
					people.map(x => (
						<div className="sidebar__item" key={x.id}>
							<div className="sidebar__box">
								<User className="icon" />
							</div>
							<div className="sidebar__text">
								<p className="sidebar__character">
									{x.name} ({x.age}y.o)
								</p>
								<span className="sidebar__gender">{x.gender}</span>
							</div>
						</div>
					))
				) : (
					<p>Loading</p>
				)}
			</div>
		</div>
	);
};

export default Sidebar;
