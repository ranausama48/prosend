import React, { Component } from 'react'
import { Container, Row, Col } from 'react-grid-system';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Header from '../Home/header/header'
import Shopproduct from './shopproduct'
import ContactFooter from '../Home/Contactfooter/contact'
import Grid from '@material-ui/core/Grid';
import bg from './Images/bg2.png'
import './style.css'
class ShopOnline extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Row>
            <Col id="services_bg" lg={12} md={12} sm={12} xs={12}>
            <h1 className="text-center" style={{color:'white',marginTop:'50px',fontSize:'70px'}}>
                OUR SHOP
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
                            <b>SHOP</b>
                    </span>
                
                </span>
            </div>
            </Col>
        </Row>
        <Shopproduct/>
        <div style={{backgroundColor:'#FBF4DE',color:'#675444'}}>
            <div className="container" style={{marginTop:'30px'}}>
                <Grid container spacing={24}>
                    <Grid item lg={5} md={12}>
                        <img width="400px" src={bg} alt=""/>
                    </Grid>
                    <Grid item lg={7} md={12}>
                        <h1 style={{marginTop:'40px',fontStyle:'italic'}}>Contact us today!</h1>
                        <h4 style={{marginTop:'40px'}}>
                            Maecenas at arcu risus. Donec commodo sodales, scelerisque laoreet nibh hendrerit id.
                            In aliquet magna nec lobortis maximus.
                            Etiam rhoncus leo a dolor placerat, nec elementum ipsum convall.
                        </h4>
                        <h4 style={{marginTop:'40px'}}>
                            <b>Etiam rhoncus leo a dolor placerat, nec elementum ipsum convall Maecenas at arcu risus scelerisque laoree.</b>
                        </h4>
                        <Link to="/contactus" style={{margin:'40px 0px',borderRadius:'355px 45px 225px 75px/15px 225px 15px 255px',backgroundColor:'#800505',color:'white'}} className="btn btn-lg">
                            Contact Us
                        </Link>
                        
                    </Grid>
                </Grid>
            </div>
        </div>
        <ContactFooter/>
      </div>
    )
  }
}

export default ShopOnline
