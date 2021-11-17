import React, { useState, useEffect } from "react";
import tw from "twin.macro";
import styled from "styled-components";

const MultiStepProgressBar = ({ stepList, currentStep }) => {
  return (
    <ProgressBarContainer>
      {stepList &&
        stepList.map((x, index) => (
          <div
            key={index}
            className={`progress-step ${index === 0 && "w-6 h-6"}`}
          >
            {index !== 0 && (
              <div
                className={`line ${
                  currentStep >= index ? "bg-red-400" : "bg-gray-300"
                }`}
              />
            )}
            <div
              className={`dot ${
                currentStep >= index ? "border-red-400" : "border-gray-300"
              }`}
            />
            <h3
              className={`${
                currentStep >= index ? "text-gray-900" : "text-gray-400"
              }`}
            >
              {x.type}
            </h3>
          </div>
        ))}
    </ProgressBarContainer>
  );
};

const ProgressBarContainer = styled.div`
  ${tw`
    pt-4
    px-10
    md:px-8
    w-full
    flex
    items-center
    justify-between
  `}

  .progress-step {
    ${tw`
        relative
        w-full
        flex
        items-center
        justify-start
    `}

    .line {
      ${tw`
        w-full
        p-[2px]
      `}
    }

    .dot {
      ${tw`
        w-6
        h-6
        min-h-[1.5rem]
        min-w-[1.5rem]
        border-4
        rounded-full
      `}
    }

    h3 {
      ${tw`
        absolute
        right-0
        bottom-0
        w-20
        text-center
        font-semibold
      `}
      transform: translate(35%, 100%);
    }
  }
`;

export default MultiStepProgressBar;
