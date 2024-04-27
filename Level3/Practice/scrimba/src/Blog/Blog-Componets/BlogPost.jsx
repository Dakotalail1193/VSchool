import React from 'react'
import BlogList from './BlogList'

export default function BlogPost(props) {
    return (
        <div>
            <h2 className='post-title'>{props.title}</h2>
            <h3 className='post-subtitle'>{props.subTitle}</h3>
            <p className='post-credits'>Posted by:{props.author} on {props.date}</p>
            
        </div>
    )
}