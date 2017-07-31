import React, { Component } from 'react';
import { Row, Col, Input, Button, Collection, CollectionItem } from 'react-materialize';
import $ from 'jquery';

class AddNew extends Component {
	constructor(props) {
		super(props);
		this.state = {
			newRecipe : {}
		}
	}

	recipeNameHandler(evt) {
		let newRecipe = this.state.newRecipe;
		let title = evt.target.value;
		if (title) newRecipe.title = title;
		this.setState({ newRecipe });
	}

	saveNewRecipe() {
		// TODO : validation of data
		this.props.recipes.push(this.state.newRecipe);
	}

	render() {
		console.log('recipes :', this.props.recipes);
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
						<div className="input-field col s12">
				          <textarea placeholder="Description" className="materialize-textarea" rows="6"></textarea>
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
						<Input s={10} placeholder="Add Ingredient" validate />
						<Button className="btn-block inline col s2 m-t-10 bg-d-juan waves-effect waves-light">Add</Button>
					</Col>

					<Col m={12} s={12}>
						<Collection>
							<CollectionItem>Alvin</CollectionItem>
							<CollectionItem>Alvin</CollectionItem>
							<CollectionItem>Alvin</CollectionItem>
							<CollectionItem>Alvin</CollectionItem>
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
						<Input s={10} placeholder="Add Instruction" validate />
						<Button className="btn-block inline col s2 m-t-10 bg-d-juan waves-effect waves-light">Add</Button>
					</Col>

					<Col m={12} s={12}>
						<Collection>
							<CollectionItem>Alvin</CollectionItem>
							<CollectionItem>Alvin</CollectionItem>
							<CollectionItem>Alvin</CollectionItem>
							<CollectionItem>Alvin</CollectionItem>
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
