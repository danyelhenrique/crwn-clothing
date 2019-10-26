import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/homepage";
import Shop from "./pages/shop";
import SignInSignUp from "./pages/sign-in-and-sign-up";
import Header from "./components/header";

import { auth } from "./utils/firebase";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user !== null) {
        setCurrentUser(user);
      }
      // console.log(user);
    });
    return () => (auth.onAuthStateChanged = null);
  }, []);

  return (
    <div className="App">
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/signin" component={SignInSignUp} />
      </Switch>
    </div>
  );
}

export default App;
