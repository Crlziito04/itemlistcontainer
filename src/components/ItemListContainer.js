import React from 'react';

const items = [
  {
    id: 1,
    name: 'rose',
    description: 'a very good product for your girlfriend',
    stock: 100,
  },
  {
    id: 2,
    name: 'primrose',
    description: 'awesome sweater for your mother',
    stock: 100,
  },
  {
    id: 3,
    name: 'veryred',
    description: 'perfect for your father',
    stock: 100,
  },
];

import ItemList from './ItemList';

const ItemListContainer = () => {
  return <ItemList items={items} />;
};

export default ItemListContainer;
