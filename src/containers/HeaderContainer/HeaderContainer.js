import { connect } from 'react-redux'
import { Header } from '../../components'

const mapStateToProps = (state) => {
  return Object.assign({}, state, basket);
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)

export default HeaderContainer
