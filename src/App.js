import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/style.scss';
import Home from './Home';

function App() {
   return (
      <BrowserRouter>
         <Switch>
            <Route exact path="/" component={Home} />
         </Switch>
      </BrowserRouter>
   );
}

export default App;
