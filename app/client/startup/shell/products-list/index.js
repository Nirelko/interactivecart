import React from 'react';
import { Flex } from 'reflexbox';

import Product from './product';

export default () => {
  const arr = ['1', '2', '3', '4'];

  const items = arr.map(item => (
    <Product product={item} key={item} />
  ));

  return (
    <Flex column>
      {items}
    </Flex>
  );
};