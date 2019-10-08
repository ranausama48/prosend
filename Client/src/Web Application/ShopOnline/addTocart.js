import React, { Component } from 'react'
import { Container, Row, Col } from 'react-grid-system';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Header from '../Home/header/header'
import {connect} from 'react-redux';
import Shopproduct from './shopproduct'
import ContactFooter from '../Home/Contactfooter/contact'
import TextField from '@material-ui/core/TextField';
import {dogbuyerinsertrequest} from '../../Redux/Actions/DogProduct/buyer/buyerAction'
import Grid from '@material-ui/core/Grid';
import bg from './Images/bg2.png'
import './style.css'
class ShopOnline extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            buyerdetail:[],
           

          }
    }
    changeBuyer = (event)=>{
        var name = event.target.name;
        var value= event.target.value;
        console.log(name);
        console.log(value);
        this.setState({[name]:value});
    }
    submit = ()=>{
        var prev = this.state.buyerdetail;
        prev.push({
            Buyer_Name:this.state.Buyer_Name,
            Address:this.state.Address,
            Contactnumber:this.state.Contactnumber,
        })
        console.log(prev)
    }

    clickHandler = ()=>{
        this.submit();
       // const {studentname,studentpassword,studentAddress} = this.state;
        //var data = {studentname,studentpassword,studentAddress}
    var buyerData = {
        Buyer_Name:this.state.Buyer_Name,
        Address:this.state.Address,
        Contactnumber:this.state.Contactnumber
    }
        this.props.dogbuyerinsertrequest(buyerData);
        console.log(buyerData);
        //this.props.history.push('/list')
      }

  render() {
      console.log(this.state)
    return (
      <div>
        <Header/>
        <Row>
            <Col id="services_bg" lg={12} md={12} sm={12} xs={12}>
            <h1 className="text-center" style={{color:'white',marginTop:'50px',fontSize:'70px'}}>
                Add To Cart
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
            <div>
            <div style={{marginTop:'49px',textAlign:'center'}}>
            <h1>Buyer Details</h1>
              
                    <TextField
                        id="Buyer_Name"
                        onChange={this.changeBuyer}
                        name="Buyer_Name"
                        label="Buyer Name"                
                       margin="normal"
                       required
                       style={{width:'50%'}}
                    />
                    <br/>
                    <TextField
                        id="Address"
                        onChange={this.changeBuyer}
                        name="Address"
                        label="Address"                
                       margin="normal"
                       required
                       style={{width:'50%',}}
                    />
                   <br/>
                    <TextField
                        id="Contactnumber"
                        onChange={this.changeBuyer}
                        name="Contactnumber"
                        label="Contact number"                
                       margin="normal"
                       required
                       style={{width:'50%',}}
                    />
                   <br/>                  
                   <br/>
                    <button onClick={this.clickHandler} className="btn btn-success" style={{width:'50%'}}>
                        Offer Submit
                    </button>
                  
            </div>  
            </div>
        <ContactFooter/>
      </div>
    )
  }
}
export default connect(null,{dogbuyerinsertrequest})(ShopOnline);

