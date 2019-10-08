import React, { Component } from 'react'
import './header.css';
import logo10 from '../header/icon/tr2.ico';
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
        
        <Navbar className="navbar_custom" style={{position:'fixed',top:'0',width:'100%',zIndex:'999'}} light expand="md">
          <div className="container">
          <NavbarBrand href="/" className="navbar_items"><img style={{width:'60px',height:'50px'}} src={logo10} alt="logo"/>Vom Wild Wolf House </NavbarBrand>
          <NavbarToggler className="navbar_items" onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="/">
                    <NavLink className="navbar_items">Home</NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/shoponline">
                    <NavLink className="navbar_items">Shop</NavLink>
                </Link>
              </NavItem>
              {/* <NavItem>
                  <Link to="/gallery">
                        <NavLink className="navbar_items">Gallery</NavLink>
                  </Link>
              </NavItem> */}
              <NavItem>
                <Link to="/contactus">
                        <NavLink className="navbar_items">Contact Us</NavLink>
                </Link>
              </NavItem>
               {/* <NavItem>
                  <Link to="/login">
                        <NavLink className="navbar_items">Login</NavLink>
                  </Link>
              </NavItem> */}
              <NavItem>
                  <Link to="/admin_panel">
                        <NavLink className="navbar_items">Admin panel</NavLink>
                  </Link>
              </NavItem>
              {/* <NavItem style={{backgroundColor:'white',textAlign:'left'}}>
                <Link to="/contactus">
                        <NavLink className="navbar_items" ><i className="fa fa-cart-plus" style={{color:'#800505',fontSize:'20px'}}> 0 Item(s)</i></NavLink>
                </Link>
              </NavItem> */}
              {/* <NavItem>
                <NavLink href="/components/" className="navbar_items">About Us</NavLink>
              </NavItem> */}
              {/* <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}
            </Nav>
          </Collapse>
          </div>
        </Navbar>

      </div>
    )
  }
}

export default Header
