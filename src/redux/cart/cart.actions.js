import CartActionsType from "./cart.types";

export function toogleCartHidden() {
  return {
    type: CartActionsType.TOOGLE_CART_HIDDEN
  };
}
