import React, { Component } from 'react';
import { Icon } from 'react-materialize';
import { Col } from 'react-materialize';

class SaveStatus extends Component {

	saveRecipe() {
		console.log(this.props.saved);
		this.setState({ saved : !this.props.saved ? true : false });
		console.log(this.state.saved);
	}

	render() {

		let is_saved = this.props.saved ? <Icon className="saved-icon" onClick={this.saveRecipe.bind(this)}>bookmark</Icon> : <Icon className="saved-icon" onClick={this.saveRecipe.bind(this)}>bookmark_border</Icon>;

		return (
			<Col s={1} className="m-t-10 m-b-10 hand-hover">
				{is_saved}
			</Col>
		);
	}
}

export default SaveStatus;
