import React from 'react';
import { HeaderContainer, HomePageContainer } from '../../containers';
import { Header } from '../../components';


class App extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.loadCategories();
    this.props.loadProducts();
  }

  handleClick = (e) => console.log(this.props);

  render() {
    let products = this.props.products.products;
    let {basket} = this.props.products;
    let {categories} = this.props.uiSettings;

    let {pathname} = this.props.location;
    pathname = pathname.slice(1);

    const style = {
      margin: '0.5em',
      padding: '0.5em'
    };

    return(
      <div style={style}>
        <Header basket={basket} pathname={pathname} categories={categories}/>
        {this.props.children}
      </div>
    )
  }
}

export default App
