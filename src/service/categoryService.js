import { categoryApi } from "../api/category/categoryApi";
class CategoryService {
    async index(payload){
        return await categoryApi.getAll(payload);
    }
}
export default new CategoryService();