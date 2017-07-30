import React, { Component } from 'react';
import Recipe from './recipe/recipe';
import { Col } from 'react-materialize';

class MenuContainer extends Component {

	setHandleSaveRecipe(recipe_id) {
		this.props.parentHandleSaveRecipe(recipe_id);
	}

	render() {

		const recipeList = this.props.recipes.map(recipe => {
			return (
				<Col s={12} m={4} key={recipe.id}>
					<Recipe recipe={recipe} setHandleSaveRecipe={this.setHandleSaveRecipe.bind(this)}/>
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
