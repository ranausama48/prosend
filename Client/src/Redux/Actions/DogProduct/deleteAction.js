import axios from "axios";
export function deltestddata(idtodelte) {
    return dispatch =>{
        let url = `http://localhost:4848/deltestudent`;
        console.log('delete action',idtodelte);
    axios
      .post(url,idtodelte)
      .then(res => {
        //alert('res recived')
        console.log("res.data",res.data);
        dispatch({
          type:'DeleteStudent',
          data:res.data
        })
      })
      .catch(err => {
        console.error(err);
      });

    }
}