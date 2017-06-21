import React, {Component} from 'react'
import {ProductTable} from '../ProductTable/ProductTable.jsx';

export default class HomePage extends Component {

  render() {
    let {addProductToBASKET} = this.props;
    let {products} = this.props.products;

    return <ProductTable products={products} addProductToBASKET={addProductToBASKET} />    
  }
}
