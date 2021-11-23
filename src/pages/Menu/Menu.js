import React, { useState, useEffect } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { restaurantDetailsRequest } from "../../redux/actions/restaurantAction";

// mock Api
import { restaurantData } from "../../assets/restaurantData/resData";

//Material ui Icons
import { Room } from "@mui/icons-material";
// banner image
import MenuBanner from "../../assets/banner-img/menubanner.jpg";

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
          <div className="feature-btn">Feature Restaurant</div>
        </IntroCard>
        <PickContainer>
          <h1>
            Here Own Random <span>Top Pick</span>
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
                <div key={index} className="cate-card">
                  <img src="" alt="cate-bg" />
                  <h2>{x.value}</h2>
                </div>
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
    py-8
    px-6
    -mt-56
    md:-mt-60
    h-[24rem]
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
      w-full
      py-3
      text-lg
      md:text-xl
      text-center
      font-semibold
      bg-b-orange
      text-gray-50
      shadow-md
      rounded-md
    `}
  }
`;

const PickContainer = styled.div`
  ${tw`
    mt-10
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
      flex
      flex-wrap
      items-center
      justify-between
    `}
  }
`;

const ResCard = styled(Link)`
  ${tw`
    mb-6
    mt-2
    min-h-[20rem] 
    w-full
    md:max-w-[17rem]
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
      p-4
      bg-white
    `}
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
    `}
  }
`;

const CategoryContainer = styled.div`
  ${tw`
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

  .category-box {
    ${tw`
      flex
      flex-wrap
      items-start
      justify-between
    `}
  }
`;

export default Menu;
