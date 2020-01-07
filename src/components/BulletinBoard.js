import React from 'react'
import BulletinBoardPosts from './BulletinBoardPosts'
import BulletinBoardDialog from './BulletinBoardDialog'
import { Button, Typography } from '@material-ui/core'
import {
  fetchPosts,
  submitPost,
  openDialog,
  closeDialog,
  addInformationToPost
} from '../redux/bulletinBoardReducer'
import { connect } from 'react-redux'
// import Loading from './Loading'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  titleArea: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
}))

const BulletinBoard = props => {
  const mapping = {
    GIVEAWAY_SELL: 'Give Away / Sell',
    BUY_NEED: 'Buy / Need',
    EVENTS: 'Event',
    RECRUITMENT: 'Recruitment',
    LIFE: 'Life'
  }
  const classes = useStyles()
  return (
    <div style={{ width: '100%' }}>
      <div className={classes.titleArea}>
        <Typography variant="h5">Bulletin Board - {mapping[props.category]}</Typography>
        <Button onClick={() => props.openDialog()} color='primary'>
          Create New Post
        </Button>
      </div>
      {/* <BulletinBoardForm {...props} /> */}
      <BulletinBoardPosts {...props} />
      <BulletinBoardDialog {...props} />
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
    addInformationToPost: infoType => dispatch(addInformationToPost(infoType))

    // updateForm: (type, value)=> dispatch(updateForm())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BulletinBoard)
