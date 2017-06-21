import React, {Component} from 'react'
import {
  Button,
  Table,
  Icon,
  Image,
  Menu,
  Label, Input
} from 'semantic-ui-react'

import {keyBy, isEqual} from 'lodash';


export default class OrderPage extends Component {

    constructor(props) {
        super(props);

        this.handleChangeQtty = this.handleChangeQtty.bind(this);
    }

    componentWillMount() {
        let {basket} = this.props;
        if(!basket) basket = [];

        basket = keyBy(basket, 'title');

        Object.keys(basket).map((key, index) => {
            function count(val, basketFromProps) {
                let res =  basketFromProps.filter(x => isEqual(x, val)).length;
                return res;
            }

            basket[key] = Object.assign({}, basket[key], {quantity: count(basket[key], this.props.basket)});
        });

        this.setState({basket});
    }

    handleSumOfOrder() {
        let {basket} = this.state;

        if(!basket) return 0 + 'UAH';

        let sum = Object.keys(basket).reduce((total, item) => {
            let count = basket[item].price * basket[item].quantity;
            return total + count;
        }, 0);
        
        return sum + ' грн.';
    }

    handleChangeQtty(e, {name, value}) {
        let {basket} = this.state;
        basket[name].quantity = value;

        this.setState({basket});
    }

  render() {
    let {basket} = this.state;
    if(!basket) basket = {};

    console.warn('ORDER STATE:', this.state);

    return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Название товара</Table.HeaderCell>
          <Table.HeaderCell>Количество</Table.HeaderCell>
          <Table.HeaderCell>Цена</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
          {
            Object.keys(basket).map((key, index) => {
                return (
                <Table.Row>
                    <Table.Cell>{basket[key].title}</Table.Cell>
                    <Table.Cell><Input placeholder='Name' name='key'
                    name={key} value={basket[key].quantity} onChange={this.handleChangeQtty}/></Table.Cell>
                    <Table.Cell>{basket[key].price} грн.</Table.Cell>
                </Table.Row>
              )
            })
          }




          
      </Table.Body>

      <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan='2' textAlign='right'>
          Всего:
        </Table.HeaderCell>
        <Table.HeaderCell colSpan='2'>
          {this.handleSumOfOrder()}
        </Table.HeaderCell>
      </Table.Row>
      <Table.Row>
        <Table.HeaderCell colSpan='4' textAlign='right'>
            <Button.Group>
                <Button positive>Оформить заказ</Button>
                <Button.Or text='или' />
                <Button >Продолжить покупки</Button>
            </Button.Group>
        </Table.HeaderCell>
      </Table.Row>
      </Table.Footer>
    </Table>


    )    
  }
}





/*{basket.length > 0 ? basket.map(prod => {
              return (
                <Table.Row>
                    <Table.Cell>{prod.title}</Table.Cell>
                    <Table.Cell>1</Table.Cell>
                    <Table.Cell>{prod.price} грн.</Table.Cell>
                </Table.Row>
              )
          }) : <Table.Row>
                    <Table.Cell colSpan='3'>Nothing here :(</Table.Cell>
                </Table.Row>}*/
