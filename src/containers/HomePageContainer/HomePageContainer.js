import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import { loadProducts, addProductToBASKET } from '../../actions'
import { HomePage } from '../../components'

function mapDispatchToProps(dispatch) {
  return bindActionCreators({loadProducts, addProductToBASKET}, dispatch);
}

function mapStateToProps(state, props) {
  return state;
}

const HomePageContainer = connect(mapStateToProps, mapDispatchToProps)(HomePage)

export default HomePageContainer
