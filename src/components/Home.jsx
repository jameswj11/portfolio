import React, { Component } from 'react';
import './Home.css'

class Home extends Component {
    render() {
        return (
            <div className="modal">
                <img src="/images/jamesportrait.jpg" alt="james" className="portrait" />
                <p className = "bio">I'm a full-stack software and game developer living and working in New York City.</p>
                <p className = "bio">
                    For the past four years, I have worked in the digital education field, building educational games and other online teaching tools
                        that have been used by thousands of teachers and millions of K-12 students across the United States.</p>
                <p className = "bio">I primarily use JavaScript, ReactJS, NodeJS, CanvasJS, and CreateJS for my projects, but have experience in a multitude of other development and database technologies.</p>
            </div>
        )
    }
}

export default Home;