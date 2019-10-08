import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import {connect} from 'react-redux'
import { BrowserRouter, Route, Link } from "react-router-dom";
import axios from 'axios'
import { FaBriefcaseMedical } from "react-icons/fa";
import {getdogproducts} from '../../Redux/Actions/DogProduct/getaction'
import serives5 from '../ShopOnline/Images/serives5.jpg'


import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'

class Shopproduct extends Component {

  
    componentWillMount(){
        console.log("Will Mount is execute");
        this.props.getdogproducts();
    }
  render() {
    return (
        <div>
        <div className="container">
        
            <Grid container spacing={24}>
                <Grid item xs={12}>
                    <div className="jumbotron text-center" style={{marginTop:'50px'}}>
                        <h1 className="display-4" style={{backgroundColor:'white !important',color:'#800505 '}}>Our Shop</h1>
                        <div className="hr"></div>
                    </div>
                </Grid>
                {console.log(this.props.dogproductdatabase)}
                {                
                    this.props.dogproductdatabase.map((value,index)=>{
                        return(
                        <Grid item lg={4} md={6} xs={12} sm={12} key={index}>
                            <Card style={{height:'400px'}}>
                                    
                                    <img  width="100%" height="200px" src={serives5} alt=""/>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {value.dogname}
                                        </Typography>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Rs {value.dogprice}
                                        </Typography>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {value.ownerlocation}
                                        </Typography>
                                    </CardContent>
                            
                                <CardActions style={{display:'flex', justifyContent:'center'}}>
                                    {/* <Button size="larg" className="btn btn-danger">
                                       Add to cart <i className="fa fa-cart-plus"></i> 
                                    </Button> */}
                                    <Link to="/addtocart" className="btn btn-danger" type="Link" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                                         Add to cart <i className="fa fa-cart-plus"></i> 
                                    </Link>
                                    {/* Modal */}
                                    
                                        
                                    
                                    {/* <Button size="larg" className="btn btn-danger">
                                        Detail ...
                                    </Button> */}
                                </CardActions>
                            </Card>
                        </Grid>
                        )
                    })
                }
                
            </Grid>
        </div>
    </div>
    )
  }
}
const mapstatetopro  = (store)=>{
    console.log('store',store.dogproductreducer);
    
    return{
           
            dogproductdatabase:store.dogproductreducer.dogproductfromdatabase
            
        }
        
        
        
}
export default connect(mapstatetopro,{getdogproducts} )(Shopproduct);
