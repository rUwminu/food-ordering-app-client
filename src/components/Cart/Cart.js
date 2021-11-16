import React, { useState, useEffect } from "react";
import tw from "twin.macro";
import styled from "styled-components";

// Redux
import { useDispatch, useSelector } from "react-redux";

// Icon
import { LocalMall, DeleteForever } from "@mui/icons-material";

const Cart = () => {
  const [getSubTotal, setGetSubTotal] = useState();

  const orderList = useSelector((state) => state.orderList);
  const { myOrder } = orderList;

  const calSubTotal = () => {
    const total = myOrder
      .map((item) => {
        return item.price * item.qty;
      })
      .reduce((prev, next) => prev + next);

    setGetSubTotal(total);
    return total;
  };

  useEffect(() => {
    if (myOrder.length > 0) calSubTotal();
  }, [myOrder]);

  console.log(getSubTotal);

  return (
    <CartContainer>
      <h1 className="box-title">Your Cart</h1>
      <div className="cart-container">
        {myOrder ? (
          myOrder.map((item) => {
            const { id, image, name, qty, price } = item;
            const total = price * qty;

            return (
              <div className="item-card">
                <img src={image} />
                <div className="info-box">
                  <h2>{name}</h2>
                  <div className="info-price">
                    <span className="qty">Qty: {qty}</span>
                    <span>Price: {price}</span>
                    <DeleteForever className="del-btn" />
                  </div>
                </div>
                <div className="total-box">
                  Total: <span>RM{total.toFixed(2)}</span>
                </div>
              </div>
            );
          })
        ) : (
          <div></div>
        )}
      </div>
      {myOrder && (
        <div className="subtotal-container">
          <h2>SubTotal</h2>
          <span>{getSubTotal}</span>
        </div>
      )}
    </CartContainer>
  );
};

const CartContainer = styled.div`
  ${tw`
    w-full
  `}

  .box-title {
    ${tw`
      py-3
      text-xl
      md:text-2xl
      font-semibold
    `}
  }

  .cart-container {
    ${tw`
      h-80
      w-full
      overflow-y-scroll
      scrollbar-hide
    `}
  }

  .item-card {
    ${tw`
      mb-4
      w-full
      flex
      items-start
      justify-start

      transition-all
    `}
    animation: slideInFromRight 0.3s ease-in alternate forwards;

    img {
      ${tw`
        w-[4.5rem]
        h-[4.5rem]
        object-cover
      `}
    }

    .info-box {
      ${tw`
        w-full
        ml-2
        text-sm
        text-gray-600
      `}

      h2 {
        ${tw`
          mb-1
          text-gray-900
          font-semibold
        `}
      }
    }

    .info-price {
      ${tw`
        pr-3
        flex
        items-center
        justify-between
      `}

      .del-btn {
        ${tw`
          w-8
          h-8
          p-1
          text-red-600
          cursor-pointer
          rounded-md

          transition
          duration-200
          ease-in-out
        `}

        :hover {
          ${tw`
            bg-opacity-50
            bg-gray-400
          `}
        }
      }
    }

    .total-box {
      ${tw`
        w-16
        flex
        flex-col
        text-sm
      `}

      span {
        ${tw`
          font-semibold
        `}
      }
    }
  }

  @keyframes slideInFromRight {
    from {
      opacity: 0;
      transform: translateX(50%);
    }
    to {
      opacity: 1;
      transform: translateX(0%);
    }
  }
`;

export default Cart;
