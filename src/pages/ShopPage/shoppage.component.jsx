import React from "react";
import SHOP_DATA from "./ShopPageData";
import ComponentPreview from "../../components/component-preview/component-preview.component";
import "./shoppage.scss";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: SHOP_DATA,
    };
  }

  render() {
    return (
      <div className="shop-page">
        {this.state.content.map((item) => {
          return (
            <ComponentPreview
              items={item.items}
              title={item.title}
              key={item.id}
            />
          );
        })}
      </div>
    );
  }
}

export default ShopPage;
