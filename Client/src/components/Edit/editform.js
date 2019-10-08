import React, { Component } from 'react'
import {connect} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { BrowserRouter, Route, Link } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import LeftSidebar from '../Leftsidebar/Leftsidebar';
import AdminHome from '../AdminHome/Adminhome'
import {dogproductinsertrequest} from '../../Redux/Actions/DogProduct/insertaction'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

import Paper from '@material-ui/core/Paper';
import './style.css'
class OfferForm extends Component {

    constructor(props)
    {
        super(props);
        this.state={
            dogproduct:[],
            dogname:'',
            dogtype:'',
            dogprice:'',
            ownerlocation:'',
            dogdetail:''

          }
    }

    changeAddproduct = (event)=>{
        var name = event.target.name;
        var value= event.target.value;
        console.log(name);
        console.log(value);
        this.setState({[name]:value});
    }
    productsubmit = ()=>{
        var prev = this.state.dogproduct;
        prev.push({
            dogname:this.state.dogname,
            dogtype:this.state.dogtype,
            dogprice:this.state.dogprice,
            ownerlocation:this.ownerlocation,
            dogdetail:this.state.dogdetail
        })
        console.log(prev)
    }

    clickHandler = ()=>{
        this.productsubmit();
       // const {studentname,studentpassword,studentaddress} = this.state;
        //var data = {studentname,studentpassword,studentaddress}
    var dogdata = {
        dogname:this.state.dogname,
        dogtype:this.state.dogtype,
        dogprice:this.state.dogprice,
        ownerlocation:this.state.ownerlocation,
        dogdetail:this.state.dogdetail
    }
        this.props.dogproductinsertrequest(dogdata);
        console.log(dogdata);
        //this.props.history.push('/list')
      }

    
  render() {
    return (
      <div >
        <AdminHome/>
        <Grid lg={11} xs={11}>
            <div style={{marginTop:'49px',textAlign:'center'}}>
            <h1>Add Product</h1>
              
                    <TextField
                        id="dogname"
                        onChange={this.changeAddproduct}
                        name="dogname"
                        label="Dog Name"                
                       margin="normal"
                       required
                       style={{width:'50%'}}
                    />
                    <br/>
                    <TextField
                        id="dogtype"
                        onChange={this.changeAddproduct}
                        name="dogtype"
                        label="Dog Type"                
                       margin="normal"
                       required
                       style={{width:'50%',}}
                    />
                   <br/>
                    <TextField
                        id="dogprice"
                        onChange={this.changeAddproduct}
                        name="dogprice"
                        label="Dog Price"                
                       margin="normal"
                       required
                       style={{width:'50%',}}
                    />
                   <br/>
                    <TextField
                        id="location"
                        onChange={this.changeAddproduct}
                        label="Location"
                        type="text" 
                         name = "ownerlocation"         
                       margin="normal"
                       required
                       style={{width:'50%',}}
                    />
                   <br/>
                   {/* <TextField
                        id="dogfile"
                        type="file"              
                       margin="normal"
                       required
                       style={{width:'50%',}}
                    />
                   <br/> */}
                   <TextField
                        label="Dogdetail"
                        onChange={this.changeAddproduct}
                        name="dogdetail"
                        required
                        style={{width:'50%',}}
                        multiline
                        rows="4"
                        margin="normal"
                        variant="outlined"
                    />
                    <br/>
                    <button onClick={this.clickHandler} className="btn btn-success" style={{width:'50%'}}>
                        Offer Submit
                    </button>
                  
            </div>  
        </Grid>
      </div>
    )
  }
}

export default connect(null,{dogproductinsertrequest})(OfferForm);
