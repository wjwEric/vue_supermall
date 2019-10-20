import axios from "axios";
export function request(options){
    const instance = axios.create({
        baseURL:'http://123.207.32.32:8000/api/v1',
        timeout:8000
    });
    instance.interceptors.response.use(res=>{
        return res.data;
    });
    return instance(options);
}