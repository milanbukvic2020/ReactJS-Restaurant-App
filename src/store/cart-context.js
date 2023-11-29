import React from 'react';

// const CartContext = React.createContext({
//   items: [],
//   totalAmpunt: 0,
//   addItem: (item) => {},
//   removeItem: (id) => {},
// });
const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
