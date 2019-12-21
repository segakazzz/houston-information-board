import React from 'react'
import Advertisements from './Advertisements'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  content: {
    flexGrow: 1
  },
  toolbar: theme.mixins.toolbar
}))



const Main = () => {
  const classes = useStyles()
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Advertisements/>
    </main>
  )
}

export default Main
