import React, { useState, useEffect } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import moment from "moment";

// Redux
import { useSelector } from "react-redux";

const MyOrder = () => {
  const [allOrderlist, setAllOrderList] = useState();

  const orderList = useSelector((state) => state.orderList);
  const { myOrder } = orderList;

  useEffect(() => {
    if (myOrder) setAllOrderList(myOrder);
  }, [myOrder]);

  return (
    <MainContainer>
      <h1 className="form-title">My Order</h1>
      <div className="order-list-container">
        {allOrderlist &&
          allOrderlist.map((x) => {
            const {
              id,
              product,
              paymentType,
              subTotal,
              progressStep,
              createdAt,
            } = x;

            return (
              <div className="order-card" key={id}>
                <div className="product-list">
                  {product.map((item) => (
                    <h2>
                      {item.name} X {item.qty}
                    </h2>
                  ))}
                </div>
                <div className="product-info">
                  <div className="product-subtotal">
                    <h3>Total</h3>
                    <span>RM {subTotal}</span>
                  </div>
                  <div className="product-payment">{paymentType}</div>
                  <div className="product-createdat">
                    <h3>Order Date</h3>
                    <span>{moment(createdAt).format("LLL")}</span>
                  </div>
                </div>
                <div
                  className={`product-progress ${
                    progressStep[0].status === "Preparing" && "prephase"
                  } ${progressStep[0].status === "Delivering" && "delphase"} ${
                    progressStep[0].status === "Delivered" && "conphase"
                  }`}
                >
                  {progressStep[0].status}
                </div>
              </div>
            );
          })}
      </div>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-col
    items-start
    justify-start
  `}
  animation: slideInFromRight 0.5s ease alternate forwards;

  .form-title {
    ${tw`
      w-full
      mb-6
      text-xl
      md:text-2xl
      font-semibold
    `}
  }

  .order-list-container {
    ${tw`
      flex
      flex-col
      items-start
      justify-start
      w-full
    `}

    .order-card {
      ${tw`
        flex
        flex-col
        lg:flex-row
        items-start
        justify-between
        mb-4
        p-4
        w-full
        border
        border-gray-300
        rounded-md
        cursor-pointer

        transition
        duration-200
        ease-in-out
      `}

      :hover {
        ${tw`
          border-gray-500
          shadow-md
        `}
      }

      .product-list {
        ${tw`
          w-full
          max-w-sm
        `}
      }

      .product-info {
        ${tw`
          flex
          flex-col
          md:flex-row
          md:items-center
          justify-between
          mt-4
          lg:mt-0
          w-full
        `}
      }

      .product-subtotal {
        ${tw`
          flex
          flex-col
          mb-2
          md:mb-0
        `}

        h3 {
          ${tw`
            font-semibold
          `}
        }
      }

      .product-payment {
        ${tw`
          mb-2
          md:mb-0
        `}
      }

      .product-createdat {
        ${tw`
          flex
          flex-col
          mb-2
          md:mb-0
        `}

        h3 {
          ${tw`
            font-semibold
          `}
        }
      }

      .product-progress {
        ${tw`
          lg:mx-auto
          lg:ml-6
          py-1
          px-4
          font-semibold
          text-gray-50
          bg-opacity-75
          rounded-3xl
        `}
      }

      .product-progress.prephase {
        ${tw`
          bg-yellow-400
        `}
      }

      .product-progress.delphase {
        ${tw`
          bg-blue-500
        `}
      }

      .product-progress.conphase {
        ${tw`
          bg-green-600
        `}
      }
    }
  }

  @keyframes slideInFromRight {
    from {
      opacity: 0;
      transform: translateX(100%);
    }
    to {
      opacity: 1;
      transform: translateX(0%);
    }
  }
`;

export default MyOrder;
