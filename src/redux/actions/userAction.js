import { USER_ADD_ADDRESS } from "../constants/userConstant";

export const userSignInAccount = (user) => (dispatch) => {};

export const userAddAddress = (data) => (dispatch) => {
  if (data) {
    localStorage.setItem("address", JSON.stringify(data));
    dispatch({ type: USER_ADD_ADDRESS, payload: data });
  }
};
