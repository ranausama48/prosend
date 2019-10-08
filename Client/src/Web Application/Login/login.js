import React, { Component } from 'react'

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

export class LoginForm extends Component {
  render() {
    return (
      <div>
        
<Header/>
        
    <Row style={{marginTop:'50px'}}>
        <Col xs={2} sm={1} lg={4} md={1}  style={{backgroundColor:''}}></Col>
        <Col xs={8} sm={10} lg={4} md={10}  style={{backgroundColor:''}}>
            <br/>
                <main  style={{height:"480px"}}>
                    <CssBaseline   />
                    <br/>
                    <Paper >
                        <div style={{  display:"flex",justifyContent:'center'}}>
                            {/* <Avatar style={{marginLeft:"10px", marginTop:"30px"}}>
                                <LockOutlinedIcon />
                            </Avatar> */}
                            <Typography component="h1" variant="h5" >
                                    <h2 style={{textAlign:'center'}}>Sign in</h2>
                            </Typography>
                        </div>
                        <br/>
                        <div style={{padding:'50px'}}>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Email Address</InputLabel>
                                <Input id="email" name="email" autoComplete="email" autoFocus />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input name="password" type="password" id="password" autoComplete="current-password" />
                            </FormControl>
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="secondary"
                                onClick={this.check}
                            >
                                Sign in
                            </Button>
                            <br/>
                            <br/>
                            <Link to="/signup">
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                            >
                                Create an account
                            </Button>
                        </Link>
                        </div>
                    </Paper>
                </main>
        </Col>
        <Col  xs={2} sm={1} lg={4} md={1}  style={{backgroundColor:''}}></Col>
    </Row>
 


        
      </div>
    )
  }
}

export default LoginForm
