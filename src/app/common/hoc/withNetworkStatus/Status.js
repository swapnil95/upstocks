import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'


function styles({ spacing }) {
  return {
    root: {
      height: 200
    },
    message: {
      cursor: 'pointer'
    }
  }
}

function reload() {
  window.location.reload()
}

function Status(props) {
  const {
    classes,
    isLoading,
    errorMessage
  } = props
  return (
    <Grid container justify="center" alignItems="center" className={classes.root}>
      <Grid item >
        {isLoading && <span>Loading...</span>}
        {errorMessage && !isLoading && (
          <Typography onClick={reload} className={classes.message}>
            {errorMessage} click here to reload the page
          </Typography>
        )}
      </Grid>
    </Grid>
  )
}

Status.propTypes = {
  isLoading: PropTypes.bool,
  errorMessage: PropTypes.string
}

export default withStyles(styles)(Status)
