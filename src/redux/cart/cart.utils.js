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
