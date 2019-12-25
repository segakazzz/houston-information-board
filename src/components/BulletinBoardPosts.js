import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { fetchPosts } from '../redux/bulletinBoardPostsReducer'

const styles = theme => ({
  listRoot: {
    margin: theme.spacing(1)
  }
})

class BulletinBoardPosts extends React.Component{
    componentDidMount () {
        this.props.fetchPosts()
    }
    
    render () {
        const {classes, data} = this.props
        console.log(data.posts)
        return <div className={classes.listRoot}>
            {
                data.posts.map((obj, idx) => {
                    console.log(obj)
                return <div key={idx}>{obj.title}</div>
                })
            }
        </div>
    }
} 

const mapStateToProps = (state, ownProps) => {
  return { data: state.bulletinPosts }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: () => dispatch(fetchPosts())
  }
}

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(BulletinBoardPosts)
)
