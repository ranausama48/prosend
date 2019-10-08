import React, { Component } from 'react'
import {connect} from 'react-redux';
import Header from '../Home/header/header'
import {Row, Col } from 'react-bootstrap';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';


import {signupdata} from '../../Redux/Actions/signupinsertaction'
class LoginForm extends Component {

    constructor(props)
    {
        super(props);
        this.state={
            usersignupdata:[],
            username:'',
            useremail:'',
            userpassword:''
          }
    }

    changeHandler = (e)=>{
        var name = e.target.name;
        var value= e.target.value;
        console.log(name);
        console.log(value);
        this.setState({[name]:value});
    }
    submit = ()=>{
        var prev = this.state.usersignupdata;
        prev.push({
            username:this.state.username,
            useremail:this.state.useremail,
            userpassword:this.state.userpassword
        })
        console.log(prev)
    }
    submitHandler = ()=>{
        this.submit();
       // const {studentname,studentpassword,studentaddress} = this.state;
        //var data = {studentname,studentpassword,studentaddress}
    var data = {
      username:this.state.username,
      useremail:this.state.useremail,
      userpassword:this.state.userpassword
    }
        this.props.signupdata(data);
        console.log(data);
        //this.props.history.push('/list')
      }
  render() {
    return (
      <div>
        
<Header/>
        
<Row style={{marginTop:'70px'}}>
            <Col xs={2} sm={1} lg={4} md={1}  style={{backgroundColor:''}}></Col>
            <Col xs={8} sm={10} lg={4} md={10}  style={{backgroundColor:''}}>
   {/*signin*/}
               <main  style={{height:"480px"}}>
                     <CssBaseline   />
                    <Paper style={{marginTop:'30px'}}>            
                        {/* <Avatar style={{marginLeft:"10px", marginTop:"10px"}}>
                            <LockOutlinedIcon />
                        </Avatar> */}
                        <div style={{  display:"flex",justifyContent:'center'}}>
                            <Typography component="h1" variant="h5" style={{  display:"flex"}}>
                                <h2 style={{textAlign:'center'}}>Sign Up</h2>
                            </Typography>
                        </div>    
                        <div style={{padding:'50px'}}>
                            <FormControl margin="normal"  fullWidth>
                                <InputLabel htmlFor="username">Name</InputLabel>
                                <Input 
                                    onChange={this.changeHandler} 
                                    type="text" 
                                    id="username" 
                                    name="username" 
                                    autoComplete="username" 
                                    autoFocus  />
                            </FormControl>
                            <FormControl margin="normal"  fullWidth>
                                <InputLabel htmlFor="useremail">Email Address</InputLabel>
                                <Input 
                                    onChange={this.changeHandler} 
                                    type="email" 
                                    id="useremail" 
                                    name="useremail" 
                                    autoComplete="email" 
                                    autoFocus  />
                            </FormControl>
                            <FormControl margin="normal"  fullWidth>
                                <InputLabel htmlFor="userpassword">Password</InputLabel>
                                <Input 
                                onChange={this.changeHandler} 
                                type="password" 
                                id="userpassword"
                                name="userpassword"  
                                autoComplete="current-password"
                                autoFocus/>
                            </FormControl>
                            {/* <FormControl margin="normal"  fullWidth>
                                <InputLabel htmlFor="password">Conferm Password</InputLabel>
                                <Input onChange={this.changeHandler} name="confirmpassword" type="password" id="confirmpassword" autoComplete="current-password"  />
                            </FormControl> */}
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <Button
                                onClick={this.submitHandler}
                                fullWidth
                                variant="contained"
                                color="secondary"
                               
                            >
                                Sign UP
                            </Button>
                        </div>   
                    </Paper>
                </main>
            </Col>
            <Col  xs={2} sm={1} lg={4} md={10}  style={{backgroundColor:''}}> </Col>
        </Row>   
 


        
      </div>
    )
  }
}


export default connect(null,{signupdata})(LoginForm);
