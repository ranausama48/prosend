import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import { BrowserRouter, Route, Link } from "react-router-dom";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

import Paper from '@material-ui/core/Paper';
import './style.css'
class LeftSidebar extends Component {
  render() {
    return (
      <div>
            
               
                    <SideNav className="sidebar_custom">
                        <SideNav.Toggle style={{width:'100px',fontSize:'30px'}} />
                                <SideNav.Nav defaultSelected="home">

                                    <Link to="/adminHome" style={{color:'white'}}>
                                        <NavItem >
                                            
                                                <NavIcon>
                                                    <i className="fa fa-fw fa-home" style={{ fontSize: '4.75em' }} />
                                                </NavIcon>
                                                <NavText>
                                                  <h5 style={{textAlign:'center'}}>Home</h5>
                                                </NavText>
                                            
                                        </NavItem>
                                    </Link>
                                    <hr/>

                                    <Link to="/addpost" style={{color:'white'}}>
                                        <NavItem >
                                            <NavIcon >
                                                <i className="fa fa-fw fa-pencil-square-o" style={{ fontSize: '4.75em'}} />
                                            </NavIcon>
                                            <NavText>
                                                  <h5 style={{textAlign:'center'}}>Add</h5>
                                                </NavText>
                                        </NavItem>
                                    </Link>
                                    <hr/>
                                    <Link to="/Accountlist" style={{color:'white'}}>
                                        <NavItem >
                                            <NavIcon >
                                                <i className="fa fa-fw fa-desktop" style={{ fontSize: '4.75em'}} />
                                            </NavIcon>
                                            <NavText>
                                                  <h5 style={{textAlign:'center'}}>Accounts List</h5>
                                                </NavText>
                                        </NavItem>
                                    </Link>
                                    <hr/>
                                    <Link to="/buyerRequest" style={{color:'white'}}>
                                        <NavItem >
                                            <NavIcon >
                                                <i className="fa fa-fw fa-desktop" style={{ fontSize: '4.75em'}} />
                                            </NavIcon>
                                            <NavText>
                                                  <h5 style={{textAlign:'center'}}>Buyer request</h5>
                                                </NavText>
                                        </NavItem>
                                    </Link>
                                </SideNav.Nav>
                        </SideNav>  
               
               
            
      </div>
    )
  }
}

export default LeftSidebar;
