import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
  formRoot: {
    margin: theme.spacing(1)
  },
  listRoot: {
      margin: theme.spacing(1)
  }
}))

const BulletinBoardForm = () => {
  const classes = useStyles()
  return (
    <div className={classes.formRoot}>
      <TextField
        fullWidth
        id='outlined-multiline-static'
        label='New Topic'
        placeholder='Placeholder'
        multiline
        rows='4'
        variant='outlined'
      />
      <div className={classes.actionArea}> 
        <Button
          className={classes.button}
        >
          Back
        </Button>
        <Button
          className={classes.button}
        >
          Back
        </Button>
      </div>
    </div>
  )
}
const BulletinBoardList = () => {
  const classes = useStyles()
  return <div className={classes.listRoot}>List Here...</div>
}

const BulletinBoard = () => {
  const classes = useStyles()
  return (
    <div>
      <BulletinBoardForm />
      <BulletinBoardList />
    </div>
  )
}

export default BulletinBoard
