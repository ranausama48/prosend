import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from "react-router-dom";
import Header from '../Home/header/header'
import Slider from '../Home/Slider/slider'
import Shop from './Shop/services2'
import Banner from './Banner/onlineshop'
import ContactFooter from './Contactfooter/contact'
import Shopproduct from '../ShopOnline/shopproduct'
class Home extends Component {
  render() {
    return (
        <div>
            
                <Header />
                <Slider/>
               <Shopproduct/>
                <Banner/>
                <ContactFooter/>
                
                {/* <Slider2 />
                <Services/>
                <Shop/>
                <Contact/> */}
     </div>
    )
  }
}

export default Home
