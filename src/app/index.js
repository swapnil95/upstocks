import React, { Component } from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { Provider } from 'react-redux'

import Routes from './Routes'
import theme from './theme'
import store from './store'


class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Provider store={store}>
          <Routes />
        </Provider>
      </MuiThemeProvider>
    )
  }
}

export default App
