import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render() {
        let color = this.props.data
        return (
            <h1 style={{color: color}}>{this.props.title}</h1>
        )
    }
}

export default Header;