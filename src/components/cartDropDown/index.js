import React from "react";
import { connect } from "react-redux";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import "./index.scss";

import CustomButtom from "../customButon";
import CartItem from "../cartItem";

function CartDropDown({ cartItems }) {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <CustomButtom>GO TO CHECKOUT</CustomButtom>
    </div>
  );
}

const mapStateToProps = state => ({
  cartItems: selectCartItemsCount(state)
});

export default connect(mapStateToProps)(CartDropDown);
