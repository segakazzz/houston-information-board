import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ButtonBase from '@material-ui/core/ButtonBase'
import Typography from '@material-ui/core/Typography'
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto'
import AddLocationIcon from '@material-ui/icons/AddLocation'
import EventIcon from '@material-ui/icons/Event'
import InsertLinkIcon from '@material-ui/icons/InsertLink'


const icons = [
  {
    icon: <AddAPhotoIcon/>,
    title: 'Photo',
    backgroundColor: 'red'
  },
  {
    icon: <AddLocationIcon/>,
    title: 'Location',
    backgroundColor: 'orange'
  },
  {
    icon: <EventIcon/>,
    title: 'Date&Time',
    backgroundColor: 'green'
  },
  {
    icon: <InsertLinkIcon/>,
    title: 'Link',
    backgroundColor: 'yellow'
  },
];

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  icon: {
    position: 'relative',
    height: theme.spacing(7),
    width: theme.spacing(8),
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $iconBackdrop': {
        opacity: 0.15,
      },

    },
  },
  focusVisible: {},
  iconButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    color: theme.palette.common.white,
  },
  iconSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  iconBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  iconTitle: {
    fontSize: 10
  }
}));

const BulletinBoardActionIcons = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      {icons.map(icon => (
        <ButtonBase
          focusRipple
          key={icon.title}
          className={classes.icon}
          focusVisibleClassName={classes.focusVisible}
        >
          <span
            className={classes.iconSrc}
            style={{
              backgroundColor: `${icon.backgroundColor}`,
            }}
          />
          <span className={classes.iconBackdrop} />
          <span className={classes.iconButton}>
            {icon.icon}
            <Typography 
              component="span"
              variant="button"
              color="inherit"
              className={classes.iconTitle}
            >
              {icon.title}
            </Typography>
          </span>
        </ButtonBase>
      ))}
    </div>
  );
}

export default BulletinBoardActionIcons
