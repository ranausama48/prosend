import { createStore,applyMiddleware  } from 'redux';
import signupdata from '../Reducers/reducer';
import rootreduce from '../Reducers/rootreducer'
import dogproductreducer from '../Reducers/dogproduct'
import thunk from 'redux-thunk';

let store = createStore( 
    //signupdata, applyMiddleware(thunk));
    rootreduce,applyMiddleware(thunk));
    
export default store;
