import React from 'react'
// import Header from './Blog-Componets/Header.jsx'
// import Navbar from './Blog-Componets/Navbar.jsx'
//import BlogList from './Blog-Componets/BlogList.jsx'
 import BlogPost from './Blog-Componets/BlogPost.jsx'
// import Footer from './Blog-Componets/Footer.jsx'
import blogData from './blogData'
import './BlogApp.css'


export default function App(){
    const blogElements = blogData.map(blog => {
        return <BlogPost title={blog.title} subTitle={blog.subTitle} author={blog.author} date={blog.date} />
    })
    return (
        <div>
            {blogElements}
        </div>
    )
}