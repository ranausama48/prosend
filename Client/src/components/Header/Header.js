import React, { Component } from 'react'
import './style.css';

import { FaPowerOff } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";

import { BrowserRouter, Route, Link } from "react-router-dom";

import {Animated} from "react-animated-css";

import {
  
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import { Icon } from '@material-ui/core';

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        
        <Navbar className="navbar_custom" style={{width:'100%',zIndex:'999'}} light expand="md">
          <div className="container">
          <NavbarBrand href="/" className="navbar_items">Vom Wild Wolf House </NavbarBrand>
          <NavbarToggler className="navbar_items" onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="/">
                    <NavLink className="navbar_items">User Profile  <FaBriefcase/> </NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/services">
                    <NavLink className="navbar_items">Logout  <FaPowerOff/> </NavLink>
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
          </div>
        </Navbar>

      </div>
    )
  }
}

export default Header
