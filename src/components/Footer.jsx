import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div className="footerDiv">
                <p className="footerText">© 2020 James Johnson. Programmed in React.js.
                Background: {this.props.data.artist}, {this.props.data.title}, {this.props.data.date} </p>
            </div>
        )
    }
}

export default Footer;