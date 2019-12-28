import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { Grid } from '@material-ui/core'
import BulletinBoardActionIcons from './BulletinBoardActionIcons'
import PublishIcon from '@material-ui/icons/Publish'
import { connect } from 'react-redux'
import { updateForm } from '../redux/bulletinBoardFormReducer'

const useStyles = makeStyles(theme => ({
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
  }))

const BulletinBoardForm = (props) => {
    const {data} = props
    console.log(data)
    const classes = useStyles()
    return (
      <div className={classes.formRoot}>
        <Grid container spacing={1} alignItems='center'>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth onChange={()=>props.updateForm()}
              id='outlined-multiline-static'
              label='Title'
              placeholder='Placeholder'
              variant='outlined'
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <div className={classes.actionButtons}>
              <BulletinBoardActionIcons />
              <div>
                <Button
                  className={classes.postButton}
                  variant='text'
                  color='primary'
                  size='small'
                >
                  <PublishIcon className={classes.icon} /> POST
                </Button>
              </div>
            </div>
          </Grid>
  
          <Grid item xs={12}>
            <TextField
              size='small' onChange={()=>props.updateForm()}
              fullWidth
              id='outlined-multiline-static'
              label='What you want to shere'
              placeholder='Placeholder'
              multiline
              rows='4'
              variant='outlined'
            />
          </Grid>
        </Grid>
      </div>
    )
  }

  const mapStateToProps = (state, ownProps) => {
    return { data: state.bulletinForm }
  }

  const mapDispatchToProps = dispatch => {
    return {
      updateForm: (title, text) => dispatch(updateForm(title, text))
    }
  }
  

  export default connect(mapStateToProps, mapDispatchToProps)(BulletinBoardForm)