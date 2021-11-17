import {
  USER_SIGNIN_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_ADD_ADDRESS,
} from "../constants/userConstant";

export const userSignInReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SIGNIN_REQUEST:
      return { loading: true };
    case USER_REGISTER_SUCCESS:
      return { loading: false, user: action.payload };
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userPaymentDetailReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_ADD_ADDRESS:
      return { address: action.payload };
    default:
      return state;
  }
};
