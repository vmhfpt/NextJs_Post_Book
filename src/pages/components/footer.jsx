import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaVimeoV } from "react-icons/fa";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
export default function Footer() {
    return (
     <div>

<footer className="app-footer container-fluid">
    <div className="container">
          <div className="row">
             <div className="col-lg-3 col-md-6 col-sm-12">
               <div className="app-footer__item">
                     <div className=""><img src="https://pathsoft.kovalweb.com/original/wp-content/uploads/2021/06/logo-white.svg" alt="" className="" /></div>
                     <div className="app-footer__item-title"><span className="">Our company has been developing high-quality and reliable software for corporate needs since 2008. We are renowned professionals of software development.</span>
                     </div>
                     <div className="app-footer__item-socialite">
                        <ul className="" >
                            <a href="" className=""><li className="" style={{color : 'white'}}><FaFacebookF /></li></a>
                            <a href="" className=""><li className="" style={{color : 'white'}}><FaInstagram /> </li></a>
                            <a href="" className=""><li className="" style={{color : 'white'}}><FaTwitter /></li></a>
                            <a href="" className=""><li className="" style={{color : 'white'}}> <FaVimeoV /></li></a>
                        </ul>
                     </div>
               </div>
             </div>
             <div className="col-lg-3 col-md-6 col-sm-12">
                 <div className="app-footer-item__right">

                   <ul className="">
                       <a href="" className=""><li className="app-footer-item__right-title">What We Offer</li></a>
                       <a href="" className=""><li className="">Project coordinator</li></a>
                       <a href="" className=""><li className="">Digital Marketing Specialist</li></a>
                       <a href="" className=""><li className="">Service Desk Agent</li></a>
                       <a href="" className=""><li className="">HR Marketing Designer</li></a>
                       <a href="" className=""><li className="">Senior Angular Software Engineer</li></a>
                   </ul>
                 </div>
             </div>
             <div className="col-lg-3 col-md-6 col-sm-12">
               <div className="app-footer-item__right">

                 <ul className="">
                     <a href="" className=""><li className="app-footer-item__right-title">Services</li></a>
                     <a href="" className=""><li className="">Corparate Solution</li></a>
                     <a href="" className=""><li className="">Call Center Solutions</li></a>
                     <a href="" className=""><li className="">Cloud Development</li></a>
                     <a href="" className=""><li className="">IOS/MacOS Apps</li></a>
                     <a href="" className=""><li className="">Android Applications</li></a>
                 </ul>
               </div>
             </div>
             <div className="col-lg-3 col-md-6 col-sm-12">
               <div className="app-footer-item__right">

                 <ul className="">
                     <a href="" className=""><li className="app-footer-item__right-title">Contacts</li></a>
                     <a href="" className=""><li className=""><FaMapMarkedAlt /> 301 S Irving Blvd Los Angeles, CA 90020</li></a>
                     <a href="" className=""><li className="">
                       <div className="app-footer-item__right-phone">
                         <div className="app-footer-item__right-phone-icon"><FaMobileAlt /></div>
                         <div className="app-footer-item__right-phone-detail">
                           <span className="">+1 323-913-4688</span>
                           <span className="">+1 323-888-4554</span>
                         </div>
                     </div>
                   </li></a>
                     <a href="" className=""><li className=""> <div className="app-footer-item__right-phone">
                       <div className="app-footer-item__right-phone-icon"><FaEnvelope /></div>
                       <div className="app-footer-item__right-phone-detail">
                         <span className="">hello@example.com</span>
                         <span className="">info@examble.com</span>
                       </div>
                   </div></li></a>
                     
                     
                 </ul>
               </div>
             </div>
          </div>
          
    </div>
   
</footer>
<section className="app-footer-last container-fluid">
   <div className="container">
       <div className="row">
          <div className="col-md-6 col-sm-12">
             <div className="app-footer-last__left">
               
                 <ul>
                   <a href="" className=""><li className="">Terms and Conditions</li>
                     
                   </a>
                   <a href="" className=""><li className="">Privacy Policy</li> </a>
                 </ul>
             </div>
          </div>
          <div className="col-md-6 col-sm-12">
           <div className="app-footer-last__right">
             <span className="">© 2022 PathSoft. All rights reserved.</span>
           </div>
          </div>
       </div>
   </div>
</section>
     </div>
    )
}