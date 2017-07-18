import React, {Component} from 'react';

import {Grid, Loader, Image, Header, Segment, Button, Icon} from 'semantic-ui-react'

import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import { getProduct, addProductToBASKET } from '../../actions'

class ProductPage extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  componentWillMount() {
    let {getProduct} = this.props;
    let {id} = this.props.params;

    getProduct(id);
  }


  render() {
    console.warn('PROD PAGE CLASS', this.props)
    let {selectedProduct = []} = this.props;

    if(!selectedProduct.length) return <Loader active inline />;

    return (
      <Grid columns={16} divided relaxed>
        <Grid.Row columns={16}>
          <Grid.Column width={6}>
            <Image
                src='https://www.2checkout.com/upload/images/graphic_product_tangible.png'/>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header size='tiny'>{selectedProduct[0].category.join('/')}</Header>
            <Header as='h2'>{selectedProduct[0].title}</Header>
            <Segment>
              Описание: <br />
              {selectedProduct[0].description}
            </Segment>
            <Header as='h3'>Цена: {selectedProduct[0].price} грн.</Header>
          </Grid.Column>
          <Grid.Column width={3}>
          <Button.Group>
            <Button primary animated='vertical'>
              <Button.Content hidden><Icon name='shop' /></Button.Content>
              <Button.Content visible>Купить</Button.Content>
            </Button>
            <Button secondary>Хрень!</Button>
          </Button.Group>


          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

function mapDispatchToProps(dispatch) {
  let productActions = {
    getProduct, addProductToBASKET
  }
  return bindActionCreators({getProduct, addProductToBASKET}, dispatch);
}

function mapStateToProps(state, props) {
  let selectedProduct = state.products.product;
  return {selectedProduct};
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
