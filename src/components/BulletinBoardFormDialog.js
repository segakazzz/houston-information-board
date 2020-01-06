import React from 'react'
import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
  Button
} from '@material-ui/core'

export default props => {
  const { data, closeDialog } = props

  return (
    <Dialog
      open={data.openDialog}
      onClose={closeDialog}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <DialogTitle id='alert-dialog-title'>
        {"Use Google's location service?"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id='alert-dialog-description'>
          Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeDialog} color='primary'>
          Disagree
        </Button>
        <Button onClick={closeDialog} color='primary' autoFocus>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  )
}
