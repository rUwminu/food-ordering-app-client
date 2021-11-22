import store from "../store/store";
import {
  USER_ADD_ADDRESS,
  USER_LOGOUT,
  USER_REMOVE_ADDRESS,
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
} from "../constants/userConstant";

export const userSignInAccount = (user) => (dispatch) => {
  dispatch({ type: USER_SIGNIN_REQUEST });

  try {
    localStorage.setItem("user", JSON.stringify(user));
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: user });
  } catch (err) {
    dispatch({ type: USER_SIGNIN_FAIL, payload: err });
  }
};

export const userAddAddress = (data) => (dispatch) => {
  if (data) {
    localStorage.setItem("address", JSON.stringify(data));
    dispatch({ type: USER_ADD_ADDRESS, payload: data });
  }
};

export const userLogout = () => (dispatch) => {
  dispatch({ type: USER_LOGOUT });
  dispatch({ type: USER_REMOVE_ADDRESS });

  localStorage.removeItem("user");
  localStorage.removeItem("address");
};

export const testAction = () => (dispatch) => {
  console.log(store.getState().addressDetail);
};
