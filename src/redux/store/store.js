import { applyMiddleware, createStore, compose, combineReducers } from "redux";
import thunk from "redux-thunk";

// Reducer function import
import {
  resDetailsReducer,
  recipesListReducer,
} from "../reducers/restaurantReducer";
import { orderListReducer } from "../reducers/orderReducer";

const initialState = {
  userSignIn: {
    user: "",
  },
};

const reducer = combineReducers({
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
