import React, { useState, useEffect } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Link as NavLink } from "react-scroll";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { restaurantDetailsRequest } from "../../redux/actions/restaurantAction";

// mock Api
import { restaurantData } from "../../assets/restaurantData/resData";

//Material ui Icons
import { Room } from "@mui/icons-material";
// banner image
import MenuBanner from "../../assets/banner-img/menubanner.jpg";
import Halal from "../../assets/food/r1/beefschnitzel.jpg";
import NonHalal from "../../assets/food/r1/taco.jpg";
import Chinese from "../../assets/food/r1/noodles.jpg";
import Europe from "../../assets/food/r1/beefpancakes.jpg";
import Desert from "../../assets/food/r3/malteser.jpeg";

const Menu = () => {
  const dispatch = useDispatch();
  const [resRandomList, setResRandomList] = useState();
  const [resAllList, setResAllList] = useState();
  const [quisineType, setQuisinType] = useState();

  const resList = useSelector((state) => state.resList);
  const { allRes, loading, error } = resList;

  const getAllQuisineType = () => {
    const allTypeArray = resAllList.map((x) => {
      return x.typeQuisine;
    });

    const concatArray = [].concat.apply([], allTypeArray);

    const reduceType = concatArray.reduce((total, item) => {
      if (!total[item]) {
        total[item] = { value: item };
      }

      return total;
    }, {});

    setQuisinType(Object.values(reduceType));
  };

  const returnQuisineImgType = (type) => {
    switch (type) {
      case "Halal":
        return Halal;
        break;
      case "Non-Halal":
        return NonHalal;
        break;
      case "Chinese":
        return Chinese;
        break;
      case "Europe":
        return Europe;
        break;
      case "Desert":
        return Desert;
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (restaurantData) {
      dispatch(restaurantDetailsRequest(restaurantData));
    }
  }, [restaurantData]);

  useEffect(() => {
    if (allRes && !resAllList) {
      let random = allRes.sort(() => 0.5 - Math.random()).slice(0, 4);

      setResRandomList(random);
      setResAllList(allRes);
    }

    if (resAllList) {
      getAllQuisineType();
    }
  }, [allRes, resAllList]);

  return (
    <MainContainer>
      <div className="img-banner" alt="menu-banner" />
      <div className="inner-container">
        <IntroCard>
          <h2>Order With Us Now!</h2>
          <h1>
            Let's explore
            <br /> Own Menu
            <br /> Here.
          </h1>
          <NavLink
            to="feature"
            className="feature-btn"
            spy={true}
            smooth={true}
            offset={-100}
          >
            Feature Restaurant
          </NavLink>
        </IntroCard>
        <PickContainer id="feature">
          <h1>
            Here Our Random <span>Top Pick</span>
          </h1>
          <div className="feature-box">
            {resRandomList &&
              resRandomList.map((x) => {
                const {
                  id,
                  image,
                  name,
                  state,
                  location,
                  deliveryTime,
                  avgCost,
                } = x;

                return (
                  <ResCard
                    key={id}
                    to={`/food-ordering-app-client/restaurant/${id}`}
                  >
                    <img src={image} alt="Restaurant" />
                    <h2>{name}</h2>
                    <div className="location-box">
                      <Room className="icons" />
                      <span>
                        {state}, {location}
                      </span>
                    </div>
                    <div className="operating-box">
                      <div className="delivery-time">{deliveryTime} HOUR</div>
                      <div className="min-order">
                        MIN ORDER ${avgCost.toFixed(2)}
                      </div>
                    </div>
                  </ResCard>
                );
              })}
          </div>
        </PickContainer>
        <CategoryContainer>
          <h1>There's something for everyone!</h1>
          <div className="category-box">
            {quisineType &&
              quisineType.map((x, index) => (
                <Link
                  to={`/food-ordering-app-client/menu/type?name=${x.value}`}
                  key={index}
                  className="cate-card"
                >
                  <div className="cate-img">
                    <img src={returnQuisineImgType(x.value)} alt="cate-bg" />
                  </div>

                  <h2>{x.value}</h2>
                </Link>
              ))}
          </div>
        </CategoryContainer>
      </div>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  ${tw`
    relative
    w-screen
  `}

  .img-banner {
    background-image: url(${MenuBanner});
    background-repeat: no-repeat;
    background-size: cover;
    ${tw`
      w-full
      min-h-[70vh]
      max-h-[25rem]
    `}
  }

  .inner-container {
    ${tw`
      px-4
      lg:px-0
      mx-auto
      w-full
      md:max-w-6xl
    `}
  }
`;

const IntroCard = styled.div`
  ${tw`
    flex
    flex-col
    py-8
    px-6
    -mt-56
    md:-mt-60
    h-[22rem]
    w-full
    md:max-w-sm
    bg-gray-50
    shadow-md
    rounded-md
  `}

  h2 {
    ${tw`
      mb-2
      text-lg
      font-semibold
    `}
  }

  h1 {
    ${tw`
      text-4xl
      md:text-5xl
      font-semibold
    `}
    line-height: 3.5rem !important;
  }

  .feature-btn {
    ${tw`
      mt-8
      py-2
      px-4
      text-lg
      md:text-xl
      font-semibold
      bg-b-orange
      text-gray-50
      shadow-md
      rounded-md
      cursor-pointer

      transition
      duration-200
      ease-in-out
    `}

    :hover {
      ${tw`
        bg-opacity-90
        shadow-md
      `}
    }
  }
`;

const PickContainer = styled.div`
  ${tw`
    mt-10
    mb-8
    w-full
  `}

  h1 {
    ${tw`
      mb-4
      text-3xl
      md:text-4xl
      font-semibold
    `}

    span {
      ${tw`
        text-b-orange
      `}
    }
  }

  .feature-box {
    ${tw`  
      w-full
      grid 
      grid-cols-2
      md:grid-cols-3
      lg:grid-cols-4
      gap-5
    `}
  }
`;

const ResCard = styled(Link)`
  ${tw`
    mb-6
    mt-2
    flex
    flex-col
    items-start
    justify-start
    rounded-sm
    cursor-pointer

    transition-all
    duration-200
    ease-in-out
  `}

  :hover {
    ${tw`
      bg-white
    `}

    h2 {
      ${tw`
        pl-2
        md:pl-4
      `}
    }

    .location-box {
      ${tw`
        pl-2
        md:pl-4
      `}
    }

    .operating-box {
      ${tw`
        px-2
        md:px-4
      `}
    }
  }

  img {
    ${tw`
      w-full
      object-cover
    `}
  }

  h2 {
    ${tw`
      md:text-lg
      font-semibold

      transition-all
      duration-200
      ease-in-out
    `}
  }

  .location-box {
    ${tw`
      w-full
      flex
      items-center
      justify-start
      py-3
      text-gray-400
      border-b
      border-gray-400

      transition-all
      duration-200
      ease-in-out
    `}

    .icons {
      ${tw`
        w-5
        h-5
      `}
    }

    span {
      ${tw`
        ml-2
        underline
      `}
    }
  }

  .operating-box {
    ${tw`
      mt-3
      w-full
      flex
      items-center
      justify-between
      text-sm
      text-gray-400

      transition-all
      duration-200
      ease-in-out
    `}
  }
`;

const CategoryContainer = styled.div`
  ${tw`
    w-full
    pb-10
  `}

  h1 {
    ${tw`
      mb-6
      text-3xl
      md:text-4xl
      font-semibold
    `}

    span {
      ${tw`
        text-b-orange
      `}
    }
  }

  .category-box {
    ${tw`
      grid 
      grid-cols-2
      sm:grid-cols-3
      md:grid-cols-4
      lg:grid-cols-5 
      gap-5
      pb-4

      transition
      duration-200
      ease-in-out
    `}

    .cate-card {
      .cate-img {
        ${tw`
        relative
        rounded-md
        overflow-hidden

        transition
        duration-200
        ease-in-out
      `}

        img {
          ${tw`
            transition
            duration-200
            ease-in-out
          `}
        }

        &:before {
          content: "";
          ${tw`
          absolute
          top-0
          left-0
          w-full
          h-full
          bg-gray-900
          bg-opacity-0
          rounded-md

          transition
          duration-200
          ease-in-out
          z-[5]
        `}
        }
      }

      h2 {
        ${tw`
        py-2
        text-lg
        font-semibold
      `}
      }

      :hover {
        .cate-img {
          img {
            ${tw`
              scale-110
            `}
          }
          &:before {
            ${tw`
              bg-opacity-30
            `}
          }
        }
      }
    }
  }
`;

export default Menu;
