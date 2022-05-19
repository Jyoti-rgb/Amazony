import { combineReducers } from "redux";
import { cartReducer } from "./cart/cartReducer";
import productListReducer from "./product/productReducer";
import productDetailsReducer from "./productScreen/productScreenReducer";
import { userSigninReducer } from "./signin/userReducer";

const rootReducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userSignin: userSigninReducer,
});

export default rootReducer;
