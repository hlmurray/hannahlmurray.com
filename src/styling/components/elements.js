import styled from 'styled-components'
import colors from './colors'

export const Container = styled.div`
  margin: auto;
  max-width: 500px;
  padding: 0 1em;
  text-align: center;
`

export const Title = styled.h1`
  margin: 0;
  font-size: 2em;
`

export const Content = styled.p`
  margin-bottom: 2em;
  line-height: 1.5em;
`

export const Link = styled.a`
  text-decoration: none;
  color: ${colors.gray};
  border-bottom: 1px solid ${colors.gray};
  transition: all 0.5s ease;

  &:hover {
    color: ${colors.grayDark};
  }
`;

export const Headshot = styled.img`
  width: 100%;
  max-width: 250px;
  margin: 2em 0 1.5em;
  border-radius: 50%;

  @media only screen and (min-width: 881px) {
    max-width: 350px;
  }
`

export const Nav = styled.ul`
  list-style-type: none;
  padding-left: 0;
  margin: 0;

  li {
    display: inline-block;
    padding-right: 1em;

    &:last-child {
      padding-right: 0;
    }
  }

  a {
    border-bottom: none;
  }
`
