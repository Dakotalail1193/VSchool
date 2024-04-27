import React from 'react'
import Navbar from './Navbar'

export default function Header(){
    return (
        <div>
            <Navbar/>
            <h1 className='head-title'>Clean Blog</h1>
            <span className='head-subtitle'>A Blog Them By Start Boothstrap</span>
        </div>
    )
}