import React, { Component } from 'react';
import { Input, Row, Col, Icon } from 'react-materialize';
import MenuContainer from './menu-container/menu-container';
import _ from 'underscore';


class Edit extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			recipes : this.props.recipes,
			editable : true
		}
	}

	homeHandleSaveRecipe(recipe_id) {
		this.props.appHandleSaveRecipe(recipe_id);
	}

	searchHandler(evt) {
		console.log('trigger searchhandler');
		if (evt.target.value != "") {

			let filteredRecipe = _.filter(this.state.recipes, (recipe)=> {
				return recipe.title.toLowerCase().includes((evt.target.value).toLowerCase());
			});

			if (filteredRecipe.length > 0) {
				this.setState({ recipes : filteredRecipe });
			}

		} else {
			this.setState({ recipes : this.props.recipes });
		}
	}

	render() {

		return (
			<Row className="m-t-20">
				<Col s={12}>
					<Col s={9}>
						<h4 className="p-l-10 my-pink">Edit Recipes <Icon>edit</Icon></h4>
					</Col>
					<Col s={3}>
						<Input placeholder="Search" s={12} onChange={evt =>  this.searchHandler(evt)}/>
					</Col>
					
					<MenuContainer recipes={this.state.recipes} parentHandleSaveRecipe={this.homeHandleSaveRecipe.bind(this)} isEditable={this.state.editable}/>
				</Col>
			</Row>
		);
	}
}

export default Edit;
