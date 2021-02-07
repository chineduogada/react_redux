import { combineReducers } from "redux";
import cakeReducer from "./cakes/cakeReducer";
import iceCreamReducer from "./iceCreams/iceCreamReducer";
import userReducer from "./users/userReducer";

const reducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  users: userReducer,
});

export default reducer;
