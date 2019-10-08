import axios from "axios";
export function getBuyerRequest() {
    return dispatch =>{
        let url = `http://localhost:4848/getrequest`;
        console.log('Get Buyer Request action is run');
    axios
      .post(url)
      .then(res => {
        //alert('res recived')
        console.log(res.data);
        dispatch({
          type:'BuyerRequestShow',
          data:res.data
        })
      })
      .catch(err => {
        console.error(err);
      });

    }
}