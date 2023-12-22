// src/actions/index.js
export const addItemToCart = (item) => ({
    type: 'ADD_ITEM_TO_CART',
    payload: item,
  });
  
  export const removeItem = (itemId) => ({
    type: 'REMOVE_ITEM',
    payload: itemId,
  });
  