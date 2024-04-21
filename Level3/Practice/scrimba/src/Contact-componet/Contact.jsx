import React from 'react'

export default function Contact(props) {
    return (
        <div className="contact-card">
        <img src={props.img}/>
        <h3>{props.name}</h3>
        <div className="info-group">
            <img src="https://www.rawshorts.com/freeicons/wp-content/uploads/2017/01/black_webpict08_1484337066-1.png" />
            <p>{props.phone}</p>
        </div>
        <div className="info-group">
            <img src="https://static.vecteezy.com/system/resources/previews/020/169/233/original/envelope-icon-email-or-incoming-message-mail-icon-for-web-computer-and-mobile-app-message-envelope-line-art-icon-for-apps-and-websites-free-vector.jpg" />
            <p>{props.email}</p>
        </div>
    </div>
    )
}