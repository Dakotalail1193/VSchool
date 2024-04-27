import React from 'react'
import Header from './Blog-Componets/Header.jsx'

import BlogList from './Blog-Componets/BlogList.jsx'
import BlogPost from './Blog-Componets/BlogPost.jsx'
import Footer from './Blog-Componets/Footer.jsx'

import './BlogApp.css'


export default function App(){
   
    return (
        <div>
            <Header/>
            <BlogList/>
            <Footer/>  
        </div>
    )
}