import {
  USER_SIGNIN_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_ADD_ADDRESS,
  USER_REMOVE_ADDRESS,
  USER_LOGOUT,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAIL,
} from "../constants/userConstant";

export const userSignInReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SIGNIN_REQUEST:
      return { loading: true };
    case USER_SIGNIN_SUCCESS:
      return { loading: false, user: action.payload };
    case USER_SIGNIN_FAIL:
      return { loading: false, error: action.payload };
    case USER_REGISTER_SUCCESS:
      return { loading: false };
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return { ...state, user: null };
    default:
      return state;
  }
};

export const userPaymentDetailReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_ADD_ADDRESS:
      return { address: action.payload };
    case USER_REMOVE_ADDRESS:
      return { ...state, address: null };
    default:
      return state;
  }
};
