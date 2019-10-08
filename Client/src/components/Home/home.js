import React, { Component } from 'react'
import LeftSidebar from '../Leftsidebar/Leftsidebar';
import Editform from '../Edit/editform';
import {connect} from 'react-redux'
import {getdogproducts} from '../../Redux/Actions/DogProduct/getaction'
import {deltestddata} from '../../Redux/Actions/DogProduct/deleteAction'
import AdminHome from '../AdminHome/Adminhome'
import Grid from '@material-ui/core/Grid';

class Home extends Component {
  componentWillMount(){
    console.log("Will Mount is execute");
    this.props.getdogproducts();
}
deltehandler =(_id)=>{
  var P_idtodelte = {productidtodelte:_id};
  console.log(P_idtodelte);
  this.props.deltestddata(P_idtodelte);
}
// editHandler = (id)=>{
//   var idtoedit  = id;
//   console.log(idtoedit);
//   this.props.editrequestgen(idtoedit);
//   this.props.history.push('/edit')
// }
  render() {
    return (
      <div>
          <AdminHome/>
        {/* {console.log(this.props.databaseuser)} */}
        <Grid className="container" lg={11} xs={11}>
            <div style={{marginTop:'49px',textAlign:'center'}}>
            <h3>Dog Product List</h3>
            {console.log(this.props.dogproductdatabase)}
            <div style={{display:'flex',justifyContent:'center'}}>
            <table style={{display:'flex',justifyContent:'center'}} className="table table-responsive table-border table-striped">  
                <tbody>
                    <tr>
                        <td>sr</td>
                        <td>Dog Name</td>
                        <td>Dog Type</td>
                        <td>Dog Price</td>
                        <td>Dog Owner Location</td>
                        <td>Dog detail</td>
                        <td>Action</td>
                        {/* <td>Action</td> */}
                    </tr>
                    {
                        this.props.dogproductdatabase.map((value,index)=>{
                            return(
                                <tr key={index}>
                                    <td>{index +1}</td>
                                    <td>{value.dogname}</td>
                                    <td>{value.dogtype}</td>
                                    <td>{value.dogprice}</td>
                                    <td>{value.ownerlocation}</td>
                                    <td>{value.dogdetail}</td>
                                    <td>
                                        <button className="btn btn-sm btn-danger" onClick={()=>this.deltehandler(value._id)}>Delete</button>
                                        {/* <button className="btn btn-sm btn-success" onClick={()=>this.editHandler(value._id)}>Edit</button> */}
                                    </td>
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
  console.log('store',store.dogproductreducer);
  
  return{
         
          dogproductdatabase:store.dogproductreducer.dogproductfromdatabase
          
      }
      
      
      
}
export default connect(mapstatetopro,{getdogproducts,deltestddata} )(Home);

