import React, { Component } from 'react';
import SideBar from './SideBar';
import _ from 'underscore';

import {
  Router,
  Route,
  Switch
} from 'react-router-dom';

import Home from './components/home';
import Edit from './components/edit';
import Saved from './components/saved';
import AddNew from './components/addnew';
import ViewRecipe from './components/menu-container/recipe/viewrecipe';
import Recipes from './data/recipes.js';
import Main from './Main.js';
import createBrowserHistory from 'history/createBrowserHistory';

const renderViewRecipe  = ({ match, staticContext }) => {
  const id = match.params.id;
  console.log('recipes', Recipes);
  const recipe = _.find(Recipes, (current) => current.id == id);
  
  if (!recipe) {
    return <ViewRecipe recipe={recipe} /> /* <NotFoundPage staticContext={staticContext} /> */;
  }

  return <ViewRecipe recipe={recipe} />;
};

const newHistory = createBrowserHistory();

class RenderApp extends Component {
    
  constructor(props) {
    super(props);

    this.state = {
        recipes : Recipes
      }
  }

  render() { 
    return (
      <Router history={newHistory}>
      <Main>
        <Switch>
          <Route exact path="/" render={() => <Home recipes={this.state.recipes} /> } />
          <Route path="/edit" render={() => <Edit recipes={this.state.recipes} /> } />
          <Route path="/saved" render={() => <Saved recipes={this.state.recipes} /> } />
          <Route path="/add-new" render={() => <AddNew recipes={this.state.recipes} /> } />
          <Route path="/view-recipe/:id" render={ renderViewRecipe } />
        </Switch>
      </Main>
      </Router>
    );
  }
}

export default RenderApp;

/* Notes :
  On React Router v4 Router : <Router> may have only one child element
  so it needs to be enclosed on div

  Props can be passed down through render prop on Route : <Route exact path="/" render={() => <Home recipes={this.state.recipes} /> } />

  Sidebar will render on left 
  and Home on right as default in path `/`

  
*/
