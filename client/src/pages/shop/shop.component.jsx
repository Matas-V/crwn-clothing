import React, { useEffect } from "react";
import { Route } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selectors";
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

import WithSpinner from "../../components/with-spinner/with-spinner.component";
import CollectionOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionPage from "../collection/collection.component";

const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({ match }) => {
  const dispatch = useDispatch();
  const { isCollectionsLoaded } = useSelector(createStructuredSelector({
    isCollectionsLoaded: selectIsCollectionsLoaded,
  }))

  useEffect(() => {
    dispatch(fetchCollectionsStart());
  }, [dispatch])

  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverviewContainer} />
      <Route path={`${match.path}/:collectionId`} render={props => (<CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props} />)} />
    </div>
  );
};

export default ShopPage;