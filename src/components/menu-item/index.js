import React from "react";
import { withRouter } from "react-router-dom";

import "./index.scss";
function MenuItem({ title, imageUrl, size, history, linkUrl, match }) {
  console.log(history);
  console.log(match);
  console.log(linkUrl);

  return (
    <div
      className={`${size} menu-item `}
      onClick={_ => history.push(`hats/`)}
      // onClick={_ => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      ></div>
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
}

export default withRouter(MenuItem);
