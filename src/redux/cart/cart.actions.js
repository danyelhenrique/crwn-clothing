import CartActionsType from "./cart.types";

export function toogleCartHidden() {
  return {
    type: CartActionsType.TOOGLE_CART_HIDDEN
  };
}

export function addItem(payload) {
  return {
    type: CartActionsType.ADD_ITEM,
    payload
  };
}

export function removeItem(payload) {
  return {
    type: CartActionsType.REMOVE_ITEM,
    payload
  };
}

export function clearItemFromCart(payload) {
  return {
    type: CartActionsType.CLEAR_ITEM_FROM_CART,
    payload
  };
}
