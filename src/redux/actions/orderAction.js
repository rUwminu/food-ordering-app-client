import store from "../store/store";
import {
  ADD_ITEM_TO_CART_FAIL,
  ADD_ITEM_TO_CART_REQUEST,
  ADD_ITEM_TO_CART_SUCCESS,
  CREATE_NEW_ORDER,
  DELETE_OLD_ORDER,
  REMOVE_ITEM_FROM_CART,
  UPDATE_PAY_ORDER,
} from "../constants/orderConstant";

export const addItemToCart = (item) => (dispatch) => {
  dispatch({
    type: ADD_ITEM_TO_CART_REQUEST,
  });

  try {
    if (!item.error) {
      dispatch({
        type: ADD_ITEM_TO_CART_SUCCESS,
        payload: item,
      });
    } else {
      dispatch({
        type: ADD_ITEM_TO_CART_FAIL,
        payload: item.error,
      });
    }
  } catch (err) {
    dispatch({
      type: ADD_ITEM_TO_CART_FAIL,
      payload: err,
    });
  }
};

export const removeItemFromCart = (itemId) => (dispatch) => {
  dispatch({
    type: REMOVE_ITEM_FROM_CART,
    payload: itemId,
  });
};

export const createNewOrder = (paymentType) => (dispatch) => {
  try {
    // Get all needed data for new order object, mock api return object
    const randomId = ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(
      /[018]/g,
      (c) =>
        (
          c ^
          (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
        ).toString(16)
    );
    const userAddress = store.getState().addressDetail;
    const productList = store.getState().orderList.myCart;
    const subTotal = productList
      .map((item) => {
        return item.price * item.qty;
      })
      .reduce((prev, next) => prev + next);
    const progressType = ["Preparing", "Delivering", "Delivered"];
    const randomProgress = {
      status: progressType[Math.floor(Math.random() * progressType.length)],
      datetime: Date.now(),
    };

    // Api returned data object
    const newOrderData = {
      id: randomId,
      ...userAddress,
      product: productList,
      progressStep: [randomProgress],
      paymentType,
      subTotal: subTotal.toFixed(2),
      isPay: false,
      createdAt: Date.now(),
    };

    if (paymentType) {
      dispatch({
        type: CREATE_NEW_ORDER,
        payload: newOrderData,
      });
    }
  } catch (err) {
    console.log(err);
  }
};

export const deleteOldOrder = (orderId) => (dispatch) => {
  dispatch({
    type: DELETE_OLD_ORDER,
    payload: orderId,
  });
};

export const updatePayOrder = (orderId) => (dispatch) => {
  dispatch({
    type: UPDATE_PAY_ORDER,
    payload: orderId,
  });
};
