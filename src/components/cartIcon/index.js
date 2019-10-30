import React from "react";
import "./index.scss";
import { connect } from "react-redux";
import { toogleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { ReactComponent as ShoppingIcon } from "../assets/bag.svg";

function CartItem({ toggleMenu, itemCount }) {
  return (
    <div className="cart-icon" onClick={toggleMenu}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  toggleMenu: () => dispatch(toogleCartHidden())
});

const mapStateToProps = state => ({
  itemCount: selectCartItemsCount(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartItem);
