import React from 'react'
import BlogList from './BlogList'

export default function BlogPost(props) {
    return (
        <div className='post'>
            <div className='title'>
                <h2 className='post-title'>{props.title}</h2>
                <h3 className='post-subtitle'>{props.subTitle}</h3>
            </div>
            <p className='post-credits'>Posted by: {props.author} on {props.date}</p>
            <hr/>
            
        </div>
    )
}