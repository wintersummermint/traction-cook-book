import React, { Component } from 'react';
import SideBar from './SideBar';
import _ from 'underscore';
import $ from 'jquery';
import { Row, Col, Icon, Button } from 'react-materialize';
import { Link } from 'react-router-dom';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Home from './components/home';
import Edit from './components/edit';
import Saved from './components/saved';
import AddNew from './components/addnew';
import ViewRecipe from './components/menu-container/recipe/viewrecipe';
import EditRecipe from './components/menu-container/recipe/editrecipe';
import Recipes from './data/recipes.js';
import Main from './Main.js';
import createBrowserHistory from 'history/createBrowserHistory';

// const renderViewRecipe  = ({ match, staticContext }) => {

//   const id = match.params.id;
//   const recipe = _.find(Recipes, (current) => current.id == id); // Find matching id for recipe on url

//   if (!recipe) {
//     return <ViewRecipe recipe={recipe} setHandleSaveRecipe={this.renderhandleSaveRecipe}/> /* <NotFoundPage staticContext={staticContext} /> */;
//   }

//   return <ViewRecipe recipe={recipe} setHandleSaveRecipe={this.renderhandleSaveRecipe}/>;
// };

const newHistory = createBrowserHistory();

class RenderApp extends Component {
    
  constructor(props) {
    super(props);

    this.state = {
        recipes : Recipes
      }
  }

  appSetHandleSaveRecipe(id) {

    let recipes = this.state.recipes.map((recipe)=>{

      if (recipe.id == id) {
        recipe.saved = (!recipe.saved ? true : false);
      }

      return recipe;
    });

    this.setState({ recipes });
  }

  toggleSideBar(evt) {

  }

  render() { 
    return (
      <Router history={newHistory}>
      <Main>
        <div className="show-on-small hamburger-icon">
          <Button floating fab='vertical' icon='menu' className='bg-my-pink show-on-small' large style={{bottom: '45px', right: '24px'}}>
            <Link to={`/`}  ><Button floating icon='view_list' className='red'/></Link>
            <Link to={`/edit`}  ><Button floating icon='edit' className='yellow darken-1'/></Link>
            <Link to={`/saved`}  ><Button floating icon='bookmark_border' className='green'/></Link>
            <Link to={`/add-new`}  ><Button floating icon='add_circle_outline' className='blue'/></Link>
          </Button>
        </div>
        <Switch>
          <Route exact path="/" render={() => <Home recipes={this.state.recipes} appHandleSaveRecipe={this.appSetHandleSaveRecipe.bind(this)}/> } />
          <Route path="/edit" render={() => <Edit recipes={this.state.recipes} appHandleSaveRecipe={this.appSetHandleSaveRecipe.bind(this)} /> } />
          <Route path="/saved" render={() => <Saved recipes={this.state.recipes} appHandleSaveRecipe={this.appSetHandleSaveRecipe.bind(this)} /> } />
          <Route path="/add-new" render={() => <AddNew recipes={this.state.recipes} history={newHistory}/> } />
          
          <Route path="/view-recipe/:id" render={({ match, staticContext }) => {
            const id = match.params.id;
            const recipe = _.find(Recipes, (current) => current.id == id); // Find matching id for recipe on url

            if (!recipe) {
              return <ViewRecipe recipe={recipe}/> /* <NotFoundPage staticContext={staticContext} /> */;
            }

            return <ViewRecipe recipe={recipe} setHandleSaveRecipe={this.appSetHandleSaveRecipe.bind(this)}/>;
          }} />

          <Route path="/edit-recipe/:id" render={({ match, staticContext }) => {
            const id = match.params.id;
            const recipe = _.find(Recipes, (current) => current.id == id); // Find matching id for recipe on url

            if (!recipe) {
              return <EditRecipe recipe={recipe} recipes={this.state.recipes}/> /* <NotFoundPage staticContext={staticContext} /> */;
            }

            return <EditRecipe recipe={recipe} recipes={this.state.recipes} setHandleSaveRecipe={this.appSetHandleSaveRecipe.bind(this)}/>;
          }} />

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
