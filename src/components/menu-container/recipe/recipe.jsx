import React, { Component } from 'react';
import { Col, Card, CardTitle } from 'react-materialize';
import Rating from './rating';
import SaveStatus from './savestatus';

class Recipe extends Component {
	render() {

		const recipe = this.props.recipe;
		return (
			<Card className='small' header={<CardTitle image={recipe.imageUrl}>{recipe.title}</CardTitle>} >
				<Col s={12} className="recipe-description">
				{recipe.description}
				</Col>

				<Rating rating={recipe.rating} />

				<SaveStatus saved={recipe.saved}/>
			</Card>
		);
	}
}

export default Recipe;