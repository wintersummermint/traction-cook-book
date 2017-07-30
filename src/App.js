import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import SideBar from './components/sidebar';
import Home from './components/home';
import Edit from './components/edit';
import Saved from './components/saved';
import AddNew from './components/addnew';
import { Recipes } from './data/recipes.js';

class RenderApp extends Component {
  constructor(props) {
      super(props);
      
      this.state = {
        recipes : Recipes
      }
    }

  render() {
    return (
    <Router>
      <div className="main">
        <SideBar>
          {/* Sub routes of the navbar goes here? or use `match` pattern on each sub component for nested */}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/edit" component={Edit} recipes={this.state.recipes}/>
            <Route path="/saved" component={Saved}/>
            <Route path="/add-new" component={AddNew}/>
          </Switch>
        </SideBar>
        <Route exact path="/" component={Home} recipes={this.state.recipes}/> {/* Route will render the component path */}
      </div>
    </Router>);
  }
}

export default RenderApp;

/* Notes :
	On React Router v4 Router : <Router> may have only one child element
	so it needs to be enclosed on div

	Sidebar will render on left 
	and Home on right as default in path `/`
*/