import { bookApi } from "../api/book/bookApi";
class BookService {
    async index(){
        return await bookApi.getAll();
    }
    async getAllByCategory(id){
        return await bookApi.getAllByCategoryId(id);
    }
    async filter(queries){
        return await bookApi.getByFilter(queries);
    }
    async getBySlug(slug){
        return await bookApi.getDetailBySlug(slug);
    }
    async getBookRelate(payload){
        return await bookApi.getBookRelate(payload);
    }
}
export default new BookService();