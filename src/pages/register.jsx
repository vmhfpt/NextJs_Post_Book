import Link from 'next/link'
import { useState } from 'react';
import { useRouter } from 'next/router';
import authService from '@/service/authService';
import Cookies from 'js-cookie';
export default function Register() {
    const router = useRouter();
    const [email, setEmail] = useState((''));
    const [password, setPassword] = useState((''));
    const [name, setName] = useState('');
    const [userName, setUserName] = useState();
    const handleRegister = async () => {
        let payload = {
            name : name,
            email : email,
            username : userName,
            password : password
        }
        const handleRegister = await authService.register(payload);
        if(handleRegister.status == 'success'){
            Cookies.set('accessToken', handleRegister.access_token, { path: '/' })
            Cookies.set('refreshToken', handleRegister.refresh_token, { path: '/' })
            router.push('/book');
        }
    }
    return (
      <section className="app-fourth-section container-fluid">
    <div className="container-login">
        <div className="title-page">
            <h2>Register</h2>
        </div>
        <div className="app-login">
        <div className="row">
        <div className="col-md-12 col-sm-12">
            <div className="form-login">
                <label>Name<span className="error-label"> *</span></label>
                <input onChange={(e) => setName(e.target.value)} id="name" type="text" />
            </div>
        </div>
        <div className="col-md-12 col-sm-12">
            <div className="form-login">
                <label>Username <span className="error-label"> *</span></label>
                <input onChange={(e) => setUserName(e.target.value)} id="username" type="text" />
            </div>
        </div>
        <div className="col-md-12 col-sm-12">
            <div className="form-login">
                <label>Email address <span className="error-label"> *</span></label>
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
                 <div>
                        <button onClick={() => handleRegister()} type="button" className="btn-login">Register</button>
                 </div>

                 <div className="forget-password-link">
                        <Link href="/login" >Login</Link>
                 </div>
             </div>
        </div>
    </div>
        </div>
    </div>
</section>
    )
}