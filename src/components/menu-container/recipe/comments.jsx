import React, { Component } from 'react';
import { Row, Col, Icon, Collection, CollectionItem, Button, Input } from 'react-materialize';
import uuidv4 from 'uuid/v4';
import $ from 'jquery';

class Comments extends Component {
	constructor(props) {
		super(props);
		this.state = {
			recipe : this.props.recipe,
			newRecipe : {},
			comments : [],
			comment : {}
		}
	}
	addComment(evt) {
		let recipe = this.state.recipe;
		recipe.comments.push({
			"user" : "Default",
			"comment" : evt.target.value
		});

		this.setState({ recipe });
	}
	submitComment(evt) {
		if(evt.key == 'Enter'){
		    this.addCommentHandler(evt);
		}
	}
	commentHandler(evt) {
		if (evt.target.value !== "") {
			let comment = { "user" : "Default" , "comment" : evt.target.value};
			this.setState({ comment });
		}
	}

	addCommentHandler() {
		let recipe = this.state.recipe;
		let comments = this.state.comments;

		if (this.state.comment !== "") {

			$('.comment-field').val('');
			
			recipe.comments.push(this.state.comment);
			this.setState({ comment : {} });
			this.setState({ recipe : recipe });
		}
		
	}

	onDeleteComment(evt,index) {
		let recipe = this.state.recipe;
		recipe.comments.splice(index, 1);

		this.setState({ recipe });
	}

	render() {
		let recipe = this.state.recipe;
		let comments = recipe.comments.map((comment, index)=> {
			return <CollectionItem key={uuidv4()} className="w-100"><b className="semi-black">{comment.user}</b> {comment.comment} <div onClick={(evt)=>this.onDeleteComment(evt,index)} className="right inline"><Icon className="bitter-sweet hand-hover">close</Icon></div></CollectionItem>;
		});

		return (
			<div>
			<Row>
				<Col m={11} className="p-l-20 m-t-40 semi-black readable bg-white comments-section p-t-20 p-b-20">
					<b>Comments</b>
					<Collection>
						{comments}
					</Collection>
				</Col>
				<Col m={11} s={11}>
					<Input s={10} className="comment-field" placeholder="Add Comment" onChange={(evt) =>  this.commentHandler(evt)} onKeyPress={evt => this.submitComment(evt)} />
					<Button className="btn-block inline col s2 m-t-10 bg-d-juan waves-effect waves-light" onClick={this.addCommentHandler.bind(this)} >Add</Button>
				</Col>
			</Row>
			</div>
		);
	}
}

export default Comments;
