import React from 'react'
import { CircularProgress, Typography, Box} from '@material-ui/core'
import { sizing } from '@material-ui/system';
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    root:{
        display: 'flex',
        alignItems: 'center',
        justifyConcent: 'center',
        flexDirection: 'column'
    }
}))

export default () => {
    const classes = useStyles()
  return (
    <Box width={1} height={1} className={classes.root}>
      <CircularProgress />
      <Typography variant="h5" gutterBottom>
        Loading...
      </Typography>
    </Box>
  )
}
