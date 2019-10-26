import React from "react";
import "./index.scss";

export default function Button({ children, isGoogle, ...props }) {
  return (
    <button
      className={`${isGoogle ? "google-sign-in" : ""} custom-button`}
      {...props}
    >
      {children}
    </button>
  );
}
