import {
  ADD_ITEM_TO_CART_FAIL,
  ADD_ITEM_TO_CART_REQUEST,
  ADD_ITEM_TO_CART_SUCCESS,
  CREATE_NEW_ORDER,
  REMOVE_ITEM_FROM_CART,
  UPDATE_PAY_ORDER,
} from "../constants/orderConstant";

export const orderListReducer = (
  state = { myCart: [], myOrder: [], newOrder: {} },
  action
) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART_REQUEST:
      return { ...state, loading: true };
    case ADD_ITEM_TO_CART_SUCCESS:
      const curItem = action.payload;
      const curItemList = state.myCart;
      const checkItem = curItemList.find((obj) => obj.id === curItem.id);

      if (!checkItem) {
        return {
          ...state,
          loading: false,
          myCart: [...state.myCart, action.payload],
        };
      } else {
        const newArray = curItemList.map((item) => {
          var temp = Object.assign({}, item);

          if (temp.id === curItem.id) {
            temp.qty = temp.qty + curItem.qty;
          }

          return temp;
        });

        return {
          ...state,
          loading: false,
          myCart: [...newArray],
        };
      }
    case ADD_ITEM_TO_CART_FAIL:
      return { ...state, loading: false, error: action.payload };
    case REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        myCart: state.myCart.filter((x) => x.id !== action.payload),
      };
    case CREATE_NEW_ORDER:
      return {
        ...state,
        newOrder: action.payload,
        myOrder: [action.payload, ...state.myOrder],
      };
    case UPDATE_PAY_ORDER:
      const currentOrderList = state.myOrder;
      const order = state.myOrder.find((x) => x.id === action.payload);

      if (order) {
        const updatedOrder = { ...order, isPay: true };
        const newArray = currentOrderList.map((item) => {
          var temp = Object.assign({}, item);

          if (temp.id === updatedOrder.id) {
            temp = updatedOrder;
          }

          return temp;
        });

        return {
          ...state,
          myCart: [],
          newOrder: {},
          myOrder: [...newArray],
        };
      } else {
        return state;
      }
    default:
      return state;
  }
};
