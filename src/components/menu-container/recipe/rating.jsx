import React, { Component } from 'react';
import { Icon } from 'react-materialize';
import { Col } from 'react-materialize';
import uuidv4 from 'uuid/v4';

class Rating extends Component {
	render() {
		
		const star = this.props.rating;
		const max_star = 5;
		const starRender = [];

		// Count how many stars will show base on rating
		for (var i = star - 1; i >= 0; i--) {
			starRender.push(<Icon className="star" key={uuidv4()}>star</Icon>)
		}

		// Count how many stars remaining
		for (var i = max_star - star; i > 0; i--) {
			starRender.push(<Icon className="star" key={uuidv4()}>star_outline</Icon>)
		}

		return (
			<Col className="m-t-10 m-b-10" s={11} >
				{ starRender }
			</Col>
		);
	}
}

export default Rating;
