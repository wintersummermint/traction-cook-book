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
				<Card className='medium recipe-card' header={<CardTitle image={recipe.imageUrl}></CardTitle>}>
					<Col s={12} className="recipe-description">
					<Link to={`/view-recipe/${recipe.id}`} className="recipe-card-title">
						<b className="semi-black">{recipe.title}</b>
					</Link>
					<p>{recipe.description}</p>
					
					</Col>

					<Rating rating={recipe.rating}/>

					<SaveStatus saved={recipe.saved}/>
				</Card>
			
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