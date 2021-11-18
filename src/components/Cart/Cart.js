import React, { useState, useEffect } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { removeItemFromCart } from "../../redux/actions/orderAction";

// Icon
import { LocalMall, DeleteForever } from "@mui/icons-material";

const Cart = () => {
  const location = useLocation();
  //console.log(location);
  const dispatch = useDispatch();
  const [getSubTotal, setGetSubTotal] = useState(0);

  const orderList = useSelector((state) => state.orderList);
  const { myCart } = orderList;

  const calSubTotal = () => {
    const total = myCart
      .map((item) => {
        return item.price * item.qty;
      })
      .reduce((prev, next) => prev + next);

    setGetSubTotal(total);
    return total;
  };

  const handleDelItemFromCart = async (itemId) => {
    await dispatch(removeItemFromCart(itemId));
  };

  useEffect(() => {
    if (myCart.length > 0) calSubTotal();
    else setGetSubTotal(0);
  }, [myCart]);

  //console.log(getSubTotal);

  return (
    <CartContainer>
      <h1 className="box-title">Your Cart</h1>
      <div className="cart-container">
        {myCart.length > 0 ? (
          myCart.map((item) => {
            const { id, image, name, qty, price } = item;
            const total = price * qty;

            return (
              <div key={id} className="item-card">
                <img src={image} />
                <div className="info-box">
                  <h2>{name}</h2>
                  <div className="info-price">
                    <span className="qty">Qty: {qty}</span>
                    <span>Price: {price}</span>
                    <DeleteForever
                      onClick={() => handleDelItemFromCart(id)}
                      className="del-btn"
                    />
                  </div>
                </div>
                <div className="total-box">
                  <p>Total:</p>
                  <span>RM {total.toFixed(2)}</span>
                </div>
              </div>
            );
          })
        ) : (
          <div className="empty-cart-container">
            <LocalMall className="empty-icon" />
            <h1>Looks Empty</h1>
          </div>
        )}
      </div>
      {myCart && (
        <div className="subtotal-container">
          <div className="subtotal-box">
            <h2>SubTotal</h2>
            <span>RM {getSubTotal.toFixed(2)}</span>
          </div>
          {location.pathname !== "/cart" && (
            <Link to="/cart" className="checkout-btn">
              Checkout
            </Link>
          )}
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
        w-28
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

  .subtotal-container {
    ${tw`
      w-full
      flex
      flex-col
      items-start
      justify-center
    `}

    .subtotal-box {
      ${tw`
        mb-3
        w-full
        flex
        items-center
        justify-between
      `}

      h2 {
        ${tw`
          text-lg
          font-semibold
        `}
      }

      span {
        ${tw`
          font-semibold
        `}
      }
    }

    .checkout-btn {
      ${tw`
        py-1
        px-6
        ml-auto
        font-semibold
        bg-b-orange
        text-gray-200
        rounded-sm
        cursor-pointer

        transition
        duration-200
        ease-in-out
      `}

      :hover {
        ${tw`
          bg-opacity-90
          shadow-md
        `}
      }
    }
  }

  .empty-cart-container {
    ${tw`
      h-full
      w-full
      flex
      flex-col
      items-center
      justify-center
    `}

    .empty-icon {
      ${tw`
        w-40
        h-40
        text-gray-400
      `}
    }

    h1 {
      ${tw`
        text-xl
        md:text-2xl
        font-semibold
        text-gray-900
      `}
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
