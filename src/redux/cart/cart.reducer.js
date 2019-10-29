import CartActionsTypes from "./cart.types";

const INITIAL_STATE = {
  hidden: true
};

function cartReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CartActionsTypes.TOOGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };

    default:
      return state;
  }
}

export default cartReducer;
