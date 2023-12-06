import axiosClient from "../config";
import {withAuth} from "../helper";
export const bookApi = {
    
    getAll : async() => {
        const headers = withAuth();
        const options = {
            headers: headers
        };
        let url = '/api/books';
        return await axiosClient.get(url, options);
    },
    getAllByCategoryId : async (id) => {
        const headers = withAuth();
        const options = {
            headers: headers
        };
        let url = '/api/books/get-by-category/' + id;
        return await axiosClient.get(url, options);
    },
    getByFilter : async (queries) => {
        const headers = withAuth();
        const config = {
            params: queries,
            headers
        };
        let url = '/api/books/filter';
        return await axiosClient.get(url, config);
    },
    getDetailBySlug : async (slug) => {
        const headers = withAuth();
        const options = {
            headers: headers
        };
        let url = '/api/books/' + slug;
        return await axiosClient.get(url, options);
    },
    getBookRelate : async (payload) => {
        const headers = withAuth();
        const options = {
            headers: headers
        };
        let url = '/api/books/get-book-relate';
        return await axiosClient.post(url, payload, options);
    }

}