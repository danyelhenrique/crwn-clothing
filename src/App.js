import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.action";
import "./App.css";

import HomePage from "./pages/homepage";
import Shop from "./pages/shop";
import SignInSignUp from "./pages/sign-in-and-sign-up";
import Header from "./components/header";

import { auth, createUserProfileDocument } from "./utils/firebase";

function App({ setUser }) {
  // console.log(props);

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
  // console.log(currentUser);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/signin" component={SignInSignUp} />
      </Switch>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  null,
  mapDispatchToProps
)(App);
