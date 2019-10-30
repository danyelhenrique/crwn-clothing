import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.action";
import { createStructuredSelector } from "reselect";
import "./App.css";

import HomePage from "./pages/homepage";
import Shop from "./pages/shop";
import Header from "./components/header";
import SignInSignUp from "./pages/sign-in-and-sign-up";
import CheckOut from "./pages/checkout";

import { auth, createUserProfileDocument } from "./utils/firebase";
import { selectCurrentUser } from "./redux/user/user.selectors";

function App({ setUser, currentUser }) {
  useEffect(() => {
    auth.onAuthStateChanged(async userAuth => {
      if (userAuth !== null) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          setUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        });
      } else {
        setUser(null);
      }
    });
    return () => (auth.onAuthStateChanged = null);
  }, []);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={Shop} />
        <Route exact path="/checkout" component={CheckOut} />
        <Route
          exact
          path="/signin"
          render={() => (currentUser ? <Redirect to="/" /> : <SignInSignUp />)}
        />
      </Switch>
    </div>
  );
}

const mapStateToPros = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToPros,
  mapDispatchToProps
)(App);
