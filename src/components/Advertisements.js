import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import SingleAdvertisement from './SingleAdvertisement'
import { Grid } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(2)
  }
}))

const Advertisements = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <SingleAdvertisement />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <SingleAdvertisement />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <SingleAdvertisement />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <SingleAdvertisement />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <SingleAdvertisement />
        </Grid>
      </Grid>
    </div>
  )
}

export default Advertisements
