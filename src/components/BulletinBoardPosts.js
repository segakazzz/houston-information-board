import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import SinglePost from './SinglePost'
import Grid from '@material-ui/core/Grid'

const styles = theme => ({
  listRoot: {
    margin: theme.spacing(1)
  }
})

class BulletinBoardPosts extends React.Component {
  componentDidMount () {
    this.props.fetchPosts()
  }

  render () {
    const { classes, data } = this.props
    // console.log(data.posts)
    return (
      <Grid container spacing={1} className={classes.listRoot}>
        {data.posts.map((obj, idx) => {
          // console.log(obj)
          return (
            <Grid item xs={12} md={6} key={idx}>
              <SinglePost data={obj} />
            </Grid>
          )
        })}
      </Grid>
    )
  }
}

export default withStyles(styles)(BulletinBoardPosts)

