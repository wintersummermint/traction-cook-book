import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Icon, MediaBox, Button } from 'react-materialize';
import Rating from './rating';
import uuidv4 from 'uuid/v4';
import SaveStatus from './savestatus';
import Comments from './comments';
import moment from 'moment';
import Datetime from 'react-datetime';

var jstz = require('jstimezonedetect');
var icalToolkit = require('ical-toolkit');

class ViewRecipe extends Component {

	constructor(props) {
		super(props);

		this.state = {
			recipe : props.recipe,
			recipeSched : moment()._d
		}
	}

	triggerExportCal() {

		var date = new Date();
		//Create a builder 
		var builder = icalToolkit.createIcsFileBuilder();
		builder.spacers = true; //Add space in ICS file, better human reading. Default: true 
		builder.NEWLINE_CHAR = '\r\n'; //Newline char to use. 
		builder.throwError = false; //If true throws errors, else returns error when you do .toString() to generate the file contents. 
		builder.ignoreTZIDMismatch = true; //If TZID is invalid, ignore or not to ignore! 
		builder.calname = `Recipe Schedules`;
		builder.timezone = jstz.determine().name();
		builder.tzid = jstz.determine().name();
		builder.method = 'REQUEST';

		builder.events.push({
		 
		  //Event start time, Required: type Date() 
		  start: moment(this.state.recipeSched)._d,
		  
		  //Event end time, Required: type Date() 
		  end: moment(this.state.recipeSched).add(1,'hours')._d,
		  
		  //transp. Will add TRANSP:OPAQUE to block calendar. 
		  transp: 'OPAQUE',
		  
		  //Event summary, Required: type String 
		  summary: `Cook ${this.state.recipe.title}!`,
		  description: `This is a scheduled cooking alert : ${this.state.recipe.description}`,

		  //Creation timestamp, Optional. 
		  stamp: new Date(),

		  //What to do on addition 
		  method: 'PUBLISH',
		  
		  //Status of event 
		  status: 'CONFIRMED',
		  
		  //Url for event on core application, Optional. 
		  url: window.location.href
		});

		var icsFileContent = builder.toString();
		console.log(builder);
		window.open("data:text/calendar;charset=utf8," + escape(icsFileContent));
	}

	handleSaveRecipe(recipe_id) {
		this.props.setHandleSaveRecipe(recipe_id);
	}

	dateTimeChanged(date) {
		this.setState({ recipeSched : moment(date)._d });
	}

	render() {

		let recipe = this.state.recipe;
		let is_saved = recipe.saved ? <Icon className="saved-icon medium hand-hover">bookmark</Icon> : <Icon className="saved-icon medium hand-hover">bookmark_border</Icon>;
		let ingredients = recipe.ingredients.map((ingredient)=> {
			return <p key={uuidv4()}>{`• ${ingredient}`}</p>;
		});

		let instructions = recipe.instructions.map((instruction,index)=> {
			return <p key={uuidv4()}>{`${index + 1}. ${instruction}`}</p>;
		});

		return (
			<div>
			<Row className="m-t-30">
				<Col m={10}>
					<h4 className="my-pink p-l-10">{recipe.title}</h4>
					<div className="p-l-0">
						<Rating rating={recipe.rating}/>
					</div>
				</Col>
				<Col m={1}>
					<div className="view-recipe-right right">
						<SaveStatus saved={recipe.saved} onSaveRecipe={this.handleSaveRecipe.bind(this)} _id={recipe.id}/>
					</div>
				</Col>
			</Row>
			<Row>
				<Col m={11}>
					<div className="image-recipe">
					    <MediaBox className="center-align" src={recipe.imageUrl} height="450"/>
					</div>
				</Col>	
			</Row>

			<Row>
				<Col m={11} className="p-l-20 m-t-10 semi-black readable">
					<b>Description</b>
					<p>
						{recipe.description}
					</p>
				</Col>
				<Col m={11} className="p-l-20 m-t-10 semi-black readable">
					<b>List of Ingredients</b>
					<p>
						{ingredients}
					</p>
				</Col>

				<Col m={11} className="p-l-20 m-t-10 semi-black readable">
					<b>Instructions</b>
					<p>
						{instructions}
					</p>
				</Col>
			</Row>
			<Row className="m-t-60 m-b-60">
				<Col m={11} s={11}>
					<Col m={11} s={11}>
						<Link to={`/edit-recipe/${recipe.id}`}><Button className="inline m-t-10 bg-d-juan waves-effect waves-light">Edit Recipe</Button></Link>
						<h5 className="m-t-60">Schedule Cooking</h5>
						<Datetime defaultValue={moment().format('YYYY-MM-DD HH:mm a')} onChange={(evt)=>this.dateTimeChanged(evt)} dateFormat="YYYY-MM-DD"/>
						<Button className="inline m-t-10 bg-d-juan waves-effect waves-light" onClick={(evt)=>{this.triggerExportCal(evt)}}>Export Calendar Schedule</Button>
					</Col>
				</Col>
				
			</Row>	
			<Comments recipe={recipe}/>
			</div>
		);
	}
}

export default ViewRecipe;
