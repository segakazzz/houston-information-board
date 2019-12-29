import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { Grid } from '@material-ui/core'
import BulletinBoardActionIcons from './BulletinBoardActionIcons'
import PublishIcon from '@material-ui/icons/Publish'
import { connect } from 'react-redux'
// import { updateForm } from '../redux/bulletinBoardFormReducer'

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

class BulletinBoardForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      text: ''
    }
    // this.updateForm = this.updateForm.bind(this)
  }

  updateForm(e, field) {
    console.log(e.target.value, field)
    const obj = {}
    obj[field] = e.target.value
    this.setState(obj)
  }

  render () {
    const { data, classes } = this.props
    // console.log(data)
    return (
      <div className={classes.formRoot}>
        <Grid container spacing={1} alignItems='center'>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              onChange={(e) => this.updateForm(e, 'title')}
              id='outlined-multiline-static'
              label='Title'
              placeholder='Placeholder'
              variant='outlined' value={this.state.title}
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
              size='small'
              onChange={(e) => this.updateForm(e, 'text')}
              fullWidth
              id='outlined-multiline-static'
              label='What you want to shere'
              placeholder='Placeholder'
              multiline
              rows='4'
              variant='outlined'
              value={this.state.text}
            />
          </Grid>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { data: state.bulletinForm }
}

const mapDispatchToProps = dispatch => {
  return {
    // updateForm: (field, value) => dispatch(updateForm(field, value))
  }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(BulletinBoardForm))
