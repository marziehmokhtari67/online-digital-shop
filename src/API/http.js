import axios from 'axios'
import { refreshToken } from '../redux/reducer/loginSlice'
import {URL} from './constant'
let store 
export const injectStore = _store =>{
    store=_store
}
axios.defaults.baseURL=URL;
axios.interceptors.request.use((req)=>{
    if (req.url==='/auth/refresh-token'){
        const token = localStorage.getItem('REFRESH_TOKEN')
        req.headers.refreshToken=token
    }
    else if (req.url!=='/auth/login'|| req.url!=='/category'){
        const token = localStorage.getItem('ACCESS_TOKEN')
        req.headers.token=token
    }
})
axios.interceptors.response.use((response)=>response,
async(error)=>{
    if(error.response.status!==401){
        return Promise.reject(error)
    }
 const orginalRequest=error.config
 
 if (error.response.status===401 && orginalRequest.url==='/auth/refresh-token') {
    return Promise.reject(error)
  } 
 if (!orginalRequest._retry) {
    orginalRequest._retry=true
    try {
     await store.dispatch(refreshToken()) 
     const res = await axios.request(orginalRequest) 
     return Promise.resolve(res)
    } catch (error) {
        
    }
 }  
}
)
export default axios