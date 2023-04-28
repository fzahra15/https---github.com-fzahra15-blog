import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBlogs } from '../actions/MainActions';
import BlogContainer from '../components/page_components/BlogContainer';
import ShareBlog from '../components/page_components/ShareBlog';

function BlogPage() {
  const dispatch = useDispatch();
  const blogs = useSelector(state => state.Data.blogs)
  useEffect(() => {
    dispatch(getBlogs('personal'))
  }, [])

  const getAfterChange = () => {
    dispatch(getBlogs('personal'))
  }

  return (
    <div>
      <section>
        <ShareBlog getAfterChange={getAfterChange} />
      </section>
      <section>
        <BlogContainer getAfterChange={getAfterChange} blogs={blogs} />
      </section>
    </div>
  )
}

export default BlogPage