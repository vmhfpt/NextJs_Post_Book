import axiosClient from "../config";
import {withAuth} from "../helper";
export const authApi = {
    login : async (payload) => {
        let url = '/api/login';
        return await axiosClient.post(url, payload);
    },
    register : async(payload) => {
        let url = '/api/register';
        return await axiosClient.post(url, payload);
    },
    getInfor : async(id) => {
        let url = '/admin/users/' + id;
        const headers = withAuth();
        const options = {
            headers: headers
        };
        return await axiosClient.get(url, options);
    },
    logout : async(payload) => {
        let url = '/api/logout';
        return await axiosClient.post(url, payload);
    }
}