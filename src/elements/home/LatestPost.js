import React, { Component } from 'react'
import styled from 'styled-components'

const LatestPostWrapper = styled.div`
grid-column: auto / span 3;
grid-row: auto / span 2;
background-color: "#000";
`

const RollingText = styled.div`
border-top: 2px solid "#FFF";
overflow: hidden;
margin-top: 0em;
height: 1.5em;
font-size: 14px;
font-style: italic;
letter-spacing: .1em;
transform: translate3d(0,0,0);

a {
  margin-left: 20px;
}
`

class LatestPost extends Component { // eslint-disable-line
  render () {
    return (
      <div />
    )
  }
}

export default LatestPost
