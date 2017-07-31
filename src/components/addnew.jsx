import React, { Component } from 'react';
import { Row, Col, Input, Button, Collection, CollectionItem } from 'react-materialize';
import { withRouter } from 'react-router';
import $ from 'jquery';
import uuidv4 from 'uuid/v4';

const InitialState = {
	newRecipe : {},
	ingredient : '',
	instruction : '',
	ingredients : [],
	instructions : []
}

class AddNew extends Component {
	constructor(props) {
		super(props);
		this.state = InitialState;
	}

	recipeNameHandler(evt) {
		let newRecipe = this.state.newRecipe;
		let title = evt.target.value;
		if (title) newRecipe.title = title;
		this.setState({ newRecipe });
	}

	recipeDescriptionHandler(evt) {
		let newRecipe = this.state.newRecipe;
		let desc = evt.target.value
		if (desc) newRecipe.description = desc;
		this.setState({ newRecipe });
	}

	imageUrlHandler(evt) {
		let newRecipe = this.state.newRecipe;
		let imgPattern = new RegExp("^(https?|ftp)://.*(jpeg|png|gif|bmp)");
		let imgUrl = evt.target.value;

		if (imgPattern.test(imgUrl)) {
			newRecipe.imageUrl = imgUrl;
			this.setState({ newRecipe });
		} else {
			console.log('Error : Image URL invalid');
		}

	}

	ingredientHandler(evt) {
		if (evt.target.value !== "") {
			let ingredient = evt.target.value;
			this.setState({ ingredient });
		}
	}

	instructionHandler(evt) {;
		if (evt.target.value !== "") {
			let instruction = evt.target.value;
			this.setState({ instruction });
		}
	}

	addIngredientHandler() {
		let newRecipe = this.state.newRecipe;
		let ingredients = this.state.ingredients;
		
		// Add Ingredient
		ingredients.push(this.state.ingredient);

		this.setState({ ingredients });
		this.setState({ ingredient : '' });
		
	}

	submitIngredient(evt) {
		if(evt.key == 'Enter'){
		    this.addIngredientHandler(evt);
		}
	}

	submitInstruction(evt) {
		if(evt.key == 'Enter'){
		    this.addInstructionHandler(evt);
		}
	}
 
	addInstructionHandler() {
		let newRecipe = this.state.newRecipe;
		let instructions = this.state.instructions;

		// Add Instruction
		instructions.push(this.state.instruction);

		this.setState({ instructions });
		this.setState({ instruction : '' });
	}

	saveNewRecipe() {
		let newRecipe = this.state.newRecipe;
		newRecipe.ingredients = this.state.ingredients;
		newRecipe.instructions = this.state.instructions;
		newRecipe.rating = 5; // Default Rating for now
		newRecipe.saved = false;
		newRecipe.id = uuidv4();

		this.setState({ newRecipe });

		// TODO : validation of data
		this.props.recipes.push(this.state.newRecipe);
		console.log('this.props.recipes',this.props.recipes);
		//this.props.history.push(`/view-recipe/${newRecipe.id}`);

	}

	render() {
		const Ingredients = this.state.ingredients.map((ingredient)=>{
			return <CollectionItem key={uuidv4()}>{ingredient}</CollectionItem>
		});

		const Instructions = this.state.instructions.map((instruction, index)=>{
			return <CollectionItem key={uuidv4()}>{index + 1}. {instruction}</CollectionItem>
		});

		return (
			<div className="container">
				<div className="center-align m-t-20">
					<h4 className="my-pink">Add Recipe</h4>
				</div>
				
				<Row className="m-t-40">
					<Col m={12} s={12}>
						<Input s={12} placeholder="Recipe Name" validate onChange={evt =>  this.recipeNameHandler(evt)} />
					</Col>
					<Col m={12} s={12}>
						<Input s={12} placeholder="Image URL" validate onChange={evt =>  this.imageUrlHandler(evt)} />
					</Col>
					<Col m={12} s={12}>
						<div className="input-field col s12">
				          <textarea placeholder="Description" className="materialize-textarea" rows="6" onChange={evt =>  this.recipeDescriptionHandler(evt)}></textarea>
				        </div>
					</Col>
				</Row>

				<Row>
					<Col m={12} s={12}>
						<div className="p-l-10 p-r-10">
							<h5 className="semi-black"><small>Ingredients</small></h5>
						</div>
					</Col>
					<Col m={12} s={12}>
						<Input s={10} placeholder="Add Ingredient" value={this.state.ingredient} onChange={evt =>  this.ingredientHandler(evt)} onKeyPress={evt => this.submitIngredient(evt)}/>
						<Button className="btn-block inline col s2 m-t-10 bg-d-juan waves-effect waves-light" onClick={this.addIngredientHandler.bind(this)} >Add</Button>
					</Col>

					<Col m={12} s={12}>
						<Collection>
							{Ingredients}
						</Collection>
					</Col>
				</Row>

				<Row>
					<Col m={12} s={12}>
						<div className="p-l-10 p-r-10">
							<h5 className="semi-black"><small>Instruction steps</small></h5>


						</div>
					</Col>
					<Col m={12} s={12}>
						<Input s={10} placeholder="Add Instruction" value={this.state.instruction} onChange={evt =>  this.instructionHandler(evt)} onKeyPress={evt => this.submitInstruction(evt)} />
						<Button className="btn-block inline col s2 m-t-10 bg-d-juan waves-effect waves-light" onClick={this.addInstructionHandler.bind(this)}>Add</Button>
					</Col>

					<Col m={12} s={12}>
						<Collection>
							{Instructions}
						</Collection>
					</Col>
				</Row>
				<Row>
					<Col m={12} s={12}>
						<div className="right">
							<Button className="inline m-t-10 bg-d-juan waves-effect waves-light" onClick={this.saveNewRecipe.bind(this)}>Save New Recipe</Button>
						</div>
					</Col>
				</Row>
			</div>
		);
	}
}

export default AddNew;
