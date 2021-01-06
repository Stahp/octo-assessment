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

function NavBar() {
    return (
        <Router>
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="/home">
                    <Image className="img" src="octoLogo.png" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="mr-auto">
                      <NavDropdown title="Add" id="basic-nav-dropdown">
                        <NavDropdown.Item href="">Spaces</NavDropdown.Item>
                        <NavDropdown.Item href="">Subspace</NavDropdown.Item>
                        <NavDropdown.Item href="">Survey</NavDropdown.Item>
                        <NavDropdown.Item href="">Section</NavDropdown.Item>
                        <NavDropdown.Item href="">Question</NavDropdown.Item>
                        <NavDropdown.Item href="">Answer</NavDropdown.Item>
                      </NavDropdown>
                        <Nav.Link href="/login" className="links">Browse spaces</Nav.Link>
                        <Nav.Link href="/" className="links">Teams</Nav.Link>
                        <Nav.Link href="/" className="links">Profile</Nav.Link>
                    </Nav>
                    <Nav className="justify-content-end" >
                        <Nav.Link href="/" className="links">Help</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <Switch>
                <Route path="/home" >
                    <Home></Home>
                </Route>
                <Route path="/login" >
                    <Login></Login>
                </Route>
            </Switch>
        </Router>
    )
}

export default NavBar
