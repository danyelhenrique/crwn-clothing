import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import PreviewCollection from "../previewCollection";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectos";
import "./index.scss";

function CollectionsOverView({ collections }) {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...colletion }) => (
        <PreviewCollection key={id} {...colletion} />
      ))}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverView);
