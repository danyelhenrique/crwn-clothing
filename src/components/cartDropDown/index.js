import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { withRouter } from "react-router-dom";
import "./index.scss";

import CustomButtom from "../customButon";
import CartItem from "../cartItem";

function CartDropDown({ cartItems, history, dispatch }) {
  const pushAndToggleDropdown = _ => {
    dispatch({ type: "TOOGLE_CART_HIDDEN" });
    history.push("/checkout");
  };
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map(item => <CartItem key={item.id} item={item} />)
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButtom onClick={pushAndToggleDropdown}>
        GO TO CHECKOUT
      </CustomButtom>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropDown));
