import axios from "axios";
export function getsignupdata() {
    return dispatch =>{
        let url = `http://localhost:4848/signuplist`;
        console.log('signupdata getdata action is run');
    axios
      .post(url)
      .then(res => {
        //alert('res recived')
        console.log(res.data);
        dispatch({
          type:'ShowSignUpdata',
          data:res.data
        })
      })
      .catch(err => {
        console.error(err);
      });

    }
}