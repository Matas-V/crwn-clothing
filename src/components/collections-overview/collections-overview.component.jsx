import React from 'react';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';
import { useSelector } from 'react-redux';

import ColletionPreview from '../colletion-preview/colletion-preview.component';
import './collections-overview.styles.scss';

const ColletionsOverview = () => {
  const { collections } = useSelector(createStructuredSelector({
    collections: selectCollectionsForPreview
  }))

  console.log("asdf", collections)

  return (
    <div className='collections-overview'>
      {collections.map(({ id, ...otherColletionProps }) => (
          <ColletionPreview key={id} {...otherColletionProps} />
        ))}
    </div>
  );
};

export default ColletionsOverview;