import React from 'react'
import { Link, Nav } from '../../styling'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fab)

const SocialNav = () => {
  const icons = [
    {name: 'instagram', url: 'https://www.instagram.com/hannahmconti/'},
    {name: 'twitter', url: 'https://twitter.com/hannahmconti'},
    {name: 'linkedin-in', url: 'https://www.linkedin.com/in/hlmurray/'},
    {name: 'github', url: 'https://github.com/hlmurray'}
  ]

  const socialList = icons.map((icon) => {
    return <li key={icon.name}><Link href={icon.url} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', `${icon.name}`]} /></Link></li>
  })

  return  <Nav>{socialList}</Nav>
}

export default SocialNav
