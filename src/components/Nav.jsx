import React, { Component } from 'react';
import Header from './Header.jsx'
import {
  NavLink,
  withRouter
} from 'react-router-dom';
import './Nav.css';

class Nav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      projectsOpen: false
    }
  }

  render() {
    let openAtPageLoad;

    let headerColor = this.props.data.titleColor;
    let linkColor = this.props.data.navLinkColor;
    let activeLinkColor = this.props.data.activeLinkColor;

    // handles sending proper text to header based on location
    let headerText = getPathName(this.props.location)
    // handles active state for queries on projects page
    let activeQuery = getQuery(this.props.location);
    // checks open at pageload
    this.props.location.pathname === '/projects' ? openAtPageLoad = true : openAtPageLoad = false;

    let activeStyle = {
      color: activeLinkColor,
      textDecoration: 'none'
    };

    let inactiveStyle = {
      color: linkColor,
      textDecoration: 'none'
    }

    if (this.state.projectsOpen || openAtPageLoad) {
      return (
        <div className="header">
          <Header title={headerText} data={headerColor} />
          <nav>
            <ul className="nav">
              <li><NavLink exact to="/" activeStyle={activeStyle} style={inactiveStyle} onClick={() => this.setState({ projectsOpen: false })}>- home</NavLink></li>
              <li><NavLink to="/projects" activeStyle={activeStyle} style={inactiveStyle} onClick={() => this.setState({ projectsOpen: true })}>- projects</NavLink></li>
              <ul>
                <li>
                  <NavLink to="/projects?personal"
                    style={{ textDecoration: 'none', color: activeQuery === '?personal' ? activeStyle.color : inactiveStyle.color }}
                    className={activeQuery === '?personal' ? 'isOpen' : 'isNotOpen'}>
                    - personal
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/projects?professional" style={{ textDecoration: 'none', color: activeQuery === '?professional' ? activeStyle.color : inactiveStyle.color }}
                    className={activeQuery === '?professional' ? 'isOpen' : 'isNotOpen'}>
                    - professional
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/projects?all' style={{ textDecoration: 'none', color: (activeQuery === '?all' || (this.props.location.pathname === '/projects' && activeQuery === '')) ? activeStyle.color : inactiveStyle.color }}
                    className={activeQuery === '?all' ? 'isOpen' : 'isNotOpen'}>
                    - all projects
                  </NavLink>
                </li>
              </ul>
              <li><NavLink to="/contact" activeStyle={activeStyle} style={inactiveStyle} onClick={() => this.setState({ projectsOpen: false })}>- contact</NavLink></li>
            </ul>
          </nav>
        </div>
      )
    } else {
      return (
        <div className="header">
          <Header title={headerText} data={headerColor} />
          <nav>
            <ul>
              <li><NavLink exact to="/" activeStyle={activeStyle} style={inactiveStyle} onClick={() => this.setState({ projectsOpen: false })}>- home</NavLink></li>
              <li><NavLink to="/projects" activeStyle={activeStyle} style={inactiveStyle} onClick={() => this.setState({ projectsOpen: true })}>- projects</NavLink></li>
              <li><NavLink to="/contact" activeStyle={activeStyle} style={inactiveStyle} onClick={() => this.setState({ projectsOpen: false })}>- contact</NavLink></li>
            </ul>
          </nav>
        </div>
      )
    }
  }
}

function getPathName(location) {
  let headerText;

  if (location.pathname === '/') {
    headerText = 'james ming johnson';
  } else if (location.pathname === '/projects') {
    if (location.search === '?professional') {
      headerText = 'projects: professional';
    } else if (location.search === '?personal') {
      headerText = 'projects: personal';
    } else {
      headerText = 'projects';
    }
  } else if (location.pathname === '/contact') {
    headerText = 'contact';
  }

  return headerText;
}

function getQuery(location) {
  return location.search;
}

export default withRouter(Nav);