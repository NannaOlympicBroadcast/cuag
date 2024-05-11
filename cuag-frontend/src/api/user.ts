import {axios} from "../utils/requests.ts";
import {ElMessage} from "element-plus";

const USER_MODULE=`/api/users`
export const login = (userID:string,password:string) => {
  return axios.post(USER_MODULE+`/login/?uname=${userID}&password=${password}`).then(
      res=>{
        if(res.data.code=="000"){
          localStorage.setItem("token",res.data.result.token)
        }else{
          ElMessage({
            message:res.data.msg,
            type:"error",
            center:true
          })
        }
      }
  )
}
