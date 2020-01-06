import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/style.scss";
import Home from "./Home";
import NoPage from "./404";

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route component={NoPage} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
