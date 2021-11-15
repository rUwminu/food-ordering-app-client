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
} from '../constants/restaurantConstant'

export const restaurantDetailsRequest = (data) => (dispatch) => {
  dispatch({
    type: RES_DETAILS_REQUEST,
  })

  try {
    if (!data.error) {
      dispatch({
        type: RES_DETAILS_SUCCESS,
        payload: data,
      })
    } else {
      dispatch({
        type: RES_DETAILS_FAIL,
        payload: data.error,
      })
    }
  } catch (err) {
    dispatch({
      type: RES_DETAILS_FAIL,
      payload: data,
    })
  }
}

export const singleRestaurantDetailsRequest = (data) => (dispatch) => {
  dispatch({
    type: SINGLE_RES_DETAILS_REQUEST,
  })

  try {
    if (!data.error) {
      dispatch({
        type: SINGLE_RES_DETAILS_SUCCESS,
        payload: data,
      })
    } else {
      dispatch({
        type: SINGLE_RES_DETAILS_FAIL,
        payload: data.error,
      })
    }
  } catch (err) {
    dispatch({
      type: SINGLE_RES_DETAILS_FAIL,
      payload: data,
    })
  }
}

export const recipesListRequest = (data) => (dispatch) => {
  dispatch({
    type: RECIPES_DETAILS_REQUEST,
  })

  try {
    if (!data.error) {
      dispatch({
        type: RECIPES_DETAILS_SUCCESS,
        payload: data,
      })
    } else {
      dispatch({
        type: RECIPES_DETAILS_FAIL,
        payload: data.error,
      })
    }
  } catch (err) {
    dispatch({
      type: RECIPES_DETAILS_FAIL,
      payload: data,
    })
  }
}
