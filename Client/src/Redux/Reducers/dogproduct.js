var initialState = {
   
   
    dogproductfromdatabase:[
        {
            id:'',
            dogname:'',
            dogtype:'',
            dogprice:'',
            ownerlocation:'',
            dogdetail:''

        }
    ]

}
function dogproductreducer(state = initialState , action) {

switch (action.type) {

    case 'AddDOGPRODUCT':
    {
        var a = action.data;
        console.log(a);
        console.log('data at reducre',action.data);
        return { 
            dogproductfromdatabase: [...state.dogproductfromdatabase,a]
           
            // ...state,
            // dogproductfromdatabase:action.data
           
        }
        
    }
    case 'Showdogproduct':
    {
        console.log('Showdogproduct data at reducre',action.data);
         var a = action.data;
        return { 
           
            ...state,
            //dogproductfromdatabase:action.data
            dogproductfromdatabase:a
           
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

export default dogproductreducer;