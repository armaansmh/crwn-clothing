import React from "react";
import "./collection-item.scss";

const CollectionItem = ({ item }) => (
  <div className="item">
    <div
      className="image-preview"
      style={{
        backgroundImage: `url(${item.imageUrl})`,
      }}
    ></div>
    <div className="item-footer">
      <span className="item-name">{item.name}</span>
      <span className="price">${item.price}</span>
    </div>
  </div>
);

export default CollectionItem;
