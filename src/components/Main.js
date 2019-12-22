import React from 'react'
import Advertisements from './Advertisements'
import { makeStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'

const useStyles = makeStyles(theme => ({
  content: {
    flexGrow: 1
  },
  toolbar: theme.mixins.toolbar
}))

const mapStateToProps = (state, ownProps) => {
    const { currentPage } = state.page
    return { currentPage: currentPage }
}

const Main = (props) => {
    console.log(props)
  const classes = useStyles()
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Advertisements/>
    </main>
  )
}

export default connect(mapStateToProps, null)(Main)
    