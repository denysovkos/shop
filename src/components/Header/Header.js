import React, {Component} from 'react'
import { Link, browserHistory } from 'react-router'

import { Menu, Icon, Dropdown } from 'semantic-ui-react'

export default class Header extends Component {
 
  state = { 
    activeItem: this.props.pathname 
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps !== this.props;
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
    this.handleRedirect(name);
  }

  handleRedirect(route) {
    if(route === 'home') route = '';
    browserHistory.push(`/${route}`)
  }

  handleSumOfOrder() {
    let {basket} = this.props;

    if(!basket) return 'Корзина';
    let sum = basket.reduce((total, b) => {
      return total + Number(b.price) || 0
    }, 0);
    return sum + ' грн.';
  }
  
  drawCategories() {
    let {categories} = this.props;

    if(!categories) return;

    return Object.keys(categories).map(root => {
      return (
        <Dropdown item text={root} icon='chevron down' style={{paddingTop: 25, paddingBottom: 0}}>
        <Dropdown.Menu>
          {Object.values(categories[root]).map(item => {
            return <Dropdown.Item icon='user'>{item}</Dropdown.Item>
          })}
        </Dropdown.Menu>
      </Dropdown>
      )
    })
  }

  render() {
    const { activeItem } = this.state;
    let {basket, categories} = this.props;

    console.log('>>>>>>', categories)

    return (
      <Menu icon='labeled' color='blue'>
        <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}>
          <Icon name='home' />
          <Link to='/'>Главная</Link>
        </Menu.Item>
        <Menu.Item name='about' active={activeItem === 'about'} onClick={this.handleItemClick}>
          <Icon name='id card outline' />
          <Link to='/about'>Про нас</Link>
        </Menu.Item>
        
          {this.drawCategories()}

        <Menu.Menu position='right'>
        <Menu.Item name='order' active={activeItem === 'order'} onClick={this.handleItemClick}>
          <Icon name='shopping bag' />
          <Link to='/order'>{this.handleSumOfOrder()}</Link>
        </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}
