import axios from "axios";
export function signupdata(data) {
    return dispatch =>{
        let url = `http://localhost:4848/Add`;
        console.log(' insert action',data);
    axios
      .post(url,data)
      .then(res => {
        //alert('res recived')
        console.log(res.data);
        dispatch({
          type:'AddUser',
          data:res.data
        })
      })
      .catch(err => {
        console.error(err);
      });

    }
}