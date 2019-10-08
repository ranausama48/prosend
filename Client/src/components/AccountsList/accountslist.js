import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import {connect} from 'react-redux'
import { BrowserRouter, Route, Link } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import LeftSidebar from '../Leftsidebar/Leftsidebar';
import {getsignupdata} from '../../Redux/Actions/getsignupdataaction'
import AdminHome from '../AdminHome/Adminhome'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

import Paper from '@material-ui/core/Paper';

class AccountList extends Component {

    componentWillMount(){
        console.log("Will Mount is execute");
        this.props.getsignupdata();
    }

    // onSubmit = e => {
    //     e.preventDefault();
    // };


    
  render() {
    return (
      <div >
        <AdminHome/>
        //{console.log(this.props.databaseuser)}
        <Grid lg={11} xs={11}>
            <div style={{marginTop:'49px',textAlign:'center'}}>
            <h3>Account List</h3>
            {console.log(this.props.databaseuser)}
            <div style={{display:'flex',justifyContent:'center'}}>
            <table style={{display:'flex',justifyContent:'center'}} className="table table-responsive table-border table-striped">  
                <tbody>
                    <tr>
                        <td>sr</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Password</td>
                        {/* <td>Action</td> */}
                    </tr>
                    {
                        this.props.databaseuser.map((value,index)=>{
                            return(
                                <tr key={index}>
                                    <td>{index +1}</td>
                                    <td>{value.username}</td>
                                    <td>{value.useremail}</td>
                                    <td>{value.userpassword}</td>
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
            databaseuser:store.signupdata.dataFromdatabase
            
        }
        
        
        
}
export default connect(mapstatetopro,{getsignupdata} )(AccountList);
