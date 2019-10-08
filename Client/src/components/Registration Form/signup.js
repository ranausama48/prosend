import React, { Component } from 'react'
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

export class SignUp extends Component {
    // login=()=>{
    //     this.props.history.push('/newtodo');
    // }
//     check=()=>{
//         var e = document.getElementById("email").value;
//         var p = document.getElementById("password").value;

//         var tt =localStorage.getItem("title");
// var le =localStorage.getItem("email");
// var lp =localStorage.getItem("pass");

// return (e === le) ? <AddNewTodo/> : (p > lp) ? <AddNewTodo/> : <div></div>; 

     
// if(e===le && p===lp){
// this.login()
// }
// else{
//     alert("Oh Sorry! Your Email or Password is not correct");
// }
    //}
  render() {
    return (
    <div>  
        <Row>
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
                            <FormControl margin="normal" required="required" fullWidth>
                                <InputLabel htmlFor="email">Name</InputLabel>
                                <Input id="name" name="name" autoComplete="email" autoFocus required />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Email Address</InputLabel>
                                <Input id="email" name="email" autoComplete="email" autoFocus  />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input type="text" name="password"  id="password" autoComplete="current-password" onChange={this.validatePassword}   />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Conferm Password</InputLabel>
                                <Input name="password" type="password" id="cpassword" autoComplete="current-password"  />
                            </FormControl>
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <Button
                                fullWidth
                                variant="contained"
                                color="secondary"
                                onClick={this.check}
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
export default SignUp
