import fetch from 'isomorphic-fetch'

export const LOAD_PRODUCTS_REQUEST = 'SHOP/LOAD_PRODUCTS_REQUEST'
export const ADD_PRODUCT_TO_BASKET = 'SHOP/ADD_PRODUCT_TOBASKET'
export const LOAD_PRODUCT_REQUEST = 'SHOP/LOAD_PRODUCT_REQUEST'

export const loadProducts = () => (dispatch) => {
  fetch('/api/products')
    .then(response => response.json())
    .then(products => {
          return dispatch({type: LOAD_PRODUCTS_REQUEST, products: products})
    })
    .catch(e => console.warn(e))
}

export const getProduct = (id) => (dispatch) => {
  console.log('I CALL GET PRODUCT FUNC!')
  fetch(`/api/products/${id}`)
    .then(response => response.json())
    .then(product => {
      return dispatch({
        type: LOAD_PRODUCT_REQUEST,
        product: product
      })
    })
    .catch(error => console.log(error))
}

export const addProductToBASKET = (product) => (dispatch) => {
      return dispatch({type: ADD_PRODUCT_TO_BASKET, product})
}
