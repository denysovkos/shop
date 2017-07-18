import React, {Component} from 'react'
import {
  Button,
  Card,
  Icon,
  Image
} from 'semantic-ui-react'

export class ProductTable extends Component {

  drawTable(data) {
  let {addProductToBASKET} = this.props;

  if (!data)
    data = [
      {
        title: 'no title',
        description: 'no description',
        price: 'no price'
      }
    ];

  let rows = data.map(row => {
    return (
      <Card
        href={`/products/${row._id}`} 
        key={`/products/${row._id}`}>
        <Image
            src='https://www.2checkout.com/upload/images/graphic_product_tangible.png'/>
        <Card.Content>
          <Card.Header>
            {row.title}
          </Card.Header>
          <Card.Meta>
            {row.price} грн.
          </Card.Meta>
          <Card.Description>
            {row.description}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button basic color='green' onClick={() => addProductToBASKET(row)}>Buy</Button>
          </div>
        </Card.Content>
      </Card>

    );
  });

  return rows;
}

  render() {
    let {products} = this.props;

    return (
        <Card.Group itemsPerRow={4}>
          {this.drawTable(products)}
        </Card.Group >
    )
  }
}
