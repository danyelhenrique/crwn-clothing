import React from "react";
import { Route } from "react-router-dom";

import CollectionsOverView from "../../components/collectionsOverView";
import CollectionPage from "../collection";
import "./index.scss";

function Shop({ match }) {
  return (
    <div>
      <Route exact path={`${match.path}`} component={CollectionsOverView} />
      <Route
        exact
        path={`${match.path}/:CollectionId`}
        component={CollectionPage}
      />
    </div>
  );
}

export default Shop;
