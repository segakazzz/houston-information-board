import React from 'react'
import BulletinBoardPosts from './BulletinBoardPosts'
import BulletinBoardForm from './BulletinBoardForm'
import {fetchPosts, submitPost } from '../redux/bulletinBoardReducer'
import {connect} from 'react-redux' 


const BulletinBoard = (props) => {
  return (
    <div>
      <BulletinBoardForm {...props} />
      <BulletinBoardPosts {...props} />
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return { data: state.bulletinBoard }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
    submitPost: (form)=>dispatch(submitPost(form)),
    // updateForm: (type, value)=> dispatch(updateForm())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BulletinBoard)
