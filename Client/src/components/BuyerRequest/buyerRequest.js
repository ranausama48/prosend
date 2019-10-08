import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import {connect} from 'react-redux'
import { BrowserRouter, Route, Link } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import LeftSidebar from '../Leftsidebar/Leftsidebar';
import {getBuyerRequest} from '../../Redux/Actions/DogProduct/buyer/getBuyerrequest'
import AdminHome from '../AdminHome/Adminhome'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

import Paper from '@material-ui/core/Paper';

class AccountList extends Component {

    componentWillMount(){
        console.log("Will Mount is execute");
        this.props.getBuyerRequest();
    }

    // onSubmit = e => {
    //     e.preventDefault();
    // };


    
  render() {
    return (
      <div >
        <AdminHome/>
        
        <Grid lg={11} xs={11}>
            <div style={{marginTop:'49px',textAlign:'center'}}>
            <h3>Buyer request</h3>
            {console.log(this.props.Buyer_p_request)}
            <div style={{display:'flex',justifyContent:'center'}}>
            <table  style={{display:'flex',justifyContent:'center'}} className="table table-responsive table-border table-striped">  
                <tbody>
                    <tr>
                        <td>sr</td>
                        <td>Buyer Name</td>
                        <td>Buyer Address</td>
                        <td>Buyer Contact Number</td>
                        {/* <td>Action</td> */}
                    </tr>
                    {
                        this.props.Buyer_p_request.map((value,index)=>{
                            return(
                                <tr key={index}>
                                    <td>{index +1}</td>
                                    <td>{value.Buyer_Name}</td>
                                    <td>{value.Address}</td>
                                    <td>{value.Contactnumber}</td>
                                    {/* <td>
                                        <button className="btn btn-sm btn-danger" onClick={()=>this.deltehandler(value._id)}>Delete</button>
                                        <button className="btn btn-sm btn-success" onClick={()=>this.editHandler(value._id)}>Edit</button>
                                    </td> */}
                                </tr>
                            )
                        })
                    }
                </tbody>
                
            </table>
            </div>
            </div>  
        </Grid>
      </div>
    )
  }
}

const mapstatetopro  = (store)=>{
    console.log('store',store);
    
    return{
            //  username : store.username,
            //  email : store.email,
            //  contactnumber: store.contactnumber
            //data: store.dataFromdatabase
            Buyer_p_request:store.buyerReducer.BuyerDetailfromdatabase
            
        }
        
        
        
}
export default connect(mapstatetopro,{getBuyerRequest})(AccountList);
