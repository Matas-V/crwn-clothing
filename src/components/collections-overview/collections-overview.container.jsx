import { useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectIsCollectionFetching } from "../../redux/shop/shop.selectors";
import WithSpinner from "../with-spinner/with-spinner.component";
import ColletionsOverview from "./collections-overview.component";

const CollectionOverviewComp = WithSpinner(ColletionsOverview)

const CollectionOverviewContainer = () => {
  const { isLoading } = useSelector(createStructuredSelector({
    isLoading: selectIsCollectionFetching,
  }))

  return (<CollectionOverviewComp isLoading={isLoading} />)
}

export default CollectionOverviewContainer;