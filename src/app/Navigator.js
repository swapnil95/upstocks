import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import HomeIcon from '@material-ui/icons/Home'
import ShowChart from '@material-ui/icons/ShowChart'
import TableChart from '@material-ui/icons/TableChart'
import Search from '@material-ui/icons/Search'
import { withRouter } from 'react-router'


const NAVIGATIONS = [{
  id: 'Home',
  icon: <HomeIcon />,
  active: true,
  link: '/home'
}, {
  id: 'Live Chart',
  icon: <ShowChart />,
link: '/live-chart'
},{
  id: 'Live Table',
  icon: <TableChart />,
link: '/live-table'
},{
  id: 'Search',
  icon: <Search />,
  link: '/search'
}]

const styles = theme => ({
  categoryHeader: {
    paddingTop: 16,
    paddingBottom: 16,
  },
  item: {
    paddingTop: 4,
    paddingBottom: 4,
    color: 'rgba(255, 255, 255, 0.7)',
  },
  itemCategory: {
    backgroundColor: '#232f3e',
    boxShadow: '0 -1px 0 #404854 inset',
    paddingTop: 16,
    paddingBottom: 16,
  },
  firebase: {
    fontSize: 24,
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.common.white,
  },
  itemActionable: {
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.08)',
    },
  },
  itemActiveItem: {
    color: '#4fc3f7',
  },
  itemPrimary: {
    color: 'inherit',
    fontSize: theme.typography.fontSize,
    '&$textDense': {
      fontSize: theme.typography.fontSize,
    },
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: 256,
      flexShrink: 0,
    },
  },
  link: {
    textDecoration: 'none'
  }
})

function Navigator(props) {
  const { classes, location, ...others } = props

  return (
    <Drawer
      variant="permanent"
      {...others}
    >
      <List disablePadding>
        <ListItem className={classNames(classes.firebase, classes.item, classes.itemCategory)}>
          Dashboard
        </ListItem>
        {NAVIGATIONS.map(({ id, icon, active, link }) => (
          <Link to={link} key={id} className={classes.link}>
            <ListItem
              button
              dense
              className={classNames(
                classes.item,
                classes.itemActionable,
                location.pathname === link && classes.itemActiveItem,
              )}
            >
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.itemPrimary,
                }}
              >
                {id}
              </ListItemText>
            </ListItem>
          </Link>
        ))}
      </List>
    </Drawer>
  )
}

Navigator.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(withRouter(Navigator))