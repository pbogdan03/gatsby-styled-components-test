import React from 'react'
import { __DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS as scSecrets } from 'styled-components'

const { StyleSheet: styleSheet } = scSecrets

if (typeof document !== `undefined`) {
  styleSheet.reset(false)
}

const Wrapper = ({ children }) => (
  <div>
    <div dangerouslySetInnerHTML={{ __html: styleSheet.instance.toHTML()}} />
    <div>{children}</div>
  </div>
)

export default Wrapper