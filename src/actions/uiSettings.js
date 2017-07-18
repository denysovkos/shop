import fetch from 'isomorphic-fetch'

export const LOAD_UI_SETTINGS_CATEGORIES = 'UI/LOAD_UI_SETTINGS_CATEGORIES'
//export const ADD_PRODUCT_TO_BASKET = 'SHOP/ADD_PRODUCT_TOBASKET'

export const loadCategories = () => (dispatch) => {
      fetch('/api/ui/categories')
            .then(response => response.json())
            .then(categories => {
                  categories = categories[categories.length - 1];
                  return dispatch({type: LOAD_UI_SETTINGS_CATEGORIES, categories: categories.categories})
            })
            .catch(e => console.warn(e))
}

// export const addProductToBASKET = (product) => (dispatch) => {
//       return dispatch({type: ADD_PRODUCT_TO_BASKET, product})
// }
