import React from 'react';
import {
    Switch,
    Route
} from 'react-router-dom';
import Nav from './components/Nav.jsx';
import Home from './components/Home.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx'
import './App.css';
import Backgrounds from './json/backgrounds.json';

let backgroundIndex = Math.floor(Math.random(0, 1) * Backgrounds.length)
let backgroundObj = Backgrounds[backgroundIndex];
let backgroundURL = backgroundObj.url;
let styles = {
    backgroundImage: 'url(' + backgroundURL + ')',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    height: '100%',
    verticalAlign: 'top',
    marginLeft: '0',
    marginRight: '0',
    marginTop: '0',
    marginBottom: '-22px',
    minHeight: "100vh"
}
let styleColors = {
    "titleColor": Backgrounds[backgroundIndex].titleFontColor,
    "navLinkColor": Backgrounds[backgroundIndex].navLinkColor,
    "activeLinkColor": Backgrounds[backgroundIndex].activeLinkColor
}

function App() {
    return (
        <div className="App" style={styles}>
            <div className="mainContainer">
                <div className="nav">
                    <Nav data={styleColors} />
                </div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/projects" component={Projects} />
                    <Route exact path="/contact" component={Contact} />
                </Switch>
            </div>
            <Footer data={backgroundObj} />
        </div>
    )
}

export default App;
