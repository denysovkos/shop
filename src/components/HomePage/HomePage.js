import React, {Component} from 'react';
import { Grid } from 'semantic-ui-react'
import {ProductTable} from '../ProductTable/ProductTable.jsx';

export default class HomePage extends Component {

  render() {
    let {addProductToBASKET} = this.props;
    let {products} = this.props.products;

    return  (
            <Grid.Row columns={16}>
              <ProductTable products={products} addProductToBASKET={addProductToBASKET} />
            </Grid.Row>
          )
  }
}
