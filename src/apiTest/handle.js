export default async  function renewToken(api, refresh_token) {
    const refreshToken = refresh_token ? refresh_token : false;
 
     if (!refreshToken){
        
         throw new Error('refresh token does not exist');
         
     }
     const refreshPayload = {
         refresh_token : refreshToken
     };
     const response = await api.post("/admin/users/get-refresh-token", refreshPayload);
     return [response.access_token, response.refresh_token];
}