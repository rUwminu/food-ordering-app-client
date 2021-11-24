import {
  RES_DETAILS_FAIL,
  RES_DETAILS_REQUEST,
  RES_DETAILS_SUCCESS,
  SINGLE_RES_DETAILS_REQUEST,
  SINGLE_RES_DETAILS_SUCCESS,
  SINGLE_RES_DETAILS_FAIL,
  RECIPES_DETAILS_REQUEST,
  RECIPES_DETAILS_FAIL,
  RECIPES_DETAILS_SUCCESS,
  RES_DETAILS_BY_TYPE_REQUEST,
  RES_DETAILS_BY_TYPE_SUCCESS,
  RES_DETAILS_BY_TYPE_FAIL,
} from "../constants/restaurantConstant";

export const restaurantDetailsRequest = (data) => (dispatch) => {
  dispatch({
    type: RES_DETAILS_REQUEST,
  });

  try {
    if (!data.error) {
      dispatch({
        type: RES_DETAILS_SUCCESS,
        payload: data,
      });
    } else {
      dispatch({
        type: RES_DETAILS_FAIL,
        payload: data.error,
      });
    }
  } catch (err) {
    dispatch({
      type: RES_DETAILS_FAIL,
      payload: data,
    });
  }
};

export const singleRestaurantDetailsRequest = (data) => (dispatch) => {
  dispatch({
    type: SINGLE_RES_DETAILS_REQUEST,
  });

  try {
    if (!data.error) {
      dispatch({
        type: SINGLE_RES_DETAILS_SUCCESS,
        payload: data,
      });
    } else {
      dispatch({
        type: SINGLE_RES_DETAILS_FAIL,
        payload: data.error,
      });
    }
  } catch (err) {
    dispatch({
      type: SINGLE_RES_DETAILS_FAIL,
      payload: data,
    });
  }
};

export const byTypeRestaurantDetailsRequest = (data) => (dispatch) => {
  dispatch({ type: RES_DETAILS_BY_TYPE_REQUEST });

  try {
    dispatch({ type: RES_DETAILS_BY_TYPE_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: RES_DETAILS_BY_TYPE_FAIL, payload: err });
  }
};

export const recipesListRequest = (data) => (dispatch) => {
  dispatch({
    type: RECIPES_DETAILS_REQUEST,
  });

  try {
    if (!data.error) {
      dispatch({
        type: RECIPES_DETAILS_SUCCESS,
        payload: data,
      });
    } else {
      dispatch({
        type: RECIPES_DETAILS_FAIL,
        payload: data.error,
      });
    }
  } catch (err) {
    dispatch({
      type: RECIPES_DETAILS_FAIL,
      payload: data,
    });
  }
};
