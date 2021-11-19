import React from "react";
import tw from "twin.macro";
import styled from "styled-components";

import { CheckCircleOutline } from "@mui/icons-material";

const CompleteForm = () => {
  return (
    <MainContainer>
      <CheckCircleOutline className="complete-icon" />
      <h1>Payment Complete</h1>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  ${tw`
    h-full
    w-full
    flex
    flex-col
    items-center
    justify-center
    px-4
    py-6
  `}

  .complete-icon {
    ${tw`
      mb-2
      h-40
      w-40
      md:h-48
      md:w-48
      text-green-600
    `}
  }

  h1 {
    ${tw`
      text-xl
      md:text-2xl
      font-semibold
    `}
  }
`;

export default CompleteForm;
