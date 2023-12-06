import Link from 'next/link'
import { useState } from 'react';
import authService from '@/service/authService';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router'

export default function Login() {
    const router = useRouter();
    const [email, setEmail] = useState((''));
    const [password, setPassword] = useState((''));
    const [status, setStatus] = useState({
        status : false,
        message : ""
    });
    const handleLogin = async () => {
         const payload = {
            email : email,
            password : password
         };
         const checkLogin = await authService.login(payload);
         if(checkLogin.status == 'error'){
            setStatus({
                status : true,
                message : 'Email or password incorrect'
            })
         }else {
            Cookies.set('accessToken', checkLogin.access_token, { path: '/' })
            Cookies.set('refreshToken', checkLogin.refresh_token, { path: '/' })
            router.push('/book');
         }
         
         
    }
    return (
          <section className="app-fourth-section container-fluid">
    <div className="container-login">
        <div className="title-page">
            <h2>Login</h2>
        </div>
        <div className="app-login">
        <div className="row">
        <div className="col-md-12 col-sm-12">
            <div className="form-login">
                <label>Username or email address <span className="error-label"> *</span></label>
                <input onChange={(e) => setEmail(e.target.value)} id="email" type="text" />
            </div>
        </div>
        <div className="col-md-12 col-sm-12">
            <div className="form-login">
                <label>Password  <span className="error-label"> *</span></label>
                <input onChange={(e) => setPassword(e.target.value)} id="password" type="password" />
            </div>
        </div>
        <div className=" col-md-12 col-sm-12">
             <div className="form-btn-submit">
                 <div >
                    <input type="checkbox"  />
                    <label>Remember me</label>
                 </div>
                 <div className="show-error">
                       
                  </div>
                  {status.status &&  <div>
                    <div className="btn-login red " style={{textAlign: "center"}}>Email or password incorrect</div>
                  </div>}
                 <div>
                        
                        <button type="button" onClick={() => handleLogin()} className="btn-login">Login</button>
                 </div>

                 <div className="forget-password-link">
                        <Link href="/register">You don't have an account ?</Link>
                 </div>
             </div>
        </div>
    </div>
        </div>
    </div>
</section>
    )
}


   