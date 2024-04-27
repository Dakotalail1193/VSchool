import React from 'react'
import BlogPost from './BlogPost.jsx'
import blogData from '../blogData.jsx'

export default function BlogList(){
    const blogElements = blogData.map(blog => {
        return <BlogPost title={blog.title} subTitle={blog.subTitle} author={blog.author} date={blog.date} />
    })
    return (
        <div>
            {blogElements}
        </div>
    )
}