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
  return (
    <ListItem className={classes.listItem} button>
      <ListItemIcon className={classes.listItemIcon}>{props.icon}</ListItemIcon>
      <ListItemText primary={props.text} />
    </ListItem>
  )
}

const CustomSubHeader = props => {
  return (
    <ListSubheader component='div' id='nested-list-subheader'>
      {props.text}
    </ListSubheader>
  )
}

const SideMenu = () => {
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
        <CustomListItem text={'Home'} icon={<HomeIcon />} onClick={()=>movePage()}/>
      </List>
      <Divider />
      <List>
        <CustomListItem text={'Town Guide'} icon={<LocationCityIcon />} />
      </List>
      <Divider />
      <List subheader={<CustomSubHeader text={'Bulletin board'} />}>
        <CustomListItem text={'Give Away / Sell'} icon={<ShopIcon />} />
        <CustomListItem text={'Buy / Need'} icon={<ShopTwoIcon />} />
        <CustomListItem text={'Event'} icon={<EventIcon />} />
        <CustomListItem text={'Life'} icon={<SentimentSatisfiedAltIcon />} />
        <CustomListItem text={'Recruitment'} icon={<WorkIcon />} />
      </List>
      <Divider />
      <List subheader={<CustomSubHeader text={'About This Site'} />}>
        <CustomListItem text={'Company'} icon={<BusinessIcon />} />
        <CustomListItem text={'Advertisement'} icon={<WebIcon />} />
        <CustomListItem text={'Contact'} icon={<ContactMailIcon />} />
        <CustomListItem text={'Site Policy'} icon={<PolicyIcon />} />
      </List>
    </Drawer>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    movePage: (newPage) => dispatch(movePage(newPage))
  }
}

export default connect(null, mapDispatchToProps)(SideMenu)
