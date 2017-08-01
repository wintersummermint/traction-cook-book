import React, { Component } from 'react';
import { Row, Col, Icon, MediaBox, Button, Input } from 'react-materialize';
import Rating from './rating';
import uuidv4 from 'uuid/v4';
import SaveStatus from './savestatus';
import { ToastContainer, toast } from 'react-toastify';


class EditRecipe extends Component {

	constructor(props) {
		super(props);

		this.state = {
			recipe : props.recipe,
			instruction : '',
			ingredient : ''
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

		this.setState({ recipe });
		toast.success('Recipe Edit Saved');
	}

	onDeleteInstruction(evt,index) {
		let recipe = this.state.recipe;
		recipe.instructions.splice(index, 1);

		this.setState({ recipe });
		toast.success('Recipe Edit Saved');
	}

	editIngriendtHandler(evt, index) {
		let recipe = this.state.recipe;
		recipe.ingredients[index] = evt.target.value;

		this.setState({ recipe });
		toast.success('Recipe Edit Saved');
	}

	editInstructionHandler(evt, index) {
		let recipe = this.state.recipe;
		recipe.instructions[index] = evt.target.value;

		this.setState({ recipe });
		toast.success('Recipe Edit Saved');
	}

	saveChanges(evt) {
		console.log('recipe saved :', this.state.recipe);
		toast.success('Recipe Edit Saved');
	}

	render() {

		let recipe = this.state.recipe;
		let is_saved = recipe.saved ? <Icon className="saved-icon medium hand-hover">bookmark</Icon> : <Icon className="saved-icon medium hand-hover">bookmark_border</Icon>;
		let ingredients = recipe.ingredients.map((ingredient, index)=> {
			return <Col s={12} m={12} key={uuidv4()} >• <input defaultValue={ingredient} className="w-80 edit-ingredient-field m-b-0" onBlur={(evt)=>this.editIngriendtHandler(evt, index)}/><div onClick={(evt)=>this.onDeleteIngredient(evt, index)} className="right m-t-10"><Icon className="bitter-sweet hand-hover small">close</Icon></div></Col>;
		});

		let instructions = recipe.instructions.map((instruction,index)=> {
			return <Col s={12} m={12} key={uuidv4()} ><h3 className="semi-black inline">{index + 1}</h3> <textarea defaultValue={instruction} className="w-80 edit-textarea m-b-0" onBlur={(evt)=>this.editInstructionHandler(evt, index)}></textarea><div onClick={(evt)=>this.onDeleteInstruction(evt, index)} className="right"><Icon className="bitter-sweet hand-hover">close</Icon></div></Col>;
		});

		return (
			<div>
				<Row className="m-t-30">
					<Col m={10}>
						<Input className="my-pink edit-field-title" defaultValue={recipe.title} validate onChange={(evt) => this.titleHandler(evt)} onBlur={(evt) => this.saveChanges(evt)}/><Icon className="my-pink edit-icon-title">edit</Icon>
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
						<textarea rows="6" defaultValue={recipe.description} className="edit-textarea m-t-10" onBlur={(evt) => this.saveChanges(evt)} onChange={(evt)=>this.descriptionHandler(evt)}></textarea>
					</Col>
					<Col m={11} className="p-l-20 m-t-40 semi-black readable">
						<b>List of Ingredients</b>
						<p>
							{ingredients}
						</p>
					</Col>

					<Col m={11} className="p-l-20 m-t-40 semi-black readable">
						<b>Instructions</b>
						<p>
							{instructions}
						</p>
					</Col>
				</Row>	
				<Row className="m-t-60 m-b-60">
					<Col m={11} s={11}>
						<Col m={11} s={11}>
							{/* <Button className="inline m-t-10 bg-d-juan waves-effect waves-light" onClick={(evt)=>this.saveEditedRecipe(evt)}>Save Edit Recipe</Button> Use Auto save for now */}
							<Button className="inline m-t-10 bg-bitter-sweet waves-effect waves-light m-l-20 right">Delete Recipe</Button>
						</Col>
					</Col>
					
				</Row>	
				<ToastContainer 
					position="top-right"
					autoClose={1000}
					hideProgressBar={true}
					newestOnTop={false}
					closeOnClick
					pauseOnHover
				/>
			</div>
		);
	}
}

export default EditRecipe;
