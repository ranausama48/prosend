import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';

import { Container, Row, Col } from 'react-grid-system';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Header from '../Home/header/header'
import ContactFooter from '../Home/Contactfooter/contact'
import './style.css'
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
class ContactPage extends Component {
  render() {
    return (
        <div>
          <Header/>
          <Row>
            <Col id="services_bg" lg={12} md={12} sm={12} xs={12}>
                <h1 className="text-center" style={{color:'white',marginTop:'50px',fontSize:'70px'}}>
                    Contact Us
                </h1>
                <div className="text-center" style={{color:'white',marginTop:'100px'}}>
                    <span style={{padding:'20px'}}>
                        <Link to="/" id="home_link" style={{padding:'5px',textDecoration:'none',color:'white'}}>
                            <b>HOME</b>
                        </Link>
                        <span style={{padding:'5px'}}>
                            <i class="fas fa-chevron-right"></i>
                        </span>
                        <span style={{padding:'5px',textDecoration:'none',color:'#CECECE'}}>
                                <b>CONTACT US</b>
                        </span>
                    </span>
                </div>
            </Col>
        </Row>
        <div style={{margin:'60px 0px'}}>
            <div className="container">
                <Grid container spacing={24}>
                    <Grid item lg={5} xs={12} className="contat_item text-center">
                        <h1 style={{fontWeight:'bold'}}>Send Us a Message</h1>
                    
                            <h4 style={{marginTop:'30px',fontWeight:'bold'}}>
                            Vomwildwolfhouse@gmail.com
                        </h4>
                    </Grid>
                    <Grid item lg={2} >
                    
                    </Grid>
                    <Grid item lg={5} xs={12} className="contat_item text-center">
                        <h1 style={{fontWeight:'bold'}}>
                            Visit our Location
                        </h1>
                        <h4 style={{marginTop:'30px',fontWeight:'bold'}}>
                            Faisal Shaheed Road Taxila
                        </h4>
                    </Grid>
                    <Grid item lg={5} xs={12} className="contat_item text-center">
                        <h1 style={{fontWeight:'bold'}}>
                            Call us today
                        </h1>
                        <h4 style={{marginTop:'30px',fontWeight:'bold'}}>
                                +923115573606
                        </h4>
                    </Grid>
                    <Grid item lg={2} xs={12} >
                    
                    </Grid>
                    <Grid item lg={5} xs={12} className="contat_item text-center">
                        <h1 style={{fontWeight:'bold'}}>
                            Follow us on Social Media
                        </h1>
                        <h4 style={{marginTop:'30px',fontWeight:'bold'}}>
                            
                            <a target="_blank" href="https://www.facebook.com/Vom-Wild-Wolf-House-444549682947403/?ref=br_rs"><span className="footer_icons"><FaFacebookSquare/></span></a>
                            <a target="_blank" href="https://www.youtube.com/channel/UC_JV8HHg0bgo4lsY7b5o-EQ/featured"><span className="footer_icons"><FaYoutubeSquare/></span></a>
                            {/* <a target="_blank" href="https://www.facebook.com/usama.asif.9406"><span className="footer_icons"><FaInstagram/></span></a>
                            <a target="_blank" href="https://www.facebook.com/usama.asif.9406"><span className="footer_icons"><FaLinkedin/></span></a> */}
                        </h4>
                    </Grid>
                </Grid>
            </div>
        </div>
          <ContactFooter/>
      </div>
    )
  }
}

export default ContactPage
