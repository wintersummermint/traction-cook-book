import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';

class Home extends Component {
	render() {
		return (
			<div className='dynamic-container'>
				<Row>
					<Col s={12}>
						<h3>My Cook Book</h3>
					</Col>
				</Row>
			</div>
		);
	}
}

export default Home;
