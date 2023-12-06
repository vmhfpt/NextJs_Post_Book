import { authApi } from "../api/auth/authApi";
class AuthService {
    async login(payload){
        return await authApi.login(payload);
    }
    async register(payload){
        return await authApi.register(payload);
    }
    async getDashboard(id){
        return await authApi.getInfor(id);
    }
    async logout(payload){
        return await authApi.logout(payload);
    }
}
export default new AuthService();