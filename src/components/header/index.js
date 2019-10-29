import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./index.scss";
import CartItem from "../cartIcon";
import CartDropDown from "../cartDropDown";

import { ReactComponent as Logo } from "../assets/crown.svg";

import { auth } from "../../utils/firebase";

function Header({ currentUser, hidden }) {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          SHOP
        </Link>
        <Link to="/shop" className="option">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CartItem />
      </div>

      {hidden ? null : <CartDropDown />}
    </div>
  );
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  hidden: state.cart.hidden
});

export default connect(mapStateToProps)(Header);
