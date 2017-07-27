import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { Row } from 'react-materialize';

import SideBar from './components/sidebar';
import Home from './components/home';

export const renderApp = () => (
  <Router>
  	<div>
      <Row>
    		<SideBar>
    			{/* Sub routes of the navbar goes here? or use `match` pattern on each sub component for nested */}
    		</SideBar>
    		<Route exact path="/" component={Home}/> {/* Route will render the component path */}
  	   </Row>
    </div>
  </Router>
);

/* Notes :
	On React Router v4 Router : <Router> may have only one child element
	so it needs to be enclosed on div

	Sidebar will render on left 
	and Home on right as default in path `/`
*/