import { commentApi } from "../api/comment/commentApi";
class CommentService {
    async insert(payload){
        return await commentApi.create(payload);
    }
}
export default new CommentService();