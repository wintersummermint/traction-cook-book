import React, { Component } from 'react';
import { Row, Col, Input, Button } from 'react-materialize';
import $ from 'jquery';

class AddNew extends Component {

	render() {
		console.log('recipes :', this.props.recipes);
		return (
			<div className="container">
				<div className="center-align m-t-20">
					<h4 className="my-pink">Add Recipe</h4>
				</div>
				
				<Row className="m-t-40">
					<Col m={12} s={12}>
						<Input s={12} placeholder="Recipe Name" validate />
					</Col>
					<Col m={12} s={12}>
						<div className="input-field col s12">
				          <textarea placeholder="Description" className="materialize-textarea" rows="6"></textarea>
				        </div>
					</Col>
				</Row>

				<Row>
					<Col m={12} s={12}>
						<div className="p-l-15 p-r-15">
							<h5 className="semi-black"><small>Ingredients</small></h5>


						</div>
					</Col>
					<Col m={12} s={12}>
						<Input s={10} placeholder="Recipe Name" validate />
						<Button className="btn-block inline col s2 m-t-10">Add</Button>
					</Col>
				</Row>
			</div>
		);
	}
}

export default AddNew;
