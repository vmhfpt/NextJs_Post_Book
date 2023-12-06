import axios from 'axios';
import { parse, serialize } from 'cookie';
import renewToken from './handle';

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

const createApiInstance = (context) => {
    var refreshingFunc = undefined;
    const cookies = parse(context.req.headers.cookie || '');
    const accessToken = cookies.accessToken || '';
    const api = axios.create({
    baseURL: 'http://localhost',
    headers: {
      'Content-Type': 'application/json',
      // Add other headers or authentication tokens if needed
      'Authorization': `Bearer ${accessToken}` || '', // Access the cookie from the request headers
    },
    paramsSerializer: (params) => {
        return Object.keys(params)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
        .join('&');
  
    }
  });
  api.interceptors.request.use(async (config) => {
    return config;
  });
  api.interceptors.response.use(
    (response) => {
        if (response && response.data) {
            return response.data;
        }
       
        return response;
    },
    async (error) => {
        const cookies1 = parse(context.req.headers.cookie || '');
        const originalConfig = error.config;
        const token = cookies1.refreshToken || '';
    
        if (!token || !isUnauthorizedError(error)) return Promise.reject(error);
        if(checkErrorRefreshToken(error)) return Promise.reject(error);
        try {
            
            if (refreshingFunc == undefined){
                refreshingFunc = renewToken(api, token);
            }
            const [new_access_token, new_refresh_token] = await refreshingFunc;
            const updatedAccessCookie = serialize('accessToken', new_access_token, { path: '/' });
            const updatedRefreshCookie = serialize('refreshToken', new_refresh_token, { path: '/' });
            const updatedCookies = [updatedAccessCookie, updatedRefreshCookie];
            context.res.setHeader('Set-Cookie', updatedCookies);

            originalConfig.headers.Authorization = `Bearer ${new_access_token}`;
            
    
            try {
                return await  api.request(originalConfig);
            } catch(innerError) {
                if (isUnauthorizedError(innerError)) {
                    throw innerError;
                }                  
            }
    
        } catch (err) {
             const deletedaccessToken = serialize('accessToken', '', {
                path: '/',
                expires: new Date(0),
              });
              const deletedRefreshToken = serialize('refreshToken', '', {
                path: '/',
                expires: new Date(0),
              });
              const deleteCookies = [deletedaccessToken, deletedRefreshToken];
              
              context.res.setHeader('Set-Cookie', deleteCookies);
              throw new Error('your refresh token and access token were expried, you have to login again !!!'); 
     
        } finally {
            refreshingFunc = undefined;
        }
    }
  );

  return api;
};

export default createApiInstance;