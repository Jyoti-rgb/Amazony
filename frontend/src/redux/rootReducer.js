import { combineReducers } from "redux";
import productListReducer from "./product/productReducer";
import productDetailsReducer from "./productScreen/productScreenReducer";

const rootReducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
});

export default rootReducer;
