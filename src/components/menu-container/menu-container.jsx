import React, { Component } from 'react';
import Recipe from './recipe/recipe';
import { Col } from 'react-materialize';

class MenuContainer extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isEditable : this.props.isEditable ? 'hand-hover edit-card' : ''
		}
	}
	setHandleSaveRecipe(recipe_id) {
		this.props.parentHandleSaveRecipe(recipe_id);
	}

	render() {

		const recipeList = this.props.recipes.map(recipe => {
			return (
				<Col s={12} m={4} key={recipe.id}>
					<div className={this.state.isEditable}>
						<Recipe recipe={recipe} setHandleSaveRecipe={this.setHandleSaveRecipe.bind(this)} isEditable={this.state.isEditable}/>
					</div>
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
