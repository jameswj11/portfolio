import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
    render() {
        return (
            <div className="contactContainer">
                <p className="contactDiv"><a href="mailto:jameswj111@gmail.com" target="_blank" rel="noopener noreferrer">Email</a></p>
                <p className="contactDiv"><a href="https://github.com/jameswj11" target="_blank" rel="noopener noreferrer">Github</a></p>
                <p className="contactDiv"><a href="https://www.linkedin.com/in/jamesmingjohnson" target="_blank" rel="noopener noreferrer">Linkedin</a></p>
                <p className="contactDiv"><a href="https://www.jamesjohnson.studio" target="_blank" rel="noopener noreferrer">My Art</a></p>
                {/* <p className="contactDiv"><a href="/public/resume.pdf" target="_blank" rel="noopener noreferrer">RESUME</a></p> */}
            </div>
        )
    }
}

export default Contact;