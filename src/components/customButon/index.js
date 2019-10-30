import React from "react";
import "./index.scss";

export default function Button({ children, isGoogle, inverted, ...props }) {
  return (
    <button
      className={` 
      ${inverted ? "inverted" : ""} 
      ${isGoogle ? "google-sign-in" : ""} custom-button`}
      {...props}
    >
      {children}
    </button>
  );
}
