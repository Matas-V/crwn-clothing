import React from "react";

import SHOP_DATA from './shop.data';

import ColletionPreview from "../../components/colletion-preview/colletion-preview.component";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    }
  }

  render() {
    const { collections } = this.state;

    return (
      <div className="shop-page">
        {
          collections.map(({ id, ...otherColletionProps }) => (
            <ColletionPreview key={id} {...otherColletionProps} />
          ))
        }
      </div>
    )
  }
}

export default ShopPage;