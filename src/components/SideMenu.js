import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListSubheader from '@material-ui/core/ListSubheader'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import HomeIcon from '@material-ui/icons/Home'
import LocationCityIcon from '@material-ui/icons/LocationCity'
import ShopIcon from '@material-ui/icons/Shop'
import ShopTwoIcon from '@material-ui/icons/ShopTwo'
import EventIcon from '@material-ui/icons/Event'
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt'
import WorkIcon from '@material-ui/icons/Work'
import BusinessIcon from '@material-ui/icons/Business'
import WebIcon from '@material-ui/icons/Web'
import ContactMailIcon from '@material-ui/icons/ContactMail'
import PolicyIcon from '@material-ui/icons/Policy'
import { connect } from 'react-redux'
import { movePage } from '../redux/pageReducer'
import { PAGES } from '../constants'

const drawerWidth = 200

const useStyles = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  toolbar: theme.mixins.toolbar,
  listItem: {
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(0)
  },
  listItemIcon: {
    minWidth: theme.spacing(5)
  }
}))

const CustomListItem = props => {
  const classes = useStyles()
  const page = props.page || PAGES.ADVERTISEMENT
  // console.log(page)
  return (
    <ListItem
      className={classes.listItem}
      button
      onClick={() => props.movePage(page)}
    >
      <ListItemIcon className={classes.listItemIcon}>{props.icon}</ListItemIcon>
      <ListItemText primary={props.text} />
    </ListItem>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    movePage: newPage => dispatch(movePage(newPage))
  }
}

const ConnectedCustomListItem = connect(
  null,
  mapDispatchToProps
)(CustomListItem)

const CustomSubHeader = props => {
  return (
    <ListSubheader component='div' id='nested-list-subheader'>
      {props.text}
    </ListSubheader>
  )
}

const SideMenu = props => {
  const classes = useStyles()
  return (
    <Drawer
      className={classes.drawer}
      variant='permanent'
      classes={{
        paper: classes.drawerPaper
      }}
      anchor='left'
    >
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <ConnectedCustomListItem
          text={'Home'}
          icon={<HomeIcon />}
          page={PAGES.ADVERTISEMENT}
        />
      </List>
      <Divider />
      <List>
        <ConnectedCustomListItem
          text={'Town Guide'}
          icon={<LocationCityIcon />}
          page={PAGES.TOWN_GUIDE}
        />
      </List>
      <Divider />
      <List subheader={<CustomSubHeader text={'Bulletin board'} />}>
        <ConnectedCustomListItem
          text={'Give Away / Sell'}
          icon={<ShopIcon />}
          page={PAGES.BULLETINBOARD_GIVEAWAY_SELL}
        />
        <ConnectedCustomListItem
          text={'Buy / Need'}
          icon={<ShopTwoIcon />}
          page={PAGES.BULLETINBOARD_BUY_NEED}
        />
        <ConnectedCustomListItem
          text={'Event'}
          icon={<EventIcon />}
          page={PAGES.BULLETINBOARD_EVENTS}
        />
        <ConnectedCustomListItem
          text={'Life'}
          icon={<SentimentSatisfiedAltIcon />}
          page={PAGES.BULLETINBOARD_LIFE}
        />
        <ConnectedCustomListItem
          text={'Recruitment'}
          icon={<WorkIcon />}
          page={PAGES.BULLETINBOARD_RECRUITMENT}
        />
      </List>
      <Divider />
      <List subheader={<CustomSubHeader text={'About This Site'} />}>
        <ConnectedCustomListItem
          text={'Company'}
          icon={<BusinessIcon />}
          page={PAGES.ABOUT_COMPANY}
        />
        <ConnectedCustomListItem
          text={'Advertisement'}
          icon={<WebIcon />}
          page={PAGES.ABOUT_ADVERTISEMENT}
        />
        <ConnectedCustomListItem
          text={'Contact'}
          icon={<ContactMailIcon />}
          page={PAGES.ABOUT_CONTACT}
        />
        <ConnectedCustomListItem
          text={'Site Policy'}
          icon={<PolicyIcon />}
          page={PAGES.ABOUT_SITEPOLICY}
        />
      </List>
    </Drawer>
  )
}

export default SideMenu
