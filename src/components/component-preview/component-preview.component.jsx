import React from "react";
import ComponentItem from "../collection-item/collection-item.component"
import "./component-preview.scss";

const ComponentPreview = ({ items, title }) => (
  <div className="preview-component">
    <h1 className="title">{title}</h1>
    <div className="preview">
      {items
        .filter((_, idc) => idc < 4)
        .map((item) => (
            <ComponentItem item={item}/>
        ))}
    </div>
  </div>
);

export default ComponentPreview;
