import React, { useState } from "react";

import "./index.scss";

import FormInput from "../formInput";
import CustomButtom from "../customButon";

import { auth, createUserProfileDocument } from "../../utils/firebase";

const INITIAL_STATE = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: ""
};

export default function SignUp() {
  const [user, setUser] = useState({ ...INITIAL_STATE });

  const handleSubmit = async e => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = user;

    if (password !== confirmPassword) {
      alert("passwords dont match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      setUser({ ...INITIAL_STATE });
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div className="sign-up">
      <h2 className="title"> I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={e => handleSubmit(e)}>
        <FormInput
          type="text"
          name="displayName"
          value={user.displayName}
          onChange={e => handleChange(e)}
          label="Display Name"
          required
        ></FormInput>

        <FormInput
          type="email"
          name="email"
          value={user.email}
          onChange={e => handleChange(e)}
          label="Email"
          required
        ></FormInput>

        <FormInput
          type="password"
          name="password"
          value={user.password}
          onChange={e => handleChange(e)}
          label="Password"
          required
        ></FormInput>

        <FormInput
          type="password"
          name="confirmPassword"
          value={user.confirmPassword}
          onChange={e => handleChange(e)}
          label="Confirm Password"
          required
        ></FormInput>

        <CustomButtom type="submit">SIGN UP</CustomButtom>
      </form>
    </div>
  );
}
