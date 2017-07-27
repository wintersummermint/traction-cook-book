import React, { Component } from 'react';
import { Button, Icon } from 'react-materialize';

class Home extends Component {
	render() {
		return (
			<div className='dynamic-container'>
				<Button waves='light'>
					<Icon>thumb_up</Icon>
				</Button>
			</div>
		);
	}
}

export default Home;
