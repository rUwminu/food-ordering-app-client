import React from "react";
import tw from "twin.macro";
import styled from "styled-components";

// Redux
import { useDispatch, useSelector } from "react-redux";

// Components
import { AddressForm } from "../../index";

const MyAddressBook = () => {
  return (
    <MainContainer>
      <h1 className="form-title">My Address Book</h1>
      <AddressForm />
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
      mb-6
      text-xl
      md:text-2xl
      font-semibold
    `}
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
export default MyAddressBook;
