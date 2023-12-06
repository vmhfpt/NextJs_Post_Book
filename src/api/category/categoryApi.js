import axiosClient from "../config";
import {withAuth} from "../helper";
export const categoryApi = {
   
    getAll : async() => {
        const headers = withAuth();
        const options = {
            headers: headers
        };
        let url = '/api/categories';
        return await axiosClient.get(url, options);
    }

}