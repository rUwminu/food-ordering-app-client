import React from "react";
import tw from "twin.macro";
import styled from "styled-components";

// Svg
import IntroPng from "../../assets/all-png/feature.png";
import AnalyIcon from "../../assets/icons-svg/analytic.svg";

const Intro = () => {
  return (
    <IntroContainer>
      <div className="intro-img-container">
        <img className="intro-img" src={IntroPng} alt="" />
      </div>
      <div className="intro-container">
        <span className="title-span">Why Choose us</span>
        <h1 className="title">
          Every Flavor <br />
          Welcome
        </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing.
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing.
          <br />
          Lorem ipsum dolor sit.
        </p>
        <div className="intro-highlight">
          <div className="icon-bg">
            <img src={AnalyIcon} alt="" />
          </div>

          <div className="info-box">
            <h2>All in one app.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In
              adipisci.
            </p>
          </div>
        </div>
      </div>
    </IntroContainer>
  );
};

const IntroContainer = styled.div`
  ${tw`
    px-4
    pt-10
    pb-24
    lg:px-0
    mx-auto
    w-full
    max-w-6xl
    flex
    flex-col-reverse
    md:flex-row
    items-center
    justify-center
  `}

  .intro-img-container {
    ${tw`
        w-full
    `}

    img {
      ${tw`
        w-full
    `}
    }
  }

  .intro-container {
    ${tw`
        flex
        flex-col
        items-center
        md:items-start
        justify-center
        w-full
        md:w-[60%]
    `}

    .title-span {
      ${tw`
        text-b-orange
        font-semibold
    `}
    }

    .title {
      ${tw`
        text-center
        md:text-left
        mt-4
        mb-6
        text-2xl  
        md:text-3xl
        lg:text-4xl
        font-bold
    `}
    }

    p {
      ${tw`
        text-center
        md:text-left
        text-gray-800
        font-semibold
      `}
    }

    .intro-highlight {
      ${tw`
        w-full
        mt-4
        mb-8
        md:mb-0
        p-4
        flex
        items-center
        justify-center
        bg-b-orange
        bg-opacity-10
        rounded-md
      `}

      .icon-bg {
        ${tw`
            w-16
            min-w-[4rem]
            h-16
            flex
            items-center
            justify-center
            bg-gray-100
            rounded-full
        `}

        img {
          ${tw`
            w-8
            h-8
          `}
        }
      }

      .info-box {
        ${tw`
            ml-4
            w-full
        `}

        h2 {
          ${tw`
            text-lg
            font-bold
          `}
        }
      }
    }
  }
`;

export default Intro;
