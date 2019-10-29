import React from "react";
import "./index.scss";
import { connect } from "react-redux";
import { toogleCartHidden } from "../../redux/cart/cart.actions";

import { ReactComponent as ShoppingIcon } from "../assets/bag.svg";

function CartItem({ toggleMenu }) {
  return (
    <div className="cart-icon" onClick={toggleMenu}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  toggleMenu: () => dispatch(toogleCartHidden())
});

export default connect(
  null,
  mapDispatchToProps
)(CartItem);
