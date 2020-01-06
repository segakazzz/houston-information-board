import React from 'react'
import BulletinBoardPosts from './BulletinBoardPosts'
import BulletinBoardForm from './BulletinBoardForm'
import { fetchPosts, submitPost, openDialog, closeDialog } from '../redux/bulletinBoardReducer'
import { connect } from 'react-redux'
// import Loading from './Loading'

const BulletinBoard = props => {
  return (
    <div style={{width: '100%'}}>
      <BulletinBoardForm {...props} />
      <BulletinBoardPosts {...props} />
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
    openDialog: dialogType => dispatch(openDialog(dialogType)),
    closeDialog: () => dispatch(closeDialog())

    // updateForm: (type, value)=> dispatch(updateForm())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BulletinBoard)
