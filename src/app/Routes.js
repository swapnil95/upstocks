import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Hidden from '@material-ui/core/Hidden'

import Navigator from './Navigator'
import Home from './home/containers'
import LiveData from './live-data/containers'
import Search from './search/containers'
import Header from './common/header'


const drawerWidth = 156;

const styles = theme => ({
  root: {
    display: 'flex',
    minHeight: '100vh',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    }
  },
  appContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  }
})

class AppRouter extends Component {
  state = {
    mobileOpen: false,
  }

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }))
  }

  render() {
    const { classes } = this.props
    const { mobileOpen } = this.state
    return (
      <Router>
        <div className={classes.root}>
          <CssBaseline />
          <nav className={classes.drawer}>
            <Hidden smUp implementation="js">
              <Navigator
                PaperProps={{ style: { width: drawerWidth } }}
                variant="temporary"
                open={mobileOpen}
                onClose={this.handleDrawerToggle}
              />
            </Hidden>
            <Hidden xsDown implementation="css">
              <Navigator PaperProps={{ style: { width: drawerWidth } }} />
            </Hidden>
          </nav>
          <div className={classes.appContent}>
            <Header header="Home" />
            <Route path="/home" component={Home} />
            <Route path="/live-chart" component={LiveData} />
            <Route path="/live-table" component={LiveData} />
            <Route path="/search" component={Search} />
          </div>
        </div>
      </Router>
    )
  }
}

export default withStyles(styles)(AppRouter)
