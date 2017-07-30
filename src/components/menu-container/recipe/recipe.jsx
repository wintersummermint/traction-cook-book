import React, { Component } from 'react';
import { Router, Route, Switch, Link } from 'react-router-dom';
import { Col, Card, CardTitle } from 'react-materialize';
import Rating from './rating';
import SaveStatus from './savestatus';

import createBrowserHistory from 'history/createBrowserHistory'

class Recipe extends Component {

	handleSaveRecipe(recipe_id) {
		this.props.setHandleSaveRecipe(recipe_id);
	}

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

					<Rating rating={recipe.rating} />
					<Col m={1} s={1}>
						<SaveStatus saved={recipe.saved} onSaveRecipe={this.handleSaveRecipe.bind(this)} _id={recipe.id}/>
					</Col>
					
				</Card>
			</div>
		);
	}
}

export default Recipe;