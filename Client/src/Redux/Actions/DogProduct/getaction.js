import axios from "axios";
export function getdogproducts() {
    return dispatch =>{
        let url = `http://localhost:4848/getdogproduct`;
        console.log('signupdata getdata action is run');
    axios
      .post(url)
      .then(res => {
        //alert('res recived')
        console.log(res.data);
        dispatch({
          type:'Showdogproduct',
          data:res.data
        })
      })
      .catch(err => {
        console.error(err);
      });

    }
}