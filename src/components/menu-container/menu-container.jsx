import React, { Component } from 'react';
import Recipe from './recipe/recipe';
import { Col } from 'react-materialize';

class MenuContainer extends Component {

	render() {

		const recipeList = this.props.recipes.map(recipe => {
			return (
				<Col s={12} m={4} key={recipe.id}>
					<Recipe recipe={recipe} />
				</Col>
			)
		})

		// Implement loop of recipes list here
		return (
			<div>
				{recipeList}
			</div>
		);
	}
}

export default MenuContainer;
