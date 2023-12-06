import axiosClient from "./config";
import Cookies from 'js-cookie';
export async function authenticate(email, password) {
    const loginPayload = {
        email: email,
        password: password
    };

     const response = await axiosClient.post('/admin/login' , loginPayload);
     const token = response.access_token;
     const refreshToken = response.refresh_token;

     return [token, refreshToken];
}

export async function renewToken() {
    
    const refreshToken = Cookies.get('refreshToken') ? Cookies.get('refreshToken') : false;

    if (!refreshToken){
        alert('You don`t have any token or token is invalid');
        window.location = '/login';
        throw new Error('refresh token does not exist');
    }
    const refreshPayload = {
        refresh_token : refreshToken
    };
    const response = await axiosClient.post("/admin/users/get-refresh-token", refreshPayload);
    return [response.access_token, response.refresh_token];
}


export function withAuth(headers) {
    const token = Cookies.get('accessToken') ? Cookies.get('accessToken') : undefined;

    if (!token) {
        alert('You don`t have any token yet, you have to login to get token');
        window.location = '/login';
        return;
    }

    if (!headers) {
        headers = { };
    }

    headers.Authorization = `Bearer ${token}`

    return headers
}