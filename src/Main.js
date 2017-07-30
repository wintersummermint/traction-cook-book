import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Home from './components/home';
import Edit from './components/edit';
import Saved from './components/saved';
import AddNew from './components/addnew';
import { Recipes } from './data/recipes.js';


class Main extends Component {

	render() {
		return (
			<div></div>
		);
	}
}

export default Main;

/* Notes :
	On React Router v4 Router : <Router> may have only one child element
	so it needs to be enclosed on div

  Props can be passed down through render prop on Route : <Route exact path="/" render={() => <Home recipes={this.state.recipes} /> } />

	Sidebar will render on left 
	and Home on right as default in path `/`

  
*/