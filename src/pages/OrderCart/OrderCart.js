import React, { useState, useEffect } from "react";
import tw from "twin.macro";
import styled from "styled-components";

// Redux
import { useSelector, useDispatch } from "react-redux";

// components
import {
  Cart,
  MultiStepProgressbar,
  LoginForm,
  AddressForm,
  PaymentForm,
  CompleteForm,
} from "../../components/index";

const stepList = [
  {
    id: 1,
    type: "Login",
  },
  {
    id: 2,
    type: "Address",
  },
  {
    id: 3,
    type: "Payment",
  },
  {
    id: 4,
    type: "Complete",
  },
];

const OrderCart = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const formArray = [
    <LoginForm />,
    <AddressForm setCurrentStep={setCurrentStep} currentStep={currentStep} />,
    <PaymentForm setCurrentStep={setCurrentStep} currentStep={currentStep} />,
    <CompleteForm />,
  ];

  const userSignIn = useSelector((state) => state.userSignIn);
  const { user } = userSignIn;

  const orderList = useSelector((state) => state.orderList);
  const { myCart } = orderList;

  useEffect(() => {
    if (user) {
      setCurrentStep(1);
    }
  }, [user]);

  //console.log(user);

  return (
    <OrderCartContainer>
      <div className="inner-container">
        {myCart && myCart.length > 0 && (
          <MultiStepForm>
            <MultiStepProgressbar
              stepList={stepList}
              currentStep={currentStep}
            />
            <div className="form-container">
              {formArray &&
                formArray.map((x, index) => {
                  let position = "nextSlide";
                  if (currentStep === index) {
                    position = "activeSlide";
                  }

                  if (
                    currentStep === index - 1 ||
                    (index === 0 && currentStep === x.length - 1)
                  ) {
                    position = "lastSlide";
                  }

                  return (
                    <div
                      key={index}
                      className={`absolute-container ${position}`}
                    >
                      {x}
                    </div>
                  );
                })}
            </div>
          </MultiStepForm>
        )}
        <div className="cart-container">
          <Cart />
        </div>
      </div>
    </OrderCartContainer>
  );
};

const OrderCartContainer = styled.div`
  ${tw`
    pt-28
    pb-16
    w-full
    h-full
    min-h-[100vh]
  `}

  .inner-container {
    ${tw`
      px-4
      lg:px-0
      mx-auto
      min-h-[30rem]
      w-full
      max-w-6xl
      flex
      flex-col-reverse
      md:flex-row
      items-center
      md:items-center
      justify-center
    `}

    .cart-container {
      ${tw`
        w-full
        md:max-w-sm
      `}
    }
  }

  .lastSlide {
    opacity: 0;
    transform: translateX(100%);
  }

  .activeSlide {
    opacity: 1;
    transform: translateX(0%);
  }

  .nextSlide {
    opacity: 0;
    transform: translateX(-100%);
  }
`;

const MultiStepForm = styled.div`
  ${tw`
    md:mr-8
    h-full
    w-full
    flex
    flex-col
    items-center
    justify-start
    overflow-x-hidden
  `}

  .form-container {
    ${tw`
      relative
      flex
      items-center
      justify-center
      mt-10
      w-full
      h-full
      min-h-[25rem]
      bg-white
      rounded-sm
      shadow-md
      overflow-y-scroll
      overflow-x-hidden
    `}
  }

  .absolute-container {
    ${tw`
      absolute
      top-0
      left-0
      right-0
      w-full
      h-full
      flex
      items-center
      justify-center

      transition-all
      duration-500
      ease-in-out
    `}
  }
`;

export default OrderCart;
