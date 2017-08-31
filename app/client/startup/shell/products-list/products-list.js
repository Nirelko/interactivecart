import React from 'react';
import { Flex } from 'reflexbox';
import { RaisedButton } from 'material-ui';

import Product from './product';

export default ({cart, addProductToCart}) => {
  const items = cart.map(item => (
    <Product product={item} key={item} />
  ));

  return (
    <Flex column>
      <RaisedButton label='Add' primary onClick={addProductToCart} />
      {items}
    </Flex>
  );
};

/* export default class ProductsList extends Component {
  constructor () {
    super();

    const { addProductToCart } = this.props;

    this.onAddClick = () => {
      addProductToCart({id: ++counter});
    };
  }

  reder () {
    const items = this.props.cart.map(item => (
      <Product product={item} key={item} />
    ));

    return (
      <Flex column>
        <RaisedButton label='Add' primary onClick={this.onAddClick} />
        {items}
      </Flex>
    );
  }
}*/