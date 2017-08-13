import React, { Component } from 'react';
import { Icon } from 'react-materialize';
import { Col } from 'react-materialize';
import uuidv4 from 'uuid/v4';
import EditRating from './editRating';
import $ from 'jquery';

class Rating extends Component {

	constructor(props) {
		super(props);
		this.state = {
			is_edit_rating : false,
			current_rating : this.props.rating,
		}

		this.saveStarRating = this.saveStarRating.bind(this);
	}

	editRating(evt) {
		this.setState({ is_edit_rating : true });
	}

	changeRenderedRating(evt) {
		if (this.props.isEditable == true) {
			// Get the index of the current hovered star
			let index = $(evt.target).closest('.inline').index();
			this.setState({ current_rating : index + 1 }, function(){
				console.log(this.state.current_rating);
			});
		}
		
	}

	saveStarRating() {
		if (this.props.isEditable) {
			this.props.saveRatingRecipe(this.state.current_rating);
			this.setState({ is_edit_rating : false });
		}
	}

	render() {

		const star = this.state.current_rating;
		const max_star = 5;
		const starRender = [];

		// Count how many stars will show base on rating
		for (var i = star - 1; i >= 0; i--) {
			starRender.push(<div className="inline" onMouseEnter={(evt)=> this.changeRenderedRating(evt)} onClick={this.saveStarRating}><Icon className="star" key={uuidv4()}>star</Icon></div>)
		}

		// Count how many stars remaining
		for (var i = max_star - star; i > 0; i--) {
			starRender.push(<div className="inline" onMouseEnter={(evt)=> this.changeRenderedRating(evt)} onClick={this.saveStarRating}><Icon className="star" key={uuidv4()}>star_outline</Icon></div>)
		}

		let defaultRender = <div className="editable-rating">{ starRender } {this.props.isEditable == true ? <Icon className="description-edit-icon my-pink" onClick={(evt)=> this.editRating(evt)}>edit</Icon>  : ''}</div>;
		let renderEdit = <div className="editable-rating hovered-star"> { starRender } </div>;
		
		return (
			<Col className="m-t-10 m-b-10" s={11} m={9}>
				{this.state.is_edit_rating && this.props.isEditable == true ? renderEdit : defaultRender }		
			</Col>
		);
	}
}

export default Rating;
