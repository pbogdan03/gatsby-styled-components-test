import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Component1 from './Component1'

const Overlay = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  pointer-events: none;

  background-color: "#000";
  display: ${props => (props.showOverlay ? 'block' : 'none')};

  z-index: 9;
`

class TemplateWrapper extends Component {
  render() {
    return (
      <div>
        <Helmet
          title="Gatsby Default Starter"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <Component1>
          {
            this.props.children({...this.props})
          }
        </Component1>
      </div>
    )
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
