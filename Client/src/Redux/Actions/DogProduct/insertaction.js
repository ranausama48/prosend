import axios from "axios";
export function dogproductinsertrequest(data) {
    return dispatch =>{
        let url = `http://localhost:4848/dogproductadd`;
        console.log(' insert action',data);
    axios
      .post(url,data)
      .then(res => {
        //alert('res recived')
        console.log(res.data);
        // dispatch({
        //   type:'AddDOGPRODUCT',
        //   data:res.data
        // })
      })
      .catch(err => {
        console.error(err);
      });

    }
}