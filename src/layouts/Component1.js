import React, { Component } from 'react'
import { StaticRouter } from 'react-router'
import { renderToStaticMarkup } from 'react-dom/server'
import styled from 'styled-components'

import Wrapper from './Wrapper'

const Wrapper1 = styled.div`
height: 100%;
`

const Wrapper2 = styled.div`
position: absolute;
z-index: 10;
pointer-events: none;
height: 100%;
width: 100%;
overflow: hidden;

display: block;

canvas { 
  // test comments 100%
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
  // opacity: 0.5;
}
`

class Component1 extends Component {
  constructor(props) {
    super(props)

    this.state = {
      string: ''
    }

    setTimeout(() => {
      this.getString()
    }, 1000)
  }

  getString = () => {
    const string = renderToStaticMarkup(
      <StaticRouter location={window.location.pathname} context={{}}>
        <Wrapper>
          {this.props.children}
        </Wrapper>
      </StaticRouter>
    )

    this.setState({ string })
  }

  render() {
    return (
      <div>
        {this.props.children}
        <pre>{this.state.string}</pre>
        <Wrapper>
          {this.props.children}
        </Wrapper>
      </div>
    )
  }
}

export default Component1