import { applyMiddleware, createStore, compose, combineReducers } from "redux";
import thunk from "redux-thunk";

// Reducer function import
import {
  userPaymentDetailReducer,
  userSignInReducer,
} from "../reducers/userReducer";
import {
  resDetailsReducer,
  recipesListReducer,
} from "../reducers/restaurantReducer";
import { orderListReducer } from "../reducers/orderReducer";

const decodeLocalUser = () => {
  if (localStorage.getItem("user")) {
    const userInfo = JSON.parse(localStorage.getItem("user"));

    // decode user jwt token to check expiry date
    // const decodeToken = jwtDecode(userInfo.token);

    // if (decodeToken.exp * 1000 < Date.now()) {
    //   localStorage.removeItem("user");
    //   return null;
    // } else {
    //   return userInfo;
    // }
    return userInfo;
  }
};

const initialState = {
  userSignIn: {
    user: decodeLocalUser() || null,
  },
  addressDetail: {
    address: JSON.parse(localStorage.getItem("address")),
  },
};

const reducer = combineReducers({
  userSignIn: userSignInReducer,
  addressDetail: userPaymentDetailReducer,
  resList: resDetailsReducer,
  rescipesList: recipesListReducer,
  orderList: orderListReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
