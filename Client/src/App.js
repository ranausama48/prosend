import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

// import Header from './components/Header/Header'
// import LeftSidebar from './components/Leftsidebar/Leftsidebar'
// import Home from './components/Home/home'
// import Editform from './components/Edit/editform'
// import LoginForm from './components/Login Form/login'
// import SignUp from './components/Registration Form/signup'
import './App.css';
import {Provider} from 'react-redux';
import store from './Redux/Store/store'
import Home from './Web Application/Home/Home'
import ShopOnline from './Web Application/ShopOnline/Shoponline'
import ContactUspage from './Web Application/Contact Us/contactuspage'
import Login from './Web Application/Login/login'
import SignUp from './Web Application/SignUp/signUp'
import AdminHome from './components/Home/home'
import Editform from './components/Edit/editform'
import AccountList from './components/AccountsList/accountslist'
import AddtoCart from './Web Application/ShopOnline/addTocart'
import BuyerRequest from './components/BuyerRequest/buyerRequest'
//import AdminHome from './components/Home/home'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store ={ store }>
          {/* <Header/>
          
          <Route exact path='/' component={Home}/>
          <Route  path='/addpost' component={Editform}/>
          <Route  path='/login' component={LoginForm}/>
          <Route  path='/createaccount' component={SignUp}/> */}
          
            {/* WebApplication Routes  */}

            <Route path='/' exact component={Home}/>
            <Route path='/shoponline' component={ShopOnline}/>
            <Route path='/contactus' component={ContactUspage}/>
            <Route path='/login' component={Login}/>
            <Route path='/signup' component={SignUp}/>
            <Route exact path='/admin_panel' component={AdminHome}/>
            <Route  path='/addpost' component={Editform}/>
            <Route  path='/Accountlist' component={AccountList}/>
            <Route  path='/adminHome' component={AdminHome}/>
            <Route  path='/addtocart' component={AddtoCart}/>
            <Route  path='/buyerRequest' component={BuyerRequest}/>
            
          
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
