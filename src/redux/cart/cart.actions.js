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
