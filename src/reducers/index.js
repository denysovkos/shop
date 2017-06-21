// reducers/index.js

import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import products from './products'
import uiSettings from './uiSettings';

const rootReducer = combineReducers({
  routing,
  products,
  uiSettings
})

export default rootReducer
