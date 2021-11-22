import React, { useState, useEffect } from "react";
import tw from "twin.macro";
import styled from "styled-components";

const VerticalSlider = ({ carocellItem }) => {
  const [listItem, setListItem] = useState([...carocellItem]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const lastIndex = listItem.length - 1;

    if (currentIndex < 0) {
      setCurrentIndex(lastIndex);
    }

    if (currentIndex > lastIndex) {
      setCurrentIndex(0);
    }
  }, [currentIndex, listItem]);

  //Auto slide to next slide in 3s
  useEffect(() => {
    let slider = setInterval(() => {
      setCurrentIndex(currentIndex + 1);
    }, 5000);

    //run one time after one
    return () => clearInterval(slider);
  }, [currentIndex]);

  return (
    <VerticalSliderContainer>
      <div className="slider-dot-container">
        {listItem &&
          listItem.map((x, index) => (
            <div className={`dot ${currentIndex === index && "active"}`} />
          ))}
      </div>

      {listItem &&
        listItem.map((x, index) => {
          const { id, title, tag, body, image } = x;

          let position = "nextSlideV";
          if (currentIndex === index) {
            position = "activeSlideV";
          }

          if (
            currentIndex === index - 1 ||
            (index === 0 && currentIndex === listItem.length - 1)
          ) {
            position = "lastSlideV";
          }

          return (
            <SliderCard className={position} key={id}>
              <div className="inner-card">
                <span>{tag}</span>
                <h1>{title}</h1>
                <p>{body}</p>
                <div className="login-btn">login</div>
              </div>
              <div className="banner-img">
                <img src={image} alt="banner" />
              </div>
            </SliderCard>
          );
        })}
    </VerticalSliderContainer>
  );
};

const VerticalSliderContainer = styled.div`
  ${tw`
    relative
    h-full
    w-full
    overflow-hidden
  `}

  .slider-dot-container {
    ${tw`
        ml-6
        mt-6
        flex
        items-center
        justify-start
      `}

    .dot {
      ${tw`
            w-3
            h-3
            mr-3
            bg-gray-400
            bg-opacity-50
            rounded-full

            transition-all
            duration-200
            ease-in-out
        `}
    }

    .dot.active {
      ${tw`
            bg-b-orange
        `}
    }
  }

  .activeSlideV {
    opacity: 1;
    transform: translateX(0);
  }

  .lastSlideV {
    opacity: 0;
    transform: translateX(-100%);
  }

  .nextSlideV {
    opacity: 0;
    transform: translateX(100%);
  }
`;

const SliderCard = styled.div`
  ${tw`
    absolute
    top-0
    left-0
    flex
    items-start
    justify-center
    h-full
    w-full
    p-6
    bg-b-orange
    bg-opacity-10
    opacity-0
    rounded-md

    transition-all
    duration-200
    ease-in-out
  `}

  .inner-card {
    ${tw`
        mt-6
        w-full
        h-full
        flex
        flex-col
        items-start
        justify-start
    `}

    span {
      ${tw`
        px-3
        mt-2
        mb-5
        text-base
        md:text-lg
        text-b-orange
        bg-b-orange
        bg-opacity-20
        font-semibold
        rounded-md
      `}
    }

    h1 {
      ${tw`
        mb-6
        text-xl
        sm:text-2xl
        md:text-3xl
        lg:text-4xl
        font-bold
      `}
    }

    p {
      ${tw`
        mb-4
        font-semibold
      `}
    }

    .login-btn {
      ${tw`
        py-2
        w-28
        text-center
        bg-b-orange
        text-gray-200
        font-semibold
        rounded-3xl
        cursor-pointer

        transition
        duration-200
        ease-in-out
      `}

      :hover {
        ${tw`
            bg-opacity-90
            shadow-lg
        `}
      }
    }
  }

  .banner-img {
    ${tw`
        hidden
        lg:inline-flex
        items-center
        justify-center
        -mr-3
        w-full
        overflow-hidden
    `}

    img {
      ${tw`
        -mt-8
        w-full
        object-cover
      `}
    }
  }
`;

export default VerticalSlider;
