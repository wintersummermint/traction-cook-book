import React, { Component } from 'react';
import { Icon } from 'react-materialize';
import { Col } from 'react-materialize';

class SaveStatus extends Component {
	constructor(props) {
		super(props);
		
	}

	saveRecipe(recipe_id) {
		this.props.onSaveRecipe(recipe_id);
	}

	render() {
		
		let is_saved = this.props.saved ? <Icon className="saved-icon">bookmark</Icon> : <Icon className="saved-icon">bookmark_border</Icon>;

		return (
			<div className="hand-hover" onClick={this.saveRecipe.bind(this, this.props._id)}>
				{is_saved}
			</div>
		);
	}
}

export default SaveStatus;
