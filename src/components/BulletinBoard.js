import React from 'react'
import BulletinBoardPosts from './BulletinBoardPosts'
import BulletinBoardDialog from './BulletinBoardDialog'
import {Button} from '@material-ui/core'
import { fetchPosts, submitPost, openDialog, closeDialog, addInformationToPost } from '../redux/bulletinBoardReducer'
import { connect } from 'react-redux'
// import Loading from './Loading'

const BulletinBoard = props => {
  // console.log(props)
  return (
    <div style={{width: '100%'}}>
      <Button onClick={() => props.openDialog()} color="primary">Create New Post</Button>
      {/* <BulletinBoardForm {...props} /> */}
      <BulletinBoardPosts {...props} />
      <BulletinBoardDialog {...props}/>      
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const category = ownProps.page.replace('PAGE/BULLETINBOARD_', '')
  return { data: state.bulletinBoard, category: category }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
    submitPost: form => dispatch(submitPost(form)),
    openDialog: () => dispatch(openDialog()),
    closeDialog: () => dispatch(closeDialog()),
    addInformationToPost: (infoType) => dispatch(addInformationToPost(infoType))

    // updateForm: (type, value)=> dispatch(updateForm())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BulletinBoard)
