// src/components/ItemList.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, removeItem } from '../actions';
import '../ItemList.css'; // Import the CSS file for ItemList

const ItemList = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);

  const [quantities, setQuantities] = useState({});

  const handleAddToCart = (item) => {
    const quantityToAdd = quantities[item.id] || 1;
    dispatch(addItemToCart({ ...item, quantity: quantityToAdd }));
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem(itemId));
  };

  const handleQuantityChange = (itemId, event) => {
    const newQuantities = { ...quantities, [itemId]: parseInt(event.target.value, 10) || 1 };
    setQuantities(newQuantities);
  };

  // Updated sample list with three items
  const itemList = [
    { id: 1, name: 'Item 1'},
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3'},
  ];

  return (
    <div className="item-list-container">
      <h2>Items List</h2>
      <ul>
        {itemList.map((item) => (
          <li key={item.id}>
            {item.name} - {item.quantity}{' '}
            <input
              type="number"
              min="1"
              value={quantities[item.id] || 1}
              onChange={(e) => handleQuantityChange(item.id, e)}
            />
            <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
            <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
