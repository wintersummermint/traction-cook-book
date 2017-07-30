import React, { Component } from 'react';
import { Input, Row, Col } from 'react-materialize';
import MenuContainer from './menu-container/menu-container';
import _ from 'underscore';

class Saved extends Component {

	homeHandleSaveRecipe(recipe_id) {
		this.props.appHandleSaveRecipe(recipe_id);
	}

	render() {

		let filteredSavedRecipes = _.filter(this.props.recipes,(recipe) => {
			return recipe.saved == true;
		});

		return (
			<Row className="m-t-20">
				<Col s={12}>
					<Col s={9}>
						<h4 className="p-l-10 semi-black">Saved Recipes</h4>
					</Col>
					<Col s={3}>
						<Input placeholder="Search" s={12} />
					</Col>
					
					<MenuContainer recipes={filteredSavedRecipes} parentHandleSaveRecipe={this.homeHandleSaveRecipe.bind(this)}/>
				</Col>
			</Row>
		);
	}
}

export default Saved;
