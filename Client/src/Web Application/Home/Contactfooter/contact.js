import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import logo from '../Contactfooter/icon/tr2.ico';
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneSquare } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import './contact.css'
class Contact extends Component {
  render() {
    return (
      <div>
            <div style={{backgroundColor:'#dee2e6'}}>
                <div className="container-fluid">
                        <Grid container spacing={24} >
                            <Grid item lg={4} md={4} sm={12} xs={12}>
                                    <div className="text-center">
                                        <h3  className="text-center" style={{marginTop:'20px',border:'2px solid white' ,fontStyle:'italic',padding:'15px',color:'white',backgroundColor:'#800505'}}>VOM WILD WOLF HOUSE</h3>
                                        <img style={{width:'50%'}} src={logo} alt=""/>     
                                    </div>
                            </Grid>
                            
                            <Grid item lg={4} md={4} sm={12} xs={12} style={{marginTop:'20px'}}>
                                <div>
                                    <h3  className="text-center" style={{border:'2px solid white' ,fontStyle:'italic',padding:'15px',color:'white',backgroundColor:'#800505'}}>Contact <b>info</b></h3>
                                    <ul style={{listStyle:'none',marginTop:'20px'}} >
                                        <li className="footer_content">
                                        <span className="footer_icons"><FaMapMarkerAlt/></span> Faisal Shaheed Road Taxila
                                        </li>
                                        <li className="footer_content">
                                           <span className="footer_icons"><FaPhoneSquare/></span> +923115573606
                                        </li>
                                        <li className="footer_content">
                                        <span className="footer_icons"><FaEnvelope/></span> Vomwildwolfhouse@gmail.com
                                        </li>
                                    </ul>
                                </div>
                            </Grid>
                            <Grid item lg={4} md={4} sm={12} xs={12} style={{marginTop:'20px'}}>
                                <div>
                                    <h3  className="text-center" style={{border:'2px solid white',fontStyle:'italic',padding:'15px',color:'white',backgroundColor:'#800505'}}>Short Links</h3>
                                        <ul style={{listStyle:'none',marginTop:'20px'}}>
                                            <li className="footer_content">
                                                <a target="_blank" href="https://www.facebook.com/Vom-Wild-Wolf-House-444549682947403/?ref=br_rs">
                                                    <span className="footer_icons"><FaFacebookSquare/></span> facebook
                                                </a>
                                            </li>
                                            <li className="footer_content">
                                                <a target="_blank" href="https://www.youtube.com/channel/UC_JV8HHg0bgo4lsY7b5o-EQ/featured">
                                                    <span className="footer_icons"><FaYoutubeSquare/></span> youtube
                                                </a>
                                            </li>
                                            {/* <li className="footer_content">
                                                <a target="_blank" href="https://www.facebook.com/usama.asif.9406">
                                                    <span className="footer_icons"><FaInstagram/></span> instagram
                                                </a>
                                            </li>
                                            <li className="footer_content">
                                                <a target="_blank" href="https://www.facebook.com/usama.asif.9406">
                                                    <span className="footer_icons"><FaLinkedin/></span> Linkdin
                                                </a>
                                            </li> */}
                                        </ul>
                                </div>
                            </Grid>
                        </Grid>
                </div>
            </div>
      </div>
    )
  }
}

export default Contact
