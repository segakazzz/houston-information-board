import React from 'react'
import Advertisements from './Advertisements'
import UnderConstruction from './UnderConstruction'
import { makeStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { PAGES } from '../constants' 
import BulletinBoard from './BulletinBoard'

const useStyles = makeStyles(theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(2)
  },
  toolbar: theme.mixins.toolbar
}))

const pageMapping = {}
pageMapping[PAGES.ADVERTISEMENT] = <Advertisements />
pageMapping[PAGES.BULLETBOARD_BUY_NEED] = <BulletinBoard />
pageMapping[PAGES.BULLETBOARD_EVENTS] = <BulletinBoard />
pageMapping[PAGES.BULLETBOARD_GIVEAWAY_SELL] = <BulletinBoard />
pageMapping[PAGES.BULLETBOARD_LIFE] = <BulletinBoard />
pageMapping[PAGES.BULLETBOARD_RECRUITMENT] = <BulletinBoard />
pageMapping[PAGES.ABOUT_ADVERTISEMENT] = <UnderConstruction />
pageMapping[PAGES.ABOUT_COMPANY] = <UnderConstruction />
pageMapping[PAGES.ABOUT_SITEPOLICY] = <UnderConstruction />
pageMapping[PAGES.ABOUT_CONTACT] = <UnderConstruction />


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
    