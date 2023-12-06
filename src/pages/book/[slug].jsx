import Comment from "./components/comment";
import createApiInstance from "@/apiTest/config";
import { FaStar } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaVimeoV } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaChevronRight } from "react-icons/fa";
import 'swiper/css';
import Link from 'next/link';
import { FaEye } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";
import { useEffect, useRef } from 'react';

import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import python from 'highlight.js/lib/languages/python';
import css from 'highlight.js/lib/languages/css';
import html from 'highlight.js/lib/languages/xml';
import php from 'highlight.js/lib/languages/php';
//import hljsLineNumber from 'highlightjs-line-numbers.js'; // window is not defined
hljs.registerLanguage('xml', html);
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('python', python);
hljs.registerLanguage('css', css);
hljs.registerLanguage('php', php); 


export default function Index({dataItem, bookRelate}) {
   
    useEffect(() => {
        if (typeof window !== 'undefined') { // Ensure window is defined
            window.hljs = hljs;
            hljs.highlightAll();
            import('highlightjs-line-numbers.js').then((hljsLineNumber) => {
                //hljsLineNumber.initLineNumbersOnLoad();
                const codeBlocks = document.querySelectorAll('pre code');
                codeBlocks.forEach((block) => {
                    hljs.lineNumbersBlock(block);
                });
            });
        }

    }, [dataItem]);

   


    const [tab, setTab] = useState(true);
    return (
      <div>
     
<section className="section-bread-crumb container-fluid">
    <div className="container">
        <ul className="">
            <a href="" className="">
                <li className="">Home <FaChevronRight /></li>
            </a>
            <a href="" className="">
                <li className="">book <FaChevronRight /></li>
            </a>
            <a href="" className="">
                <li className="section-bread-crumb-active">{dataItem.title}</li>
            </a>
        </ul>
    </div>
</section>

<section className="app-detail__product container-fluid">
     <div className="container">
        <div className="row">
            <div className="col-sm-12 col-md-6">
                <div className="app-detail__product-content">
                    <div className="app-detail__product-present owl-carousel owl-theme owl-loaded">
                        <div className="owl-stage-outer">
                            <div className="owl-stage">
                                
                                <img src={dataItem.image} alt="" className="owl-item" />
                               
                            </div>
                        </div>
                    </div>

                    
                </div>
                
            </div>
            <div className="col-sm-12 col-md-6">
                <div className="app-detail__product-right-content">
                   
                    <div className="app-detail__product-right-content-second">
                        <div className="app-detail__product-right-content-second-title">
                             <h1 className="">{dataItem.title}</h1>
                        </div>
                        <div className="app-detail__product-right-content-second-rate">
                             <div className="">
                                <ul className="">
                                   
                                    {Array.from({ length: dataItem.average_vote }, (_, index) => (
                                       <FaStar style={{color : 'yellow'}} key={index} />
                                    ))}
                                    {Array.from({ length: Math.ceil(5-(dataItem.average_vote)) }, (_, index) => (
                                       <FaStar key={index} />
                                    ))}

                                    
                                </ul>
                             </div>
                             <div className=""><span className="">
                                 ({dataItem.total_comment} reviews)
                             </span></div>
                       
                       </div>
                   
                        
                   </div>



                    <div className="app-detail__product-right-content-fourth">
                         <div className="app-detail__product-right-content-fourth-item">
                            <span className=""><b className="">Auth:</b> {dataItem.author}</span>
                         </div>
                         <div className="app-detail__product-right-content-fourth-item">
                            <span className=""><b className="">Category:</b> {dataItem.category.name}</span>
                         </div>
                         <div className="app-detail__product-right-content-fourth-item">
                            <span className=""><b className="">Year public:</b> {dataItem.year}</span>
                         </div>
                         <div className="app-detail__product-right-content-fourth-item">
                            <span className=""><b className="">ISBN :</b> {dataItem.isbn}</span>
                         </div>
                         <div className="app-detail__product-right-content-fourth-item">
                             <div className="app-detail__product-right-content-fourth-item-b">
                                <b className="">Share: </b>
                             </div>
                             <div className="">
                                <ul className="">
                                    <a href="" className="">
                                        <li className=""><FaFacebookF /></li>
                                    </a>
                                    <a href="" className="">
                                        <li className=""><FaInstagram /></li>
                                    </a>
            
            
                                    <a href="">
                                        <li className=""><FaTwitter /></li>
                                    </a>
                                    <a href="" className="">
                                        <li className=""><FaVimeoV /></li>
                                    </a>
                                </ul>
                             </div>
                         </div>
                    </div>
                  
            </div>
        </div>
     </div>
   </div>
</section>



  <section className="app-detail__product-description container-fluid">
     <div className="container">
       <div className="app-detail__product-description-content">
        <div className="app-detail__product-description-title">
             <ul className="">
                 <li onClick={() => setTab(!tab)} className={tab ? "app-detail__product-description-title-active" : ""}>Description</li>
                 <li onClick={() => setTab(!tab)} className={!tab ? "app-detail__product-description-title-active" : ""}>Reviews ({dataItem.total_comment})</li>
             </ul>
        </div>

       
        {tab ?   <div className="app-detail__product-description-tab">
            <div className="app-detail__product-description-tab-title">
                <h2 className="">Description</h2>
            </div>
            <div 
               className="app-detail__product-description-tab-content"
               dangerouslySetInnerHTML={{ __html: dataItem.content }}
            >
          
            </div>
          

        </div> :   <div  className="app-detail__product-description-tab">
             <Comment  dataItem={dataItem} />
           </div> }
        
       


    </div>
     </div>

</section>


<section className="app-detail__product-suggest container-fluid">
      <div className="container">
          <div className="app-detail__product-suggest-content">
              <div className="app-detail__product-suggest-content-title"><h1 className="">Related books</h1></div>
              <div>
              <Swiper
                spaceBetween={50}
                slidesPerView={4}
              >
              
                {bookRelate.map((item, key) => (<SwiperSlide key={key}>
                  <div  className="app-product-content-grid-item owl-item">
                  <div className="app-product-content-grid-item-img">
                        <img src={item.image} alt="" className="" />
                        <div className="app-product-content-grid-item-img-tab"> 
                          <div className="app-product-content-grid-item-img-tab-item"> 
                              <FaHeart />
                          </div>
                      
                          <div className="app-product-content-grid-item-img-tab-item"> 
                              <Link href={"/book/" + item.slug}><FaEye /></Link>
                          </div>
                        </div>

                      
                  </div>
                  <div className="app-product-content-grid-item-flex">
                        <div className="app-product-content-grid-item-flex-title"><span className="">{item.title}</span></div>
                        <div className="">
                          <span className="">{item.author}</span>
                        </div>
                  </div>
                  
              </div>
              </SwiperSlide> ))} 
              
              </Swiper>
              </div>
          </div>
         
      </div>
</section>

      </div>
    )}
export async function getServerSideProps(context) {
    try {
      const { params } = context;
      const { slug } = params;
    
      const api = createApiInstance(context);
      const book = await api.get('/api/books/' + slug);
      
      const bookRelate = await api.post('/api/books/get-book-relate', {id : book.category_id});
      return {
        props: {
          dataItem : book,
          bookRelate
        },
      };
    } catch (error) {
      return {
        redirect: {
          destination: '/login',
          permanent: false,
        },
      };
    }
}

