import { parse, serialize } from 'cookie';
import createApiInstance from '@/apiTest/config';
import { FaSearch } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { useState, useEffect } from 'react';
import bookServices from '@/service/bookServices';
import Link from 'next/link';
import { CiBoxList } from "react-icons/ci";
import { FaThLarge } from "react-icons/fa";
import { FaAlignCenter } from "react-icons/fa6";
export default function Index({ data, dataCategories }) {
  const [dataItem, setDataItem] = useState(data);
  const [title, setTitle] = useState('');
  const [name, setName] = useState('');
  const [isbn, setIsbn] = useState('');

  const handleSearchTitle = async () => {
     let result = await bookServices.filter({key : title, type : "title"});
     setDataItem(result);
  }
  const handleSearchName= async () => {
    let result = await bookServices.filter({key : name, type : "author"});
    setDataItem(result);
  }
  const handleSearchIsbn = async () => {
    let result = await bookServices.filter({key : isbn, type : "isbn"});
    setDataItem(result);
  }
  const handleSearchByCategory = async(id) => {
    let result = await bookServices.getAllByCategory(id);
    setDataItem(result);
  }
    return (
      <div>
<section className="section-bread-crumb container-fluid">
    <div className="container">
        <ul className="">
            <a href="" className="">
                <li  className="">Home <FaChevronRight /></li>
            </a>
            <a href="" className="">
                <li className="section-bread-crumb-active">Shop</li>
            </a>
        </ul>
    </div>
</section>
<section className="section-title-page container-fluid">
    <div className="container">
        <h3  className="">Books</h3>
    </div>
</section>
<section className="app-product-filter container-fluid">
    <div className="container">
        <div className="row">
            <div className="col-lg-6 filter-mobile ">
                
                <div className="app-product-filter__left">
                    <span className="show-total">Showing {data.length} of {data.length} results</span>
                </div>
            </div>
            <div className="col-xl-6 col-sm-12 col-lg-6 ">
                <div className="app-product-filter__right">
                    <div className="app-product-filter__right-item app-product-filter__right-item-active"><FaThLarge  /></div>
                    <div className="app-product-filter__right-item"><CiBoxList />
                    </div>

                    <div className="app-product-filter__right-item app-product-filter__right-item-button">
                        <FaAlignCenter /> <span className="">Filter</span></div>
                    <div className="app-product-filter__right-item">
                        <select name="" id="" className="">
                            <option value="" className="">Default sorting</option>
                            <option value="" className="">List sort first</option>
                            <option value="" className="">List sort second</option>
                            <option value="" className="">List sort third</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section className="app-product-content container-fluid">
    <div className="container">
        <div className="row">
            <div className="col-lg-3">
                <div className="overlay-filter"></div>
                <div className="app-product-content__left">
                    <div className="app-product-content__left-search">
                        <form action="" className="app-product-content__left-search-flex">
                            <input onChange={(e) => setTitle(e.target.value)} type="text" className="key-title" placeholder="Search title book" />
                            <button onClick={() => handleSearchTitle()} type="button"  className=""><FaSearch /></button>
                        </form>
                    </div>
                    <div className="app-product-content__left-search">
                        <form action="" className="app-product-content__left-search-flex">
                            <input onChange={(e) => setName(e.target.value)} type="text" className="key-author" placeholder="Search  author's name of book" />
                            <button onClick={() => handleSearchName()}  type="button"  className=""><FaSearch /></button>
                        </form>
                    </div>
                    <div className="app-product-content__left-search">
                        <form action="" className="app-product-content__left-search-flex">
                            <input onChange={(e) => setIsbn(e.target.value)} type="text" className="key-isbn" placeholder="Search isbn code of book" />
                            <button onClick={() => handleSearchIsbn()} type="button"  className=""><FaSearch /></button>
                        </form>
                    </div>
                    <div className="app-product-content__left-category">
                        <div className="app-product-content__left-category-title">Book categories</div>
                        <ul className="">
                           
                            {
                              dataCategories.map((item, key) => (
                                <a key={key} onClick={() => handleSearchByCategory(item.id)}   href="#"  className="">
                                  <li className="app-product-content__left-item-parent">

                                      <span className="">{item.name}</span>
                                      <span className="">({item.book_count})</span>

                                  </li>
                                </a>
                              ))
                            }
                        </ul>
                    </div>

                   

                   
                </div>
            </div>
            <div className="col-lg-9 ">
                 <div className="app-product-content-grid show-book">
                      {
                         dataItem.map((item, key) => (
                            
                          <Link  key={key} href={"/book/" + item.slug}>
                        
                          <div className="app-product-content-grid-item">
                          <div className="app-product-content-grid-item-img">
                               <img src={item.image} alt="" className="" />
                               <div className="app-product-content-grid-item-img-tab"> 
                                  <div className="app-product-content-grid-item-img-tab-item"> 
                                      <FaHeart />
                                  </div>
                                 
                                  <div className="app-product-content-grid-item-img-tab-item"> 
                                     <FaEye />
                                  </div>
                               </div>
  
                               <div className="app-product-content-grid-item__tab-sale">
                                  top 
                               </div>
                               <div className="app-product-content-grid-item__tab-recommend">
                                  {item.author}
                               </div>
                          </div>
                          <div className="app-product-content-grid-item-flex">
                               <div className="app-product-content-grid-item-flex-title"><span className="">{item.title}</span></div>
                               
                          </div>
                          
                      </div>
                          
                          </Link>

                         ))
                      }
                 </div>
            </div>
        </div>
    </div>
</section>

<section className="app-product-pagination container-fluid">
     <div className="container">
         <div className="app-product-pagination__content">
               <ul className="">
                  <a href="" className=""><li className="app-product-pagination-active">1</li></a>
                  <a href="" className=""><li className="">2</li></a>
                  <a href="" className=""><li className="">3</li></a>
                  <a href="" className=""><li className="">4</li></a>
                  <a href="" className=""><li className=""><i className="fa fa-angle-right" aria-hidden="true"></i></li></a>
               </ul>
         </div>
     </div>
</section>
      </div>
    )
}


export async function getServerSideProps(context) {
    try {
      const api = createApiInstance(context);
      const dataItem = await api.get('/api/books');
      const dataCategories = await api.get('/api/categories');
      return {
        props: {
          data : dataItem,
          dataCategories : dataCategories 
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


