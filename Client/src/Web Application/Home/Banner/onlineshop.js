import React, { Component } from 'react'
import './onlineshop.css';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import { BrowserRouter, Route, Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

class Shop extends Component {
  render() {
    return (
      <div>
        <div id="back_img">
            <div id="news_letter" style={{backgroundColor:'transperant',width:'100%',}}>
            <div className="text-center container">
            <Grid container spacing={24}>
                <Grid item lg={3} md={3} sm={2} xs={12}></Grid>
                <Grid item lg={6} md={6} sm={8} xs={12}>
                    <h2 style={{color:'white',margin:'20px 0px',fontSize:'30px'}}>Discover our Pet Shop and Services</h2>
                    <p style={{color:'white',lineHeight:'2em',fontSize:'15px',marginBottom:'30px'}}>Contact or learn more about us and make your pet happy in your visit to our Shop and discover all our amazing products and services to make your pet very healthy and active with a lot of energy this winter lorem ipsum ipsuet dolor.</p>
                    <div style={{marginBottom:'20px'}}>
                        <Link className="btn btn-lg btn-warning" to="/contactus">
                            Contact Us
                        </Link>
                        {/* <Link className="btn btn-lg btn-warning" to="/aboutus">
                            More About Us
                        </Link> */}
                        {/* <Button className="btn btn-lg btn-warning" onClick={this.handleClickOpen}>
                            Slide in alert dialog
                        </Button> */}
                        
                    </div>
                </Grid>
                <Grid item lg={3} md={3} sm={2} xs={12}></Grid>
            </Grid>     
            </div>   
            </div>
        </div>
      </div>
    )
  }
}

export default Shop
