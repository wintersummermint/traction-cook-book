import React, { Component } from 'react';
import { Row, Col, Icon, MediaBox, Button, Input } from 'react-materialize';
import Rating from './rating';
import uuidv4 from 'uuid/v4';
import SaveStatus from './savestatus';

class EditRecipe extends Component {

	constructor(props) {
		super(props);

		this.state = {
			recipe : props.recipe
		}
	}

	handleSaveRecipe(recipe_id) {
		this.props.setHandleSaveRecipe(recipe_id);
	}

	titleHandler(evt) {
		let recipe = this.state.recipe;
		recipe.title = evt.target.value;

		this.setState({ recipe });
	}

	descriptionHandler(evt) {
		let recipe = this.state.recipe;
		recipe.description = evt.target.value;

		this.setState({ recipe });
	}

	onDeleteIngredient(evt,index) {
		let recipe = this.state.recipe;
		recipe.ingredients.splice(index, 1);
		console.log('deleted?');
		this.setState({ recipe });
	}

	onDeleteInstruction(evt,index) {
		let recipe = this.state.recipe;
		recipe.instructions.splice(index, 1);

		this.setState({ recipe });
	}

	render() {

		let recipe = this.state.recipe;
		let is_saved = recipe.saved ? <Icon className="saved-icon medium hand-hover">bookmark</Icon> : <Icon className="saved-icon medium hand-hover">bookmark_border</Icon>;
		let ingredients = recipe.ingredients.map((ingredient, index)=> {
			return <div>• <input key={uuidv4()} defaultValue={ingredient} className="w-80 edit-ingredient-field m-b-0" /><Icon className="bitter-sweet hand-hover" onClick={(evt)=>this.onDeleteIngredient(evt, index)}>close</Icon></div>;
		});

		let instructions = recipe.instructions.map((instruction,index)=> {
			return <div>{index + 1}. <textarea key={uuidv4()} defaultValue={instruction} className="w-80 edit-textarea m-b-0"></textarea><Icon className="bitter-sweet hand-hover" onClick={(evt)=>this.onDeleteInstruction(evt, index)}>close</Icon></div>;
		});

		return (
			<div>
				<Row className="m-t-30">
					<Col m={10}>
						<Input className="my-pink edit-field-title" defaultValue={recipe.title} validate onChange={(evt) => this.titleHandler(evt)}/><Icon className="my-pink edit-icon-title">edit</Icon>
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
						<b>Description <Icon className="description-edit-icon">edit</Icon></b>
						<textarea rows="6" defaultValue={recipe.description} className="edit-textarea" onChange={(evt)=>this.descriptionHandler(evt)}></textarea>
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
				<Row>
					<Button className="inline m-t-10 bg-d-juan waves-effect waves-light">Save Edit Recipe</Button>
					<Button className="inline m-t-10 bg-bitter-sweet waves-effect waves-light m-l-20">Delete Recipe</Button>
				</Row>	
			</div>
		);
	}
}

export default EditRecipe;
