import React from "react";

import "./index.scss";

export default function FormInput({ handleChange, label, ...props }) {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...props} />
      {label ? (
        <label
          className={`${
            props.value && props.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
}
