import React, { Component } from 'react';
import { Row, Col, Input, Button, Collection, CollectionItem, MediaBox, Badge, Icon } from 'react-materialize';
import { withRouter } from 'react-router';
import $ from 'jquery';
import uuidv4 from 'uuid/v4';
import randomID from 'random-id';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const InitialState = {
	newRecipe : {},
	ingredient : '',
	instruction : '',
	ingredients : [],
	instructions : []
}

class AddNew extends Component {

	componentWillMount() {
		this.resetForm();
		console.log('intial state', this.state);
	}
	constructor(props) {
		super(props);
		this.state = InitialState;
		this.baseState = this.state;
	}

	resetForm() {
	    this.setState({
	        ingredients: []
	    }, function() { // called by React after the state is updated
	        this.setState({
	          ingredients: []
	        });
	    });

	    this.setState({
	        instructions: []
	    }, function() { // called by React after the state is updated
	        this.setState({
	          instructions: []
	        });
	    });


	    this.setState({
	    	newRecipe : {}
	    }, function() { // called by React after the state is updated
	    	this.setState({
	    	  newRecipe: {}
	    	});
	    });

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
		let imgPattern = new RegExp("/(https?:\/\/.*\.(?:png|jpg))/igm");
		let imgUrl = evt.target.value;

		newRecipe.imageUrl = imgUrl;
		this.setState({ newRecipe });

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
		if (this.state.ingredient !== "") {
			ingredients.push(this.state.ingredient);

			this.setState({ ingredients });
			this.setState({ ingredient : '' });
		}
		
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

		if (this.state.instruction !== "") {
			// Add Instruction
			instructions.push(this.state.instruction);

			this.setState({ instructions });
			this.setState({ instruction : '' });
		}
		
	}

	deleteIngredient(evt, index) {
		let ingredients = this.state.ingredients;
		ingredients.splice(index, 1);
		this.setState({ ingredients });
	}

	deleteInstruction(evt, index) {
		let instructions = this.state.instructions;
		instructions.splice(index, 1);
		this.setState({ instructions });
	}

	

	saveNewRecipe() {

		const { history: { push } } = this.props;
		let newRecipe = this.state.newRecipe;
		newRecipe.ingredients = this.state.ingredients;
		newRecipe.instructions = this.state.instructions;
		newRecipe.rating = 5; // Default Rating for now
		newRecipe.saved = false;
		newRecipe.comments = [];
		newRecipe.id = randomID() + '1';

		this.setState({ newRecipe });
		console.log('newRecipe new', this.state.newRecipe);

		let validated = this.validateForms(newRecipe);

		if (validated) {
			this.props.recipes.push(this.state.newRecipe);
			
			toast.success('Recipe Added Succesfully!');

			let self = this;
			// Redirect After successful save
			setTimeout(()=>{
				// Clear Array of Instuctions and Ingredients
				self.setState({ ingredients : []}, ()=>{
					self.setState({ instructions : []}, ()=>{
						push(`/`);
					});
				});
				
				
			},4000);

			
		}

		
	}

	validateForms(newRecipe) {

		if (newRecipe && newRecipe.title == undefined || newRecipe && newRecipe.title == "") {
			toast.error("Recipe Should have a Name!");
			return false;
		}

		if (newRecipe && newRecipe.description == undefined || newRecipe.description == "" || newRecipe.description.length > 70) {
			toast.error("Description should be less than 70 characters");
			return false;
		}

		if (newRecipe && newRecipe.imageUrl == undefined || newRecipe && newRecipe.imageUrl.match(/\.(jpeg|jpg|gif|png)$/) == null) {
			toast.error("Image URL is invalid");
			return false;
		}

		if (newRecipe && newRecipe.ingredients == undefined || newRecipe && newRecipe.ingredients.length == 0) {
			toast.error("Recipe should have Ingredients!");
			return false;
		}

		if (newRecipe && newRecipe.instructions == undefined || newRecipe && newRecipe.instructions.length == 0) {
			toast.error("Recipe should have Instructions!");
			return false;
		}

		return true;
	}

	render() {

		const Ingredients = this.state.ingredients.map((ingredient, index)=>{
			return <CollectionItem className="left w-100" key={uuidv4()}>
						<div className="left w-80">
						{ingredient}
						</div><Badge  className="right" onClick={ (evt) => this.deleteIngredient(evt, index)} ><Icon className="hand-hover">close</Icon></Badge>
					</CollectionItem>
		});

		const Instructions = this.state.instructions.map((instruction, index)=>{
			return <CollectionItem className="left w-100" key={uuidv4()}>
					<div className="left w-80">
					{index + 1}. {instruction} 
					</div><Badge  className="right"><Icon className="hand-hover" onClick={ (evt) => this.deleteInstruction(evt, index)}>close</Icon></Badge>	
					</CollectionItem>
		});

		return (
			<div className="container">
				<div className="center-align m-t-20">
					<h4 className="my-pink">Add Recipe</h4>
				</div>
				<Row className="m-t-20 m-b-20">
					<Col m={12} s={12} className="center-align">
						<img src={this.state.newRecipe.imageUrl ? this.state.newRecipe.imageUrl : '' } className="center-align" height={(this.state.newRecipe.imageUrl ? '450' : '')}/>
					</Col>
				</Row>
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
				<ToastContainer 
					position="top-right"
					autoClose={5000}
					hideProgressBar={true}
					newestOnTop={false}
					closeOnClick
					pauseOnHover
				/>
			</div>
		);
	}
}

export default withRouter(AddNew);
