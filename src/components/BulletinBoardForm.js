import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import { Grid } from '@material-ui/core'
import BulletinBoardActionIcons from './BulletinBoardActionIcons'

const styles = theme => ({
  formRoot: {
    margin: theme.spacing(1)
  },

  icon: {
    marginRight: theme.spacing(1)
  },
  actionButtons: {
    display: 'flex',
    alignItems: 'center'
  },
  postButton: {
    // width: theme.spacing(12)
  }
})

const BulletinBoardForm = props => {
  const { classes, addInformationToPost, updateForm } = props
  return (
    <div className={classes.formRoot}>
      <Grid container spacing={1} alignItems='center'>
        <Grid item xs={12} md={6}>
          <div className={classes.actionButtons}>
            <BulletinBoardActionIcons addInformationToPost={addInformationToPost} />
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            onChange={e => updateForm(e, 'title')}
            id='outlined-multiline-static'
            label='Title'
            placeholder='Placeholder'
            variant='outlined'
            value={props.title}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            size='small'
            onChange={e => updateForm(e, 'text')}
            fullWidth
            id='outlined-multiline-static'
            label='What you want to shere'
            placeholder='Placeholder'
            multiline
            rows='4'
            variant='outlined'
            value={props.text}
          />
        </Grid>
      </Grid>
    </div>
  )
}

export default withStyles(styles)(BulletinBoardForm)
