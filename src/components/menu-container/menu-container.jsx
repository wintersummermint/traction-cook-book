import React, { Component } from 'react';
import Recipe from './recipe/recipe';
import { Col } from 'react-materialize';

class MenuContainer extends Component {
	render() {
		// Implement loop of recipes list here
		return (
			<div>
				<Col s={12} m={4}>
					<Recipe />
				</Col>
			</div>
		);
	}
}

export default MenuContainer;
