import React, { Component } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, Title, Content, Link, Headshot, Nav } from './styling'
import headshot from './hlm.jpg'

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
            return <li key={icon.name}><Link href={icon.url} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', `${icon.name}`]} /></Link></li>
    	})

        return  <Nav>{ socialList }</Nav>
    }
}

class App extends Component {
    render() {
        return (
            <Container>
                <Title>I&rsquo;m Hannah</Title>
                <Headshot src={headshot} alt="hannahlmurray" />
                <Content>I&rsquo;m a Senior Front End Engineer based out of Brooklyn, NY. Currently working at <Link href="https://mmlafleur.com" target="_blank" rel="noopener noreferrer">MM.LaFleur</Link>, previously at <Link href="https://thecharlesnyc.com" target="_blank" rel="noopener noreferrer">The Charles</Link> and Time Inc. Originally from South Carolina, and studied Computer Science at the College of Charleston. Lover of running, cooking, Saturday Night Live, and Bravo.</Content>
                <SocialNav />
            </Container>
        )
    }
}

export default App
