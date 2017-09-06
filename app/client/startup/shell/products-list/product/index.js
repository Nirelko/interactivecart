import React from 'react';
import { ListItem } from 'material-ui';

export default ({ product }) => (
  <ListItem>
    <span>{product.id}: {product.count}</span>
  </ListItem>
);