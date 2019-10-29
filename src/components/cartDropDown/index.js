import React from "react";

import "./index.scss";

import CustomButtom from "../customButon";

export default function CartDropDown() {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <CustomButtom>GO TO CHECKOUT</CustomButtom>
    </div>
  );
}
