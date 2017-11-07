import { changeSort } from './module'
import CamperList from '../../components/CamperList'
import { connect } from 'react-redux'

// takes in redux state and returns props.
const mapStateToProps = state => ({
  sortBy: state.campers.sortBy,
  asc: state.campers.asc,
  campers: state.campers.campers,
})

export default connect(mapStateToProps, { changeSort })(CamperList)
