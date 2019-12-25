import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import SingleAdvertisement from './SingleAdvertisement'
import { Grid } from '@material-ui/core'
import { connect } from 'react-redux'
import { fetchAdvertisements } from '../redux/advertisementsReducer'

const styles = theme => ({
  root: {
    // margin: theme.spacing(2)
  }
})

class Advertisements extends React.Component {
  // constructor (props) {
  //   super(props)
  // }

  componentDidMount () {
    this.props.fetchAdvertisements()
  }

  render () {
    const { classes, data } = this.props
    console.log(data)
    return <div className={classes.root}>
      {data.isLoading === true ? (
        <div>loading...</div>
      ) : (
        <Grid container spacing={2}>
          {data.advertisements.map((obj, idx) => {
            return (
              <Grid key={idx} item xs={12} md={6} xl={4}>
                <SingleAdvertisement data={obj}/>
              </Grid>
            )
          })}
        </Grid>
      )}
    </div>
  }
}

const mapStateToProps = (state, ownProps) => {
  return { data: state.advertisements }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchAdvertisements: () => dispatch(fetchAdvertisements())
  }
}

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(Advertisements)
)
