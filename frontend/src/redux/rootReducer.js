import { combineReducers } from "redux";
import productListReducer from "./product/productReducer";

const rootReducer = combineReducers({
  productList: productListReducer,
});

export default rootReducer;
