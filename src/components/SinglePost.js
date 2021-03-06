import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import ReplyIcon from '@material-ui/icons/Reply'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'

const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex'
  },
  details: {
    display: 'flex',
    flexDirection: 'column'
  },
  content: {
    display: 'flex'
  },
  cover: {
    width: 151
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(10),
    paddingBottom: theme.spacing(1)
  },
  playIcon: {
    height: 38,
    width: 38
  },
  avater: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    margin: theme.spacing(1)
  }
}))

const SinglePost = props => {
  const { data } = props
  console.log(data)
  const classes = useStyles()
  return (
    <Card className={classes.card}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <div>
            <Avatar
              alt={data.nickname}
              src={data.userimage}
              className={classes.avater}
            />
          </div>
          <div>
            <Typography component='subtitle2' variant='subtitle2'>
              {data.nickname}
            </Typography>
            <Typography component='h5' variant='h5'>
              {data.title}
            </Typography>
            <Typography variant='subtitle1' color='textSecondary'>
              {data.text}
            </Typography>
          </div>
        </CardContent>
        <div className={classes.controls}>
          <IconButton aria-label='response'>
            <ReplyIcon />
          </IconButton>
          <IconButton aria-label='like'>
            <ThumbUpAltIcon />
          </IconButton>
        </div>
      </div>
    </Card>
  )
}

export default SinglePost
