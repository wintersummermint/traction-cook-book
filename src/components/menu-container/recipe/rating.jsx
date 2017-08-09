import React, { Component } from 'react';
import { Icon } from 'react-materialize';
import { Col } from 'react-materialize';
import uuidv4 from 'uuid/v4';

class Rating extends Component {

	constructor(props) {
		super(props);
		this.state = {
			is_edit_rating : false,
			current_rating : this.props.rating,
		}
	}

	editRating(evt) {
		this.setState({ is_edit_rating : true });
	}

	saveRating(evt) {

		this.props.saveRatingRecipe(evt.target.value);
		this.setState({ is_edit_rating : false });

	}

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

		let defaultRender = <div className="editable-rating" onClick={(evt)=> this.editRating(evt)}>{ starRender } {this.props.isEditable == true ? <Icon className="description-edit-icon my-pink">edit</Icon>  : ''}</div>;
		let renderEdit = <input type="number" defaultValue={this.props.rating} min="0" max="5" className="editStar" onBlur={(evt)=>this.saveRating(evt)}/>;
		
		return (
			<Col className="m-t-10 m-b-10" s={11} m={9}>
				{this.state.is_edit_rating && this.props.isEditable == true ? renderEdit : defaultRender }
			</Col>
		);
	}
}

export default Rating;
