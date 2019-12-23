import React from 'react'
import Advertisements from './Advertisements'
import { makeStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import {
    PAGE_ADVERTISEMENT,
    PAGE_BULLETBOARD_GIVEAWAY_SELL,
    PAGE_BULLETBOARD_BUY_NEED,
    PAGE_BULLETBOARD_EVENTS,
    PAGE_BULLETBOARD_RECRUITMENT
  } from '../constants'

  import {movePage} from '../redux/pageReducer'

const useStyles = makeStyles(theme => ({
  content: {
    flexGrow: 1
  },
  toolbar: theme.mixins.toolbar
}))

const pageMapping = {
    PAGE_ADVERTISEMENT: <Advertisements />,
    PAGE_BULLETBOARD_GIVEAWAY_SELL: <Advertisements />,
    PAGE_BULLETBOARD_BUY_NEED: <Advertisements />,
    PAGE_BULLETBOARD_EVENTS: <Advertisements />,
    PAGE_BULLETBOARD_RECRUITMENT: <Advertisements />
}

const mapStateToProps = (state, ownProps) => {
    const { currentPage } = state.page
    return { currentPage: currentPage }
}

const Main = (props) => {
  const classes = useStyles()
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      {pageMapping[props.currentPage]}
    </main>
  )
}

export default connect(mapStateToProps, null)(Main)
    