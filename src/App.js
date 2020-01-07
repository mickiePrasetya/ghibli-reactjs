import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/style.scss";
import Home from "./Home";
import NoPage from "./404";
import Films from "./Films";

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/films" component={Films} />
				<Route component={NoPage} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
