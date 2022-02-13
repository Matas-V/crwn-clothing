import { useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import CollectionPage from "./collection.component";

const CollectionPageComp = WithSpinner(CollectionPage);

const CollectionPageContainer = ({ match }) => {
  const { isLoading } = useSelector(createStructuredSelector({
    isLoading: selectIsCollectionsLoaded
  }))

  return <CollectionPageComp isLoading={!isLoading} />
}

export default CollectionPageContainer;