
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import authService from "@/service/authService";
import { TbLogout } from "react-icons/tb";
import { IoLogIn } from "react-icons/io5";
import { useRouter } from 'next/router';
import Link from 'next/link';
 function Header() {
  const refreshToken = Cookies.get('refreshToken');
  const router = useRouter();
  const [user, setUser] = useState(false);
    useEffect(() => {
      
      
      if(refreshToken){
        const decoded = jwtDecode(refreshToken);
        
        setUser(decoded.data);
      }
      
    }, [refreshToken]);
   const handleLogout = async () => {
      const refreshToken = Cookies.get('refreshToken');
      let payload = {
        refresh_token : refreshToken
      }
      const logout = await authService.logout(payload);
      Cookies.remove('accessToken', { path: '/' });
      Cookies.remove('refreshToken', { path: '/' });
      setUser(false);
      router.push('/login');
   }
    return (
      <div>
         <header className="app-header container-fluid">
    
    <div className="container">
       <div className="app-header__content">
         <div className="app-header__content-left">
             <ul className="">
               <a href="" ><li className=""><i className="fa fa-envelope-o" aria-hidden="true"></i> fptpolytecnich@example.com</li></a>
               <a href="" ><li className=""><i className="fa fa-phone" aria-hidden="true"></i>+1-888-777-1234</li></a>
               <a href="" ><li className=""><i className="fa fa-clock-o" aria-hidden="true"></i> Mon-fri:9:00 - 18:00</li></a>
            
             </ul>
         </div>
         <div className="app-header__content-right">
              <ul className="">
                 <a href="" className=""><li className=""><i className="fa fa-facebook" aria-hidden="true"></i></li></a>
                 <a href="" className=""><li className=""><i className="fa fa-instagram" aria-hidden="true"></i></li></a>


                 <a href="" ><li className=""><i className="fa fa-twitter" aria-hidden="true"></i> </li></a>
                   <a href="" className=""><li className=""><i className="fa fa-vimeo" aria-hidden="true"></i></li></a>
              </ul>
              <div className="app-header__content-right-callback">
               <i className="fa fa-volume-control-phone" aria-hidden="true"></i>
               <span>Callback</span>
              </div>
         </div>
       </div>
    </div>
  </header>
  <div className="overlay"></div>
  <nav id="navbar" className="app-nav container-fluid">
   
     <div className="container">
          <div className="app-nav__content">
          
              <div className="app-nav__content-item absolute-icon">
               <div className="app-nav__content-item-icon-nav">
                 <i className="fa fa-bars" aria-hidden="true"></i>
               </div>
                <Link href="/book" data-navigo><img style={{height : '50px', objectFit : "cover"}} src="https://png.pngtree.com/template/20191130/ourmid/pngtree-book-library-logo-store-vector-design-illustration-image_337106.jpg" alt="" className="" /></Link>
               
              </div>
              <div className="app-nav__content-item ">
                  <ul className="">
                   <a href="/book" className="" data-navigo><li className="">
                     <span className="app-nav__content-item-title ">Library  Books</span>
                     <i className="fa fa-angle-down" aria-hidden="true"></i>
                   </li></a>

                  </ul>
              </div>
              <div className="app-nav__content-item ">

                   <ul className="">
                        <li className="">  { user ? <div onClick={() => handleLogout()}>  {user.name} <TbLogout /> </div> : <div> Login <IoLogIn />  </div>}</li>

                  
                   </ul>
              </div>
          </div>
     </div>
  </nav>
      </div>
    )
}
export default Header;