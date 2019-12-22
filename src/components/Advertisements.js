import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import SingleAdvertisement from './SingleAdvertisement'
import { Grid } from '@material-ui/core'
import { connect } from 'react-redux'
import { fetchAdvertisements } from '../redux/advertisementsReducer'


const styles = theme => ({
  root: {
    margin: theme.spacing(2)
  }
})

class Advertisements extends React.Component {
  constructor (props) {
    super(props)
  }

  componentDidMount(){
      this.props.fetchAdvertisements()
  }


  render() {
      const {classes, data} = this.props
      return (
        <div className={classes.root}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} xl={4}>
              <SingleAdvertisement />
            </Grid>
            <Grid item xs={12} md={6} xl={4}>
              <SingleAdvertisement />
            </Grid>
            <Grid item xs={12} md={6} xl={4}>
              <SingleAdvertisement />
            </Grid>
            <Grid item xs={12} md={6} xl={4}>
              <SingleAdvertisement />
            </Grid>
            <Grid item xs={12} md={6} xl={4}>
              <SingleAdvertisement />
            </Grid>
          </Grid>
        </div>
      )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {data: state.advertisements}
}
const mapDispatchToProps = dispatch => {
  return {
    fetchAdvertisements: () => dispatch(fetchAdvertisements())
  }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Advertisements))
