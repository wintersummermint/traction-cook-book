import React, { Component } from 'react';

class ViewRecipe extends Component {

	constructor(props) {
		super(props);

		this.state = {
			recipe : props.recipe
		}
	}
	render() {
		return (
			<div>{this.state.recipe.title}</div>
		);
	}
}

export default ViewRecipe;
