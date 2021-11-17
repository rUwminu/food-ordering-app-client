import React, { useState, useEffect } from "react";
import tw from "twin.macro";
import styled from "styled-components";

const PaymentForm = () => {
  return <MainContainer></MainContainer>;
};

const MainContainer = styled.div`
  ${tw`
    h-full
    w-full
    flex
    flex-col
    items-start
    justify-start
    p-4
  `}
`;

export default PaymentForm;
