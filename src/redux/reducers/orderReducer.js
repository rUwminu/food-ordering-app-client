import {
  ADD_ITEM_TO_CART_FAIL,
  ADD_ITEM_TO_CART_REQUEST,
  ADD_ITEM_TO_CART_SUCCESS,
  REMOVE_ITEM_FROM_CART,
} from "../constants/orderConstant";

export const orderListReducer = (state = { myOrder: [] }, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART_REQUEST:
      return { ...state, loading: true };
    case ADD_ITEM_TO_CART_SUCCESS:
      const curItem = action.payload;
      const curItemList = state.myOrder;
      const checkItem = curItemList.find((obj) => obj.id === curItem.id);

      if (!checkItem) {
        return { loading: false, myOrder: [...state.myOrder, action.payload] };
      } else {
        const newArray = curItemList.map((item) => {
          var temp = Object.assign({}, item);

          if (temp.id === curItem.id) {
            temp.qty = temp.qty + curItem.qty;
          }

          return temp;
        });

        return {
          loading: false,
          myOrder: [...newArray],
        };
      }
    case ADD_ITEM_TO_CART_FAIL:
      return { loading: false, ...state, error: action.payload };
    case REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        myOrder: state.myOrder.filter((x) => x.id !== action.payload),
      };
    default:
      return state;
  }
};
