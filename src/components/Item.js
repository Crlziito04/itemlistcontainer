import React from 'react';

const Item = ({ item }) => {
  return (
    <div>
      <p>
        name: {item.name}, description: {item.description}, stock: {item.stock}
      </p>
    </div>
  );
};

export default Item;
