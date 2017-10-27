import { changeSort } from './module'
import CamperList from '../../components/CamperList'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  sortBy: state.campers.sortBy,
  asc: state.campers.asc,
})

export default connect(mapStateToProps, { changeSort })(CamperList)
