import React, { useState, useEffect } from "react";
import tw from "twin.macro";
import styled from "styled-components";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { userAddAddress } from "../../../redux/actions/userAction";
import { useSearchParams } from "react-router-dom";

const AddressForm = ({ setCurrentStep, currentStep }) => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get("name");

  const userSignIn = useSelector((state) => state.userSignIn);
  const { user } = userSignIn;

  const addressDetail = useSelector((state) => state.addressDetail);
  const { address } = addressDetail;

  const addressState = {
    name: "",
    phoneNum: "",
    state: "",
    street: "",
    postalCode: "",
  };
  const [addressInput, setAddressInput] = useState(addressState);

  useEffect(() => {
    if (user) {
      setAddressInput({
        ...addressInput,
        name: user.username,
        phoneNum: user.phoneNum,
        state: address.state,
        street: address.street,
        postalCode: address.postalCode,
      });
    }
  }, [user, address]);

  const handleAddAddress = () => {
    if (
      addressInput.name !== "" &&
      addressInput.phoneNum !== "" &&
      addressInput.state !== "" &&
      addressInput.street !== "" &&
      addressInput.postalCode !== ""
    ) {
      dispatch(userAddAddress(addressInput));

      if (!name) setCurrentStep(currentStep + 1);
    }
  };

  return (
    <MainContainer>
      <h1>Shipping Address</h1>
      <div className="address-box">
        <div className="input-items">
          <input
            value={addressInput.state}
            onChange={(e) =>
              setAddressInput({ ...addressInput, state: e.target.value })
            }
            type="text"
            required
          />
          <span>State</span>
        </div>
        <div className="input-items">
          <input
            value={addressInput.street}
            onChange={(e) =>
              setAddressInput({ ...addressInput, street: e.target.value })
            }
            type="text"
            required
          />
          <span>Street</span>
        </div>
        <div className="input-items">
          <input
            value={addressInput.postalCode}
            onChange={(e) =>
              setAddressInput({ ...addressInput, postalCode: e.target.value })
            }
            type="text"
            required
          />
          <span>Postal Code</span>
        </div>
      </div>
      <h1>User Information</h1>
      <div className="user-box">
        <div className="input-items inactive">
          <input
            onChange={(e) => {
              setAddressInput({ ...addressInput, name: e.target.value });
            }}
            type="text"
            value={addressInput.name}
            required
          />
          <span>Recipient Name</span>
        </div>
        <div className="input-items inactive">
          <input
            onChange={(e) =>
              setAddressInput({ ...addressInput, phoneNum: e.target.value })
            }
            type="text"
            value={addressInput.phoneNum}
            required
          />
          <span>Phone Number</span>
        </div>
      </div>
      <div onClick={() => handleAddAddress()} className="confirm-btn">
        Confirm
      </div>
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
    py-4
  `}

  .input-items {
    ${tw`
        relative
        mt-4
        w-full
        md:w-[49%]
        md:max-w-sm
    `}

    input {
      ${tw`
        w-full
        px-2
        py-3
        border
        border-gray-400
        rounded-md

        transition-all
        duration-200
        ease-in-out
      `}

      :focus {
        ${tw`
            outline-none
            border-gray-900
        `}
      }
    }

    span {
      ${tw`
        absolute
        left-0
        py-3
        px-2
        font-semibold
        text-gray-600

        transition-all
        duration-200
        ease-in-out
      `}
    }

    input:focus ~ span,
    input:valid ~ span {
      ${tw`
        py-0
        top-0
        text-xs
      `}
    }
  }

  .address-box {
    ${tw`
        mb-8
        w-full
        flex
        flex-wrap
        items-center
        justify-between
    `}
  }

  .user-box {
    ${tw`
        w-full
        flex
        flex-wrap
        items-center
        justify-between
    `}
  }

  .confirm-btn {
    ${tw`
        w-full
        md:max-w-[49%]
        mt-6
        py-3
        text-lg
        font-semibold
        text-center
        bg-b-orange
        text-gray-100
        rounded-md
        cursor-pointer

        transition
        duration-200
        ease-in-out
    `}

    :hover {
      ${tw`
        bg-opacity-90
      `}
    }
  }
`;

export default AddressForm;
