import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { shareBlogAction } from '../../actions/MainActions';

function ShareBlog({getAfterChange}) {
    const user = useSelector(state => state.Data.user);
    const dispatch = useDispatch();
    const [text,setText] = useState('');

    function shareBlogBtn(text){
        if(text != ''){
            const newBlog = {
                user_id:user.id,
                text: text,
                image:'img'
            }
            dispatch(shareBlogAction(newBlog))
            .then(resp =>{
                setText('')
                getAfterChange()
            })
        }
    }

  return (
    <div className="write_blog_container">
        <img alt="blog img" className="blog_img uploaded_img_as_blog" src="" />

        <textarea placeholder="Write..." id="textarea" value={text}  onChange={e => setText(e.target.value)}></textarea>
        <div className="row">
            <button className="save_blog_btn" onClick={()=> shareBlogBtn(text)} >save</button>
            <input type="file" style={{display: 'none'}} id="upload_blog_img" />
           <div className="blog_icon_container">
               <i className="fas fa-times remove_img_btn"></i>
                <label htmlFor="upload_blog_img">
                    <i className="fas fa-upload upload_img_btn"></i>
                </label>
           </div>
        </div>
</div>
  )
}

export default ShareBlog