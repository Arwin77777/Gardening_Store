import React, { useState } from 'react';
import Cart from './cart';

const items = [
  {
    id: 1,
    name: 'Product 1',
    price: 10,
    image: 'https://via.placeholder.com/150',
    description: 'Description for Product 1',
    quantity: 1
  },
  {
    id: 2,
    name: 'Product 2',
    price: 20,
    image: 'https://via.placeholder.com/150',
    description: 'Description for Product 2',
    quantity: 1
  },
  {
    id: 3,
    name: 'Product 3',
    price: 30,
    image: 'https://via.placeholder.com/150',
    description: 'Description for Product 3',
    quantity: 1
  }
];

const HandleCart = () => {


  const [cartItems, setCartItems] = useState(items);

  const handleRemove = id => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleIncrease = id => {
    setCartItems(
      cartItems.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrease = id => {
    setCartItems(
      cartItems.map(item =>
        item.id === id && item.quantity > 0
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <Cart
    
      onRemove={handleRemove}
      onIncrease={handleIncrease}
      onDecrease={handleDecrease}
    />
  );
};

export default HandleCart;
