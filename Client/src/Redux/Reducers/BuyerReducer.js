var initialState = {
   
   
    BuyerDetailfromdatabase:[
        {
            id:'',
            Buyer_Name:'',
            Address:'',
            Contactnumber:'',
            

        }
    ]

}
function buyerProduct(state = initialState , action) {

switch (action.type) {

    case 'AddBuyer':
    {
        var a = action.data;
        console.log(a);
        console.log('data at reducre',action.data);
        return { 
            BuyerDetailfromdatabase: [...state.BuyerDetailfromdatabase,a]
           
            // ...state,
            // dogproductfromdatabase:action.data
           
        }
        
    }
    case 'BuyerRequestShow':
    {
        console.log('BuyerRequestShow data at reducre',action.data);
         var a = action.data;
        return { 
           
            ...state,
            //dogproductfromdatabase:action.data
            BuyerDetailfromdatabase:a
           
        }
        
    }
    
    default:
        return state;
}
}

export default buyerProduct;