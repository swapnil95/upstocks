import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import { withRouter } from 'react-router'


const HEADER_MAP = {
  '/home': 'Home',
  '/live-chart': 'Live Chart',
  '/live-table': 'Live Table',
  '/search': 'Search'
}

function styles({ spacing }) {
  return {
    root: {
      padding: `13px ${spacing.unit * 4}px`,
    }
  }
}


function Header(props) {
  const { classes, location } = props
  return (
    <AppBar
      color="primary"
      position="sticky"
      elevation={0}
      className={classes.root}
    >
      <Grid container alignItems="center" spacing={8}>
        <Grid item xs>
          <Typography color="inherit" variant="h5" component="h1">
            {HEADER_MAP[location.pathname]}
          </Typography>
        </Grid>
      </Grid>
    </AppBar>
  )
}

export default withStyles(styles)(withRouter(Header))
