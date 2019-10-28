import React from "react";

import "./index.scss";
import SignIn from "../../components/signIn";
import SignUp from "../../components/signUp";

export default function SignInAndSignUp() {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
}
