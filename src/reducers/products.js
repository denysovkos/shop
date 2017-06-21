import * as ActionTypes from '../actions'

export default function productsReducer(state = {}, action) {
  switch (action.type) {
    case ActionTypes.LOAD_PRODUCTS_REQUEST:
      return {...state, products: action.products}
    
    case ActionTypes.ADD_PRODUCT_TO_BASKET:
    let basket = state.basket || [];
    basket.push(action.product);
    return {...state, basket};  
    
    default:
      return state
  }
}
