import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'
import gray from '@material-ui/core/colors/grey'

const useStyles = makeStyles(theme => ({
  card: {
    width: '100%'
  },
  media: {
    height: 140
  },
  link: {
    color: gray,
    textDecoration: 'none'
  }
}))

const SingleAdvertisement = props => {
  const { data } = props
  const classes = useStyles()
  const googleMapUrl = 
        `https://www.google.com/maps/search/?api=1&query=${data.latitude},${data.longitude}`

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={data.imageurl}
          title={data.companyname}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {data.companyname}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {data.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions disableSpacing>
        <IconButton aria-label='Location' size='small'>
          <a
            className={classes.link}
            href={googleMapUrl}
            target='_blank'
            rel='noopener noreferrer'
          >
            <LocationOnOutlinedIcon />
          </a>
        </IconButton>
        <Typography variant='body2'>
          <a
            className={classes.link}
            href={googleMapUrl}
            target='_blank'
            rel='noopener noreferrer'
          >
            {data.address} {data.address_city} {data.address_state}{' '}
            {data.address_zip}
          </a>
        </Typography>
      </CardActions>
      <CardActions disableSpacing>
        <a
          className={classes.link}
          href={data.url}
          target='_blank'
          rel='noopener noreferrer'
        >
          <Button size='small' color='primary'>
            Company Site
          </Button>
        </a>
        <Button size='small' color='primary'>
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}

export default SingleAdvertisement
