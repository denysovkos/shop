import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { loadProducts, loadCategories } from '../../actions';
import { App } from '../../components';
import 'semantic-ui-css/semantic.min.css';

function mapDispatchToProps(dispatch) {
  let actions = Object.assign({}, {loadProducts, loadCategories});
  return bindActionCreators(actions, dispatch);
}

function mapStateToProps(state, props) {
  let {products, uiSettings} = state;
  return {products, uiSettings}
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)

export default AppContainer
