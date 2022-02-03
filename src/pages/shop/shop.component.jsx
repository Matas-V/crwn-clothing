import React, { useState } from "react";

import SHOP_DATA from './shop.data';

import ColletionPreview from "../../components/colletion-preview/colletion-preview.component";

const ShopPage = () => {
  const [collections, setCollections] = useState(SHOP_DATA || []);

  return (
    <div className="shop-page">
      {
        collections.map(({ id, ...otherColletionProps }) => (
          <ColletionPreview key={id} {...otherColletionProps} />
        ))
      }
    </div>
  );
};

export default ShopPage;