import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { Navbar, Nav, Image, Form, FormControl, Button, NavDropdown} from 'react-bootstrap';
import Login from '../Login/Login';
import { FaSearch } from 'react-icons/fa';
import './NavBar.css';
import Home from '../Home/Home';

import { generatePath } from "react-router";

function NavBar() {

  var models= ["Space", "Subspace", "Survey", "Section", "Question", "Answer"]

  function createDropDown_Routes(){
    var dropDownRows= []
    var routesRows= []
    for (var model of models){
      var href= generatePath("/Add/:entity", {
        entity: model
      });
      var str= "Add_".concat(model)
      dropDownRows.push(<NavDropdown.Item href={href}>{model}</NavDropdown.Item>)
      routesRows.push(
        <Route exact path={href}>
            <Login type= {str}/>
        </Route>
      )
    }
    return [dropDownRows, routesRows]
  }
    var rows= createDropDown_Routes()
    var dropDownRows= rows[0]
    var routesRows= rows[1]
    return (
        <Router>
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="/home">
                    <Image className="img" src="/octoLogo.png" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="mr-auto">
                      <NavDropdown title="Add" id="basic-nav-dropdown">
                        {dropDownRows}
                      </NavDropdown>
                        <Nav.Link href="/BrowseSpaces" className="links">Browse spaces</Nav.Link>
                        <Nav.Link href="/" className="links">Teams</Nav.Link>
                        <Nav.Link href="/" className="links">Profile</Nav.Link>
                    </Nav>
                    <Nav className="justify-content-end" >
                        <Nav.Link href="/" className="links">Help</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <Switch>
                // add home path
                <Route exact path="/home" >
                    <Home/>
                </Route>
                // add BrowseSpace path
                <Route exact path="/BrowseSpaces">
                    <Login type= "Spaces" />
                </Route>
                // add components detail paths
                <Route exact path="/Spaces/:spaceId">
                          <Login type= "SpaceDetail"/>
                </Route>
                // add Add_component path
                {routesRows}
                <Route path="*" status={404}/>
            </Switch>
        </Router>
    )
}

export default NavBar
