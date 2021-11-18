import React, { useState, useEffect } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import moment from "moment";

// Redux
import { useSelector, useDispatch } from "react-redux";
import {
  createNewOrder,
  updatePayOrder,
} from "../../../redux/actions/orderAction";

// mui Icon
import { KeyboardArrowDown } from "@mui/icons-material";

const PaymentForm = ({ setCurrentStep, currentStep }) => {
  const dispatch = useDispatch();

  const [payType, setPayType] = useState("");
  const [payTypeConfirm, setPayTypeConfirm] = useState(false);

  const orderList = useSelector((state) => state.orderList);
  const {
    myCart,
    newOrder: { id, address, product, paymentType, subTotal, isPay, createdAt },
  } = orderList;

  const handleCreateNewOrder = () => {
    if (payType !== "" && myCart.length > 0) {
      setPayTypeConfirm(true);
      dispatch(createNewOrder(payType));
    }
  };

  const handlePayOrder = (orderId) => {
    try {
      setCurrentStep(currentStep + 1);
      dispatch(updatePayOrder(orderId));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <MainContainer>
      <PayTypeContainer>
        <div className={`title-box ${payTypeConfirm && "active"}`}>
          <h1>How You Pay?</h1>
        </div>
        <div
          className={`inner-pay-container ${payTypeConfirm ? "h-0" : "h-full"}`}
        >
          <div
            onClick={() => setPayType("stripe")}
            className={`pay-type-box ${payType === "stripe" && "active"}`}
          >
            Stripe
          </div>
          <div
            onClick={() => setPayType("paypal")}
            className={`pay-type-box ${payType === "paypal" && "active"}`}
          >
            PayPal
          </div>
          <div
            onClick={() => setPayType("card")}
            className={`pay-type-box ${payType === "card" && "active"}`}
          >
            Credit/Debit Card
          </div>
          <div onClick={() => handleCreateNewOrder()} className="con-btn">
            Confirm
          </div>
        </div>
        {/* Order Detail Part */}

        {id && (
          <>
            <div className={`title-box ${!payTypeConfirm && "active"}`}>
              <h1>Your Order</h1>
              {/* <KeyboardArrowDown
                onClick={() => setPayTypeConfirm(!payTypeConfirm)}
                className={`icon`}
              /> */}
            </div>
            <div
              className={`inner-order-container ${
                !payTypeConfirm ? "h-0" : "h-full"
              }`}
            >
              <div className="user-bio">
                <h2>{address.name}</h2>
                <span>{address.phoneNum}</span>
                <span className="address-box">
                  {address.street}, {address.state}
                  <br />
                  {address.postalCode}
                </span>
                <span>Date: {moment(createdAt).format("LLL")}</span>
              </div>
              <div className="product-bio">
                {product &&
                  product.map((item, index) => {
                    const { name, price, qty } = item;

                    return (
                      <div key={index} className="product-list">
                        <h2>{name}</h2>
                        <div className="product-detail">
                          <span>Qty: {qty}</span>
                          <span>RM {price}</span>
                        </div>
                      </div>
                    );
                  })}
              </div>
              <span className="type-text">Pay By {paymentType}</span>
              <h1 className="sub-text">SubTotal: RM {subTotal}</h1>
              <div onClick={() => handlePayOrder(id)} className="pay-btn">
                Make Payment
              </div>
            </div>
          </>
        )}
      </PayTypeContainer>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  ${tw`
    h-full
    w-full
    flex
    flex-col
    items-start
    justify-start
    px-4
    py-6
  `}

  .title-box {
    ${tw`
      relative
      w-full
      pr-4
      flex
      items-center
      justify-between
    `}

    h1 {
      ${tw`
        mb-4
        text-xl
        md:text-2xl
        font-semibold
      `}
    }

    .icon {
      ${tw`
        -mt-2
        h-8
        w-8
        -rotate-180
        rounded-full

        transition-all
        duration-500
        ease-in-out
      `}

      :hover {
        ${tw`
          bg-opacity-50
          bg-gray-300
        `}
      }
    }

    :after {
      content: "";
      ${tw`
        absolute
        left-0
        bottom-0
        w-0
        h-0
        bg-gray-400

        transition-all
        duration-500
        ease-in-out
      `}
    }
  }

  .title-box.active {
    ${tw`
    `}

    .icon {
      ${tw`
        rotate-0
      `}
    }

    :after {
      ${tw`
        w-[80%]
        h-[1px]
      `}
    }
  }
`;

const PayTypeContainer = styled.div`
  ${tw`
    mx-auto
    w-full
    md:max-w-sm
    flex
    flex-col
    items-start
    justify-start

    transition-all
    duration-500
    ease-in-out
  `}

  .inner-pay-container {
    ${tw`
      mb-3
      w-full

      transition-all
      duration-500
      ease-in-out
      overflow-hidden
    `}

    .pay-type-box {
      ${tw`
        w-full
        mb-3
        py-2
        px-4
        text-lg
        font-semibold
        text-gray-800
        border
        border-gray-400
        rounded-md
        cursor-pointer

        transition
        duration-200
        ease-in-out
      `}

      :hover {
        ${tw`
          bg-b-orange
          bg-opacity-10
          shadow-md
        `}
      }
    }

    .pay-type-box.active {
      ${tw`
        bg-b-orange
        text-gray-100
      `}
    }

    .con-btn {
      ${tw`
        w-full
        mb-3
        py-2
        text-lg
        text-center
        font-semibold
        text-gray-100
        bg-green-600
        rounded-md
        cursor-pointer

        transition
        duration-200
        ease-in-out
      `}

      :hover {
        ${tw`
          bg-green-500
          shadow-md
        `}
      }
    }
  }

  .inner-order-container {
    ${tw`
      w-full
      flex
      flex-col
      items-start
      justify-start

      transition-all
      duration-500
      ease-in-out
      overflow-hidden
    `}

    .user-bio {
      ${tw`
        w-full
        flex
        flex-col
        items-start
        justify-start
      `}

      h2 {
        ${tw`
          font-semibold
        `}
      }

      span {
        ${tw`
          text-sm
        `}
      }

      .address-box {
        ${tw`
          py-2
        `}
      }
    }

    .product-bio {
      ${tw`
        py-3
        w-full
        flex
        flex-col
      `}

      .product-detail {
        ${tw`
          mb-1
          w-full
          flex
          items-center
          justify-between
        `}
      }
    }

    .type-text {
      ${tw`
        ml-auto
      `}
    }

    .sub-text {
      ${tw`
        ml-auto
        font-semibold
      `}
    }

    .pay-btn {
      ${tw`
      w-full
      my-4
      py-3
      text-lg
      text-center
      font-semibold
      text-gray-100
      bg-green-600
      rounded-md
      cursor-pointer

      transition
      duration-200
      ease-in-out
    `}

      :hover {
        ${tw`
          bg-green-500
          shadow-md
        `}
      }
    }
  }
`;

export default PaymentForm;
