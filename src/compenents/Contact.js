import React from 'react';
import './Contact.css'

function Contact() {
  return (
    <div className="Contact">
        <img className="avatar" src="https://randomuser.me/api/portraits/thumb/men/75.jpg"/>
        <div>
            <p className="name">Alex Horton</p>
            <div className="status">
                <div className="status-online"></div>
                <p className="status-text">online</p>
            </div>
        </div>
    </div>
  );
}

export default Contact;