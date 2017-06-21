import fetch from 'isomorphic-fetch'

export const LOAD_PRODUCTS_REQUEST = 'SHOP/LOAD_PRODUCTS_REQUEST'
export const ADD_PRODUCT_TO_BASKET = 'SHOP/ADD_PRODUCT_TOBASKET'

export const loadProducts = () => (dispatch) => {
      fetch('/products')
            .then(response => response.json())
            .then(products => {
                  return dispatch({type: LOAD_PRODUCTS_REQUEST, products: products})
            })
            .catch(e => console.warn(e))
}

export const addProductToBASKET = (product) => (dispatch) => {
      return dispatch({type: ADD_PRODUCT_TO_BASKET, product})
}
