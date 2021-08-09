import axios from "axios";
import ShowMessage from "../utils/ShowMessage";

export const ins = axios.create();
ins.interceptors.response.use(function (resp) {
    if(resp.data.code === 0){
        return resp.data.data
    }
    ShowMessage({
        content: resp.data.msg,
        type: 'error'
    });
    return null
})