import React, { Component } from 'react';
import { Row, Col, Icon } from 'react-materialize';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';

import Home from './components/home';
import Edit from './components/edit';
import Saved from './components/saved';
import AddNew from './components/addnew';
import { Recipes } from './data/recipes.js';

class SideBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
        recipes : Recipes
      }
  }

  render() {
    return (
          <div className="side-bar">
            <Row>
              <Link to={`/`} >
              <Col s={12} className='center-align white-smoke m-t-30'>
                <Icon className="white-smoke cookbook-icon hand-hover">restaurant_menu</Icon>
              </Col>
              </Link>
            </Row>
            <Row>
              <hr className="hr-below-icon"/>
            </Row>
            <Row>
              <Link to={`/`}  >
              <Col s={12} className='center-align white-smoke m-t-20 hand-hover'>
                <Icon className="white-smoke cookbook-icon">view_list</Icon>
                <p className="white-smoke m-b-0 m-t-0">Menu</p>
              </Col>
              </Link>
            </Row>
            <Row>
              <Link to={`/edit`}  >
              <Col s={12} className='center-align white-smoke m-t-20 hand-hover'>
                <Icon className="white-smoke cookbook-icon">mode_edit</Icon>
                <p className="white-smoke m-b-0 m-t-0">Edit</p>
              </Col>
              </Link>
            </Row>
            <Row>
              <Link to={`/saved`}  >
              <Col s={12} className='center-align white-smoke m-t-20 hand-hover'>
                <Icon className="white-smoke cookbook-icon">bookmark_border</Icon>
                <p className="white-smoke m-b-0 m-t-0">Saved</p>
              </Col>
              </Link>
            </Row>
            <Row>
              <Link to={`/add-new`}  >
              <Col s={12} className='center-align white-smoke m-t-20 hand-hover'>
                <Icon className="white-smoke cookbook-icon">add_circle_outline</Icon>
                <p className="white-smoke m-b-0 m-t-0">Add New</p>
              </Col>
              </Link>
            </Row>
          </div>
      	
    );
  }
}

export default SideBar;
