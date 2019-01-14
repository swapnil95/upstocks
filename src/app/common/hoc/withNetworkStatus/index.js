import React from 'react'

import Status from './Status'


function withNetworkStatus(Component) {
  return function(props) {
    const { isLoading, errorMessage } = props
    if (isLoading || errorMessage) {
      return (
        <Status isLoading={isLoading} errorMessage={errorMessage} />
      )
    }
    return <Component {...props} />
  }
}

export default withNetworkStatus
