import React from 'react'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'


function styles ({ spacing }) {
  return {
    root: {
      padding: `0 ${spacing.unit * 4}px`,
      height: '100%'
    },
    item: {
      width: '100%'
    }
  }
}

function SectionContainer(props) {
  const { classes, children } = props
  return (
    <Grid container className={classes.root} justify="center" alignItems="center">
      <Grid item className={classes.item}>
        {children}
      </Grid>
    </Grid>
  )
}

export default withStyles(styles)(SectionContainer)
