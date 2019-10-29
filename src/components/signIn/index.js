import React, { useState } from "react";
import "./index.scss";

import FormInput from "../formInput";
import CustomButton from "../customButon";

import { auth, signInWithGoogle } from "../../utils/firebase";

export default function SignIn() {
  const [user, setUser] = useState({ email: "", password: "" });

  const handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = user;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setUser({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = e => {
    const { value, name } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account </h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={e => handleSubmit(e)}>
        <FormInput
          type="email"
          name="email"
          value={user.email}
          handleChange={e => handleChange(e)}
          label="email"
          required
        />

        <FormInput
          type="password"
          name="password"
          value={user.password}
          handleChange={e => handleChange(e)}
          label="password"
          required
        />

        <div className="buttons">
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogle>
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
}
