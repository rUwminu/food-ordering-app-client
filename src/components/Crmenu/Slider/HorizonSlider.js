import React, { useState, useEffect } from "react";
import tw from "twin.macro";
import styled from "styled-components";

// Components
import VerticalSlider from "./VerticalSlider";

const HorizonSlider = ({ listItem, isMenuItemActive }) => {
  const [currentIndex, setCurrentIndex] = useState(isMenuItemActive);

  useEffect(() => {
    setCurrentIndex(isMenuItemActive);
  }, [currentIndex, listItem, isMenuItemActive]);

  return (
    <SliderContainer>
      {listItem &&
        listItem.map((x, itemIndex) => {
          const { id, carocellItem } = x;

          //slide control
          let position = "nextSlide";
          if (itemIndex === currentIndex) {
            position = "activeSlide";
          }

          if (
            itemIndex === currentIndex - 1 ||
            (currentIndex === 0 && itemIndex === listItem.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <SliderCard key={id} className={position}>
              <VerticalSlider carocellItem={carocellItem} />
            </SliderCard>
          );
        })}
    </SliderContainer>
  );
};

const SliderContainer = styled.div`
  ${tw`
    relative
    min-h-[23rem]
    md:h-full
    w-full
    overflow-hidden
  `}

  .activeSlide {
    opacity: 1;
    transform: translateY(0);
  }

  .lastSlide {
    transform: translateY(-100%);
  }

  .nextSlide {
    transform: translateY(100%);
  }
`;

const SliderCard = styled.div`
  ${tw`
    absolute
    top-0
    left-0
    h-full
    w-full
    opacity-0

    transition-all
    duration-200
    ease-in-out
  `}
`;

export default HorizonSlider;
