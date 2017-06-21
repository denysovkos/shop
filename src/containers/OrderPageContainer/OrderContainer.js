import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import { loadProducts, addProductToBASKET } from '../../actions'
import { OrderPage } from '../../components'

function mapDispatchToProps(dispatch) {
  return bindActionCreators({loadProducts, addProductToBASKET}, dispatch);
}

function mapStateToProps(state, props) {
    let {basket} = state.products;
  return {basket};
}

const HomePageContainer = connect(mapStateToProps, mapDispatchToProps)(OrderPage)

export default HomePageContainer
