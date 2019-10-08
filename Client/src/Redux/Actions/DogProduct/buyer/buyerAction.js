import axios from "axios";
export function dogbuyerinsertrequest(data) {
    return dispatch =>{
        let url = `http://localhost:4848/addcart`;
        console.log(' insert action',data);
    axios
      .post(url,data)
      .then(res => {
        //alert('res recived')
        console.log(res.data);
        dispatch({
          type:'AddBuyer',
          data:res.data
        })
      })
      .catch(err => {
        console.error(err);
      });

    }
}