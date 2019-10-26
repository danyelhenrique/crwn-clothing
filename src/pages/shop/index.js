import React, { useState } from "react";
import ShopData from "./shopData";
import PreviewCollection from "../../components/previewCollection";
import "./index.scss";

export default function Shop() {
  const [collections, setCollections] = useState(ShopData);
  console.log(collections);

  return (
    <div>
      {collections.map(({ id, ...colletion }) => (
        <PreviewCollection key={id} {...colletion} />
      ))}
    </div>
  );
}
