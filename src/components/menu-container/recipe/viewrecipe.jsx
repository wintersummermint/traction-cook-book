import React, { Component } from 'react';
import { Row, Col, Icon, MediaBox } from 'react-materialize';
import Rating from './rating';
import uuidv4 from 'uuid/v4';
import SaveStatus from './savestatus';

class ViewRecipe extends Component {

	constructor(props) {
		super(props);

		this.state = {
			recipe : props.recipe
		}
	}


	handleSaveRecipe(recipe_id) {
		this.props.setHandleSaveRecipe(recipe_id);
	}

	render() {

		let recipe = this.state.recipe;
		let is_saved = recipe.saved ? <Icon className="saved-icon medium hand-hover">bookmark</Icon> : <Icon className="saved-icon medium hand-hover">bookmark_border</Icon>;
		let ingredients = recipe.ingredients.map((ingredient)=> {
			return <p key={uuidv4()}>{`• ${ingredient}`}</p>;
		});

		let instructions = recipe.instructions.map((instruction,index)=> {
			return <p key={uuidv4()}>{`${index + 1}. ${instruction}`}</p>;
		});

		return (
			<div>
			<Row className="m-t-30">
				<Col m={10}>
					<h4 className="my-pink p-l-10">{recipe.title}</h4>
					<div className="p-l-0">
						<Rating rating={recipe.rating}/>
					</div>
				</Col>
				<Col m={1}>
					<div className="view-recipe-right right">
						<SaveStatus saved={recipe.saved} onSaveRecipe={this.handleSaveRecipe.bind(this)} _id={recipe.id}/>
					</div>
				</Col>
			</Row>
			<Row>
				<Col m={11}>
					<div className="image-recipe">
					    <MediaBox className="center-align" src={recipe.imageUrl} height="450"/>
					</div>
				</Col>	
			</Row>

			<Row>
				<Col m={11} className="p-l-20 m-t-10 semi-black readable">
					<b>Description</b>
					<p>
						{recipe.description}
					</p>
				</Col>
				<Col m={11} className="p-l-20 m-t-10 semi-black readable">
					<b>List of Ingredients</b>
					<p>
						{ingredients}
					</p>
				</Col>

				<Col m={11} className="p-l-20 m-t-10 semi-black readable">
					<b>Instructions</b>
					<p>
						{instructions}
					</p>
				</Col>
			</Row>
			
			</div>
		);
	}
}

export default ViewRecipe;
