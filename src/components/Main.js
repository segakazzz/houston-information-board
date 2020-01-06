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
pageMapping[PAGES.BULLETINBOARD_BUY_NEED] = <BulletinBoard category={PAGES.BULLETINBOARD_BUY_NEED} />
pageMapping[PAGES.BULLETINBOARD_EVENTS] = <BulletinBoard category={PAGES.BULLETINBOARD_EVENTS}/>
pageMapping[PAGES.BULLETINBOARD_GIVEAWAY_SELL] = <BulletinBoard category={PAGES.BULLETINBOARD_GIVEAWAY_SELL}/>
pageMapping[PAGES.BULLETINBOARD_LIFE] = <BulletinBoard category={PAGES.BULLETINBOARD_LIFE}/>
pageMapping[PAGES.BULLETINBOARD_RECRUITMENT] = <BulletinBoard category={PAGES.BULLETINBOARD_RECRUITMENT}/>
pageMapping[PAGES.ABOUT_ADVERTISEMENT] = <UnderConstruction />
pageMapping[PAGES.ABOUT_COMPANY] = <UnderConstruction />
pageMapping[PAGES.ABOUT_SITEPOLICY] = <UnderConstruction />
pageMapping[PAGES.ABOUT_CONTACT] = <UnderConstruction />


const mapStateToProps = (state, ownProps) => {
    const { currentPage } = state.page
    // console.log(currentPage)
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
    