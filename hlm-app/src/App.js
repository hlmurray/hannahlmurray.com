import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import headshot from './hlm.jpg';
import './App.css';

library.add(fab)

class SocialNav extends React.Component {
    render() {
        const icons = [
            {name: 'facebook-f', url: 'https://www.facebook.com/hlmurray91'},
            {name: 'instagram', url: 'https://www.instagram.com/hannahlmurray/'},
            {name: 'twitter', url: 'https://twitter.com/hlmurray'},
            {name: 'linkedin-in', url: 'https://www.linkedin.com/in/hlmurray/'},
            {name: 'github', url: 'https://github.com/hlmurray'}
        ]

        const socialList = icons.map((icon) => {
            return <li key={icon.name}><a href={icon.url}><FontAwesomeIcon icon={['fab', `${icon.name}`]} /></a></li>;
    	})

        return  <ul className="social-nav">{ socialList }</ul>
    }
}

class App extends Component {
    render() {
        return (
            <div className="container center">
                <div>
                    <h1>I&rsquo;m Hannah</h1>
                    <img className="image" src={headshot} alt="hannahlmurray" />
                    <p>I&rsquo;m a Senior Front End Engineer at <a href="https://mmlafleur.com">MM.LaFleur</a>. Previously at <a href="https://thecharlesnyc.com">The Charles</a> and Time Inc. Originally from South Carolina, studied Computer Science at the College of Charleston. Lover of running, cooking, Saturday Night Live, and Bravo.</p>
                    <SocialNav />
                </div>
            </div>
        );
    }
}

export default App;
