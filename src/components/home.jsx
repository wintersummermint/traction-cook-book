import React, { Component } from 'react';
import { Row, Col, Button, Icon } from 'react-materialize'

class Home extends Component {
	render() {
		return (
			<div>
				<Row>
					<Col s={11} className='grid-example'>
						<Button waves='light'>
							<Icon>thumb_up</Icon>
						</Button>
					</Col>
				</Row>
			</div>
		);
	}
}

export default Home;
