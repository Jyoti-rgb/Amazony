import { combineReducers } from "redux";
import { cartReducer } from "./cart/cartReducer";
import productListReducer from "./product/productReducer";
import productDetailsReducer from "./productScreen/productScreenReducer";

const rootReducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
});

export default rootReducer;
