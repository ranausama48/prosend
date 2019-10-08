
import signupdata from '../Reducers/reducer';
import dogproductreducer from '../Reducers/dogproduct'
import buyerReducer from '../Reducers/BuyerReducer'
// import gitHubUser from './gitHubUser';
// import gitHubFollowers from './followers';
import {combineReducers} from 'redux';

export default combineReducers ({
    
   signupdata,dogproductreducer,buyerReducer
})