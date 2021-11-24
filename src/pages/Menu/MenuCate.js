import React, { useState, useEffect } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { Link, useSearchParams } from "react-router-dom";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { byTypeRestaurantDetailsRequest } from "../../redux/actions/restaurantAction";

// mock Api return data
import { restaurantData } from "../../assets/restaurantData/resData";

// mui icon
import { ArrowForwardIos, Room } from "@mui/icons-material";

const MenuCate = () => {
  const dispatch = useDispatch();
  const [resTypeList, setResTypeList] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get("name");

  const resList = useSelector((state) => state.resList);
  const { typeRes, typeResError } = resList;

  const getQuisineByType = () => {
    // This filter quisine by type should be done in backend, here just demo.
    const resByType = restaurantData.filter((x) =>
      x.typeQuisine.some((j) => j === name)
    );

    if (resByType) {
      dispatch(byTypeRestaurantDetailsRequest(resByType));
    }
  };

  useEffect(() => {
    if (restaurantData) {
      getQuisineByType();
    }
  }, [restaurantData]);

  useEffect(() => {
    if (typeRes) {
      setResTypeList(typeRes);
    }
  }, [typeRes]);

  return (
    <MainContainer>
      <div className="inner-container">
        <div className="navigate-box">
          <Link to="/food-ordering-app-client/menu" className="link-text">
            Restaurant
          </Link>
          <ArrowForwardIos className="icon" />
          <h3 className="link-text cur-link">{name}</h3>
        </div>
        <ResListContainer>
          <h1>
            {name} <span>Restaurant</span>
          </h1>
          <div className="grid-container">
            {resTypeList &&
              resTypeList.map((x) => {
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
          {typeResError && <div>Seem Like There An Error</div>}
        </ResListContainer>
      </div>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  ${tw`
    w-full
    pt-28
    pb-16
  `}

  .inner-container {
    ${tw`
      mx-auto
      px-4
      lg:px-0
      w-full
      md:max-w-6xl

    `}
  }

  .navigate-box {
    ${tw`
      flex
      items-center
      justify-start
    `}

    .link-text {
      ${tw`
        text-lg
      `}
    }

    .icon {
      ${tw`
        mx-2
      `}
    }

    .cur-link {
      ${tw`
        text-b-orange
        pointer-events-none
      `}
    }
  }
`;

const ResListContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-col
  `}

  .grid-container {
    ${tw`
      w-full
      grid 
      grid-cols-2
      md:grid-cols-3
      lg:grid-cols-4
      gap-5
    `}
  }

  h1 {
    ${tw`
      mt-2
      mb-10
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

export default MenuCate;
