import React from 'react'
import { useDispatch } from 'react-redux'
import { likeBlogAction } from '../../actions/MainActions';
import Comments from './Comments';
// import moment from 'moment/moment'

function BlogCard({blog,getAfterChange}) {
  const dispatch = useDispatch();
  function likeBlogBtn(type,id){
    const like ={
      type: type,
      blog_id:id
    };
    dispatch(likeBlogAction(like))
    .then(resp=>{
      getAfterChange()
    })
  }
  return (
    <div className="blog_cards">
      <div className="row">
        <h4 className='blog_title'>{blog.user.name}</h4>
        <p className="blog_date"></p>
      </div>
      <img alt="blog img" className="blog_img" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />
      <div className="icon_container">
        <i onClick={()=> likeBlogBtn(blog.like_check == 0? 'like':'unlike',blog.id)} style={{color: blog.like_check == 0? 'gray':'red'}} className="fas fa-heart"></i>
        <span>2</span>
      </div>
      <p className="blog_paragraph">
        {blog.text}
      </p>
      {
        blog.text.length >200?  <button className="read_more_btn">Read more</button>: null
      }

      <Comments comments={blog.comments} id={blog.id} getAfterChange={getAfterChange} />

    </div>
  )
}

export default BlogCard