import React, { Component } from 'react';
import SideBar from './SideBar';
import Main from './Main';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';

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
      <div className="main">
        <Router>
          <div>
            <SideBar />
            <Switch>
                  <Route exact path="/" render={() => <Home recipes={this.state.recipes} /> } />
                  <Route path="/edit" render={() => <Edit recipes={this.state.recipes} /> } />
                  <Route path="/saved" render={() => <Saved recipes={this.state.recipes} /> } />
                  <Route path="/add-new" render={() => <AddNew recipes={this.state.recipes} /> } />
            </Switch>
          </div>
        </Router>
        
      </div>
    );
  }
}

export default RenderApp;
