import React from 'react'
import BlogCard from './BlogCard'

function BlogContainer({blogs=[], getAfterChange}) {
    return (
            <div className="column align_center blog_container">

                {
                    blogs.map((blog,i)=>{
                        console.log(blog);
                        return (
                            <BlogCard getAfterChange={getAfterChange} key={i} blog={blog} />
                        )
                    })
                }

            </div>

    )
}

export default BlogContainer