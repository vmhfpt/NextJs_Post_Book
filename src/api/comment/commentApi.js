import axiosClient from "../config";
import {withAuth} from "../helper";
export const commentApi = {
    create : async(payload) => {
        const headers = withAuth();
        const options = {
            headers: headers
        };
        let url = '/api/comments';
        return await axiosClient.post(url,  payload, options);
    }
}