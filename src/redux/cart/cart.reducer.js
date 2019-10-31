import CartActionsTypes from "./cart.types";
import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart
} from "./cart.utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

function cartReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CartActionsTypes.TOOGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case CartActionsTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    case CartActionsTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: clearItemFromCart(state.cartItems, action.payload)
      };
    case CartActionsTypes.REMOVE_ITEM: {
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      };
    }
    default:
      return state;
  }
}

export default cartReducer;
