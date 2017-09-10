import React from 'react';
import { ListItem } from 'material-ui';
import { Flex } from 'reflexbox';

import Image from './image';

export default ({ product }) => (
  <ListItem>
    <Flex>
      <Image image={product.image} />
      <span>{product.details.id}: {product.count}</span>
    </Flex>
  </ListItem>
);