import React from "react";
import { connect } from "react-redux";
import { selectColletion } from "../../redux/shop/shop.selectos";

import CollectionItem from "../../components/collectionItem";

import "./index.scss";

function Collection({ collection }) {
  const { title, items } = collection;

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const ownPropsMatch = ownProps.match.params.CollectionId.toLowerCase();
  return {
    collection: selectColletion(ownPropsMatch)(state)
  };
};

export default connect(mapStateToProps)(Collection);
