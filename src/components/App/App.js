import React from 'react';
import { Grid } from 'semantic-ui-react';
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

    return(
      <Grid columns='equal' padded relaxed>
        <Grid.Row columns={16} style={{padding: '0'}}>
          <Header basket={basket} pathname={pathname} categories={categories}/>
        </Grid.Row>
        <Grid.Row columns={16}>
          {this.props.children}
        </Grid.Row>
        <Grid.Row columns={16} color='grey'>
          HERE WILL BE FOOTER
        </Grid.Row>
      </Grid>
    )
  }
}

export default App
