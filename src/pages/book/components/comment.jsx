import { FaStar } from "react-icons/fa";
import { useState, useEffect} from "react";
import Cookies from 'js-cookie';
import { jwtDecode } from "jwt-decode";
import commentService from "@/service/commentService";
export default function Comment({dataItem}){
    const [vote, setVote] = useState(0);
    const [content, setContent] = useState();
    const [dataComment, setDataComment] = useState(dataItem.comments);
    useEffect(() => {
        setDataComment(dataItem.comments);
    }, [dataItem])
    const handleComment = async () => {
        const refreshToken = Cookies.get('refreshToken');
        const decoded = jwtDecode(refreshToken);
        let payload = {
            book_id : dataItem.id,
            content : content,
            vote : vote,
            user_id : decoded.data.id
        }
        const dataInsert = await commentService.insert(payload);
        setContent('');
        const newArr = dataComment;
        newArr.unshift({ ...dataInsert, User : {name : decoded.data.name}});
        setDataComment(newArr);
    }
    return ( <div className="app-detail__product-description-tab-content">

    <div className="row">
        <div className="col-sm-12 col-md-6 ">
           <div className="">
             <div className="app-detail__product-description-tab-title">
                 <h2 className="">{dataComment.length} reviews for "{dataItem.title}"</h2>
             </div>
              <div className="app-detail__product-comments">
                
                 {dataComment && dataComment.map((item, key) => (
                    
                    <div key={key} className="app-detail__product-comments-content">
                    <div className="app-detail__product-comment-item">
                        <img src="https://secure.gravatar.com/avatar/6d0e0d26ff542998bc5b184a455cb167?s=60&d=mm&r=g" alt="" className="" />
                   </div>
                   <div className="app-detail__product-comment-item">
                       <div className="app-detail__product-comment-item-ul">
                            <span className=""><b className="">{item.User.name}</b> – {item.createdAt}</span>
                            <ul className="">
                                   {Array.from({ length: item.vote }, (_, index) => (
                                       <FaStar style={{color : 'yellow'}} key={index} />
                                    ))}

                            </ul>
                       </div>
                       <div className="">
                           <p className="">{item.content}</p>
                       </div>
                  </div>
                </div>
                    
                 ))}
                
              </div>
           </div>
        </div>
        <div className="col-sm-12 col-md-6 ">
         <div className="app-detail__product-description-tab-title">
             <div className="">
                 <h2 className="">Add a review</h2>
                 <div className="app-detail__product-form">
                      <form action="" className="">
                          <div className="app-detail__product-form-forum">
                             <span className="">Your email address will not be published. Required fields are marked <span className="app-detail__product-form-red">*</span></span>
                         </div>
                          <div className="app-detail__product-form-rate">
                              <span className="">Your rating <span className="app-detail__product-form-red">*</span></span>
                              <ul className="">
                                
                                 {[1,2,3,4,5].map((item, key) => {
                                    if(item <= vote){
                                        return <li key={key} onClick={() => setVote(item)} className=""><FaStar style={{color : 'yellow'}} /></li>
                                    }else {
                                        return  <li key={key} onClick={() => setVote(item)} className=""><FaStar style={{color : 'gray'}}/></li>
                                    }
                                 })}

                              </ul>
                          </div>
                          <div className="app-detail__product-form-required app-detail__product-form-required-custom">
                             <label  className="">Your review <span className="app-detail__product-form-red">*</span></label>
                             <input onChange={(e) => setContent(e.target.value)} type="text" className="" />
                          </div>
                         
                          <div className="app-detail__product-form-button">
                             <button type="button" onClick={() => handleComment()}  className="">Submit</button>
                          </div>
                      </form>
                 </div>
             </div>

         </div>
        </div>
    </div>
</div>)
}