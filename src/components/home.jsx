import React, { Component } from 'react';
import { Input, Row, Col } from 'react-materialize';
import MenuContainer from './menu-container/menu-container';

class Home extends Component {

	homeHandleSaveRecipe(recipe_id) {
		this.props.appHandleSaveRecipe(recipe_id);
	}

	render() {

		return (
			<Row className="m-t-20">
				<Col s={12}>
					<Col s={9}>
						<h4 className="p-l-10 semi-black">Table of Contents</h4>
					</Col>
					<Col s={3}>
						<Input placeholder="Search" s={12} />
					</Col>
					
					<MenuContainer recipes={this.props.recipes} parentHandleSaveRecipe={this.homeHandleSaveRecipe.bind(this)}/>
				</Col>
			</Row>
		);
	}
}

export default Home;
