import React from 'react'
import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  Button
} from '@material-ui/core'
import BulletinBoardForm from './BulletinBoardForm'
import PublishIcon from '@material-ui/icons/Publish'

class BulletinBoardDialog extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      title: '',
      text: '',
      category: props.category
    }
    this.submitPost = this.submitPost.bind(this)
    this.updateForm = this.updateForm.bind(this)
  }

  componentDidUpdate (prevProps, prevState) {
    if (this.props.category !== prevProps.category) {
      this.setState({
        category: this.props.category
      })
    }
  }

  updateForm (e, field) {
    // console.log(e.target.value, field)
    const obj = {}
    obj[field] = e.target.value || ''
    this.setState(obj)
  }

  submitPost () {
    this.props.submitPost(this.state)
    this.setState({
      title: '',
      text: ''
    })
  }

  // console.log(props)
  render () {
    const { data, closeDialog } = this.props
    return (
      <Dialog
        open={data.openDialog}
        onClose={closeDialog}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>{'Create New Post'}</DialogTitle>
        <DialogContent>
          <BulletinBoardForm {...this.props} {...this.state} updateForm={this.updateForm.bind(this)}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDialog} color='primary'>
            Cancel
          </Button>
          <Button
            // className={classes.postButton}
            variant='text'
            color='primary'
            size='small'
            onClick={this.submitPost}
          >
            <PublishIcon /> POST
          </Button>
        </DialogActions>
      </Dialog>
    )
  }
}
export default BulletinBoardDialog