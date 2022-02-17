import { combineReducers } from "redux";
import cartReducer from './cartReducer';
import productReducer from "./productReducer";
import bannerReducer from "./bannerReducer"

const rootReducer = combineReducers({
  cartReducer,
  productReducer,
  bannerReducer
});

export default rootReducer;