import React, { Component } from 'react';
import { Router, Route, Switch, Link } from 'react-router-dom';
import { Col, Card, CardTitle } from 'react-materialize';
import Rating from './rating';
import SaveStatus from './savestatus';
import ViewRecipe from './viewrecipe';

import createBrowserHistory from 'history/createBrowserHistory'

class Recipe extends Component {

	render() {
		const newHistory = createBrowserHistory();
		const recipe = this.props.recipe;
		return (
			<div>
			<Link to={`/view-recipe/${recipe.id}`} >
				<Card className='small recipe-card' header={<CardTitle image={recipe.imageUrl}>{recipe.title}</CardTitle>}>
					<Col s={12} className="recipe-description">
					{recipe.description}
					</Col>

					<Rating rating={recipe.rating}/>

					<SaveStatus saved={recipe.saved}/>
				</Card>
			</Link>
			<Router history={newHistory}>
				<Switch>
				<Route exact path="/view-recipe" render={() => <ViewRecipe recipes={recipe} /> } />
				</Switch>
			</Router>
			</div>
		);
	}
}

export default Recipe;