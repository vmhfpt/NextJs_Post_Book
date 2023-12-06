import axios from 'axios';
import {renewToken} from './helper';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router'
var refreshingFunc = undefined;

 function isUnauthorizedError(error) { 
    const {
        response: { status, statusText },
    } = error;
    return status === 401;
 }

 function checkErrorRefreshToken(error) { 
    const {
        response: { status, statusText, data },
    } = error;
    return status === 401 && data.message && data.message == 'refresh_token error';
 }

 

 const axiosClient = axios.create({
     baseURL: 'http://localhost',
     paramsSerializer: (params) => {
         return Object.keys(params)
         .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
         .join('&');
   
     },
 });

 axiosClient.interceptors.request.use(async (config) => {
     return config;
 });

 axiosClient.interceptors.response.use((response) => {
     if (response && response.data) {
     return response.data;
     }

     return response;
 },async (error) => {
    const originalConfig = error.config;
    const token = Cookies.get('accessToken') ? Cookies.get('accessToken') : undefined;
    
    if (!token || !isUnauthorizedError(error)) return Promise.reject(error);
    if(checkErrorRefreshToken(error)) return Promise.reject(error);
   
    
    try {
       
       
        if (refreshingFunc == undefined){
            refreshingFunc = renewToken();
        }
        const [new_access_token, new_refresh_token] = await refreshingFunc;
        
        Cookies.set('accessToken', new_access_token, { path: '/' });
        Cookies.set('refreshToken', new_refresh_token, { path: '/' });

        // document.cookie = `accessToken=${new_access_token}; Path=/`;
        // document.cookie = `refreshToken=${new_refresh_token}; Path=/`;
        
        originalConfig.headers.Authorization = `Bearer ${new_access_token}`;
        

        try {
            return await axiosClient.request(originalConfig);
        } catch(innerError) {
            if (isUnauthorizedError(innerError)) {
                throw innerError;
            }                  
        }

    } catch (err) {
        Cookies.remove('accessToken', { path: '/' });
        Cookies.remove('refreshToken', { path: '/' })
        alert('your refresh token and access token were expried, you have to login again !!!');
        window.location = '/login';
    } finally {
        refreshingFunc = undefined;
    }

 });
 export default axiosClient;