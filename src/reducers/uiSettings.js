import * as ActionTypes from '../actions'

export default function uiSettingsReducer(state = {}, action) {
  switch (action.type) {
    case ActionTypes.LOAD_UI_SETTINGS_CATEGORIES:
      return {...state, categories: action.categories}
    
    // case ActionTypes.ADD_PRODUCT_TO_BASKET:
    // let basket = state.basket || [];
    // basket.push(action.product);
    // return {...state, basket};  
    
    default:
      return state
  }
}
