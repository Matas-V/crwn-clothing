import React, { useEffect, useState } from "react";
import { Route } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";
import { updateCollections } from '../../redux/shop/shop.actions';

import ColletionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionOverviewWithSpinner = WithSpinner(ColletionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({ match }) => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const collectionRef = firestore.collection('collections');
    let unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = await convertCollectionsSnapshotToMap(snapshot);
      dispatch(updateCollections(collectionsMap));
      setIsLoading(false);
    })

    return () => {
      unsubscribeFromSnapshot();
    }
  }, [])

  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={isLoading} {...props} />} />
      <Route path={`${match.path}/:collectionId`} render={props => <CollectionPageWithSpinner isLoading={isLoading} {...props} />} />
    </div>
  );
};

export default ShopPage;