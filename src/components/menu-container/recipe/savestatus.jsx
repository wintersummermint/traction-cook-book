import React, { Component } from 'react';
import { Icon } from 'react-materialize';
import { Col } from 'react-materialize';

class SaveStatus extends Component {

	render() {

		let is_saved = this.props.saved ? <Icon className="saved-icon">bookmark</Icon> : <Icon className="saved-icon">bookmark_border</Icon>;

		return (
			<Col s={1} className="m-t-10 m-b-10 hand-hover">
				{is_saved}
			</Col>
		);
	}
}

export default SaveStatus;
