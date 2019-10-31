export function addItemToCart(cartItems, newItem) {
  const existingCartImte = cartItems.find(
    cartItem => cartItem.id === newItem.id
  );

  if (!existingCartImte) {
    // if items on cart not have prop quantity return
    // new array with  prop quantity
    return [...cartItems, { ...newItem, quantity: 1 }];
  } else {
    return cartItems.map(cartItem =>
      cartItem.id === newItem.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
}

export function clearItemFromCart(cartItems, itemToRemove) {
  return cartItems.filter(item => item.id !== itemToRemove.id);
}

export function removeItemFromCart(cartItems, item) {
  const existingCartItem = cartItems.find(cartItem => cartItem.id === item.id);

  if (existingCartItem.quantity === 1) {
    return clearItemFromCart(cartItems, item);
  } else {
    return cartItems.map(cartItem =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }
}
