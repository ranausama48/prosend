import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


import { Jumbotron, Button } from 'reactstrap';
import { BrowserRouter, Route, Link } from "react-router-dom";
import './services.css';
import {Animated} from "react-animated-css";


import serives5 from '../Shop/serives5.jpg'

import { MdContentCut } from "react-icons/md";
import { FaBriefcaseMedical } from "react-icons/fa";
import { FaSyringe } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaCogs } from "react-icons/fa";


function FullWidthGrid(props) {
  return (
    <div>
      <div className="container">

        <Grid container spacing={24}>
            <Grid item xs={12}>
                <div className="jumbotron text-center" style={{marginTop:'50px'}}>
                    <h1 className="display-4" style={{backgroundColor:'white !important',color:'#800505 '}}>Our Services</h1>
                    <div className="hr"></div>
                </div>
            </Grid>
            <Grid item lg={4} md={6} xs={12} sm={12}>
            
                <div className="g1" style={{wordSpacing:'0.2em'}}>          
                        <img  width="100%" height="200px" src={serives5} alt=""/>
                        <div className="g1_more" ><span className="icons_custome" className="icons_custome"><FaBriefcaseMedical/></span></div>     
                    <div>
                        <h3 className="text-center services_heading">Medical Facilities</h3>
                    </div>
                    <div>
                        <p className="text-center services_paragrap">
                            We offer the most amazing services for your Pet's health and High quality professionals ready to take care of your best friend.
                        </p>
                    </div>
                </div>
            
            </Grid>
      </Grid>

      </div>
    </div>
  );
}

export default FullWidthGrid;