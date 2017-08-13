import React, { Component } from 'react';
import { Icon } from 'react-materialize';

class EditRating extends Component {
	constructor(props) {
		super(props);
		this.state = {
			current_rating : this.props.rating
		}
	}
	render() {
		return (
			<div>
				<Icon>star</Icon>
			</div>
		);
	}
}

export default EditRating;
