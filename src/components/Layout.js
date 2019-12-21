import React from 'react'
import NavBar from './NavBar'
import SideMenu from './SideMenu'
import Main from './Main'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
}))

const Layout = () => {
    const classes = useStyles()
    return (
      <div className={classes.root}>
        <NavBar />
        <SideMenu />
        <Main />
      </div>
    )
  }

export default Layout