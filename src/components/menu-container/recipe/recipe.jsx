import React, { Component } from 'react';
import { Card, CardTitle } from 'react-materialize';

class Recipe extends Component {
	render() {
		return (
			<Card className='small'
				header={<CardTitle image='https://react-materialize.github.io/img/office.jpg'>Card Title</CardTitle>}
				actions={[<a href='/'>This is a Link</a>]}>
				I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
			</Card>
		);
	}
}

export default Recipe;
