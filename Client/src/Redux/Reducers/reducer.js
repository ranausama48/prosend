var initialState = {
   
   
    dataFromdatabase:[
        {
            id:'',
            username:'',
            useremail:'',
            userpassword:''
        }
    ]

}
function signupdata(state = initialState , action) {

switch (action.type) {

    case 'AddUser':
    {
        var a = action.data;
        console.log(a);
        console.log('data at reducre',action.data);
        return { 
            dataFromdatabase: [...state.dataFromdatabase,a]
           
            // ...state,
            // dataFromdatabase:action.data
           
        }
        
    }
    case 'ShowSignUpdata':
    {
        console.log('SignUp data at reducre',action.data);
         var a = action.data;
        return { 
           
            ...state,
            //dataFromdatabase:action.data
            dataFromdatabase:a
           
        }
        
    }
    case 'DeleteStudent':
    {
        console.log("delete data at reducer" , action.data);
        console.log(state);
        var currentstate= state.dataFromdatabase;
        console.log("currentstatearray",currentstate);
        

        var deleterecd = action.data._id;
        console.log("deltercdid" , deleterecd);
         var filteredarray =  currentstate.filter(function(value){
             //console.log(value);
             return (value._id!==deleterecd);
            
         });
         return{
             ...state,
             dataFromdatabase:filteredarray
         }
        //  console.log( "Record After delte = ",filteredarray);
    }
    default:
        return state;
}
}

export default signupdata;