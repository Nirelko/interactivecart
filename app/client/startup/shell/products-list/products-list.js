import React from 'react';
import { Flex } from 'reflexbox';
import { List } from 'material-ui';
import _ from 'lodash';

import Product from './product';

export default ({cart}) => {
  const items = _.map(cart, (count, id) => (
    <Product product={({id, count})} key={id} />
  ));

  return (
    <Flex column>
      <List>
        {items}
      </List>
    </Flex>
  );
};