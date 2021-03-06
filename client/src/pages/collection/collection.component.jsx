import React from 'react';
import { useSelector } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selectors';

import CollectionItem from '../../components/colletion-item/colletion-item.component';
import './collection.styles.scss';

const CollectionPage = ({ match }) => {
  const { title, items } = useSelector((state) => selectCollection(match.params.collectionId)(state))

  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;