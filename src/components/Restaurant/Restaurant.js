import React, { useState, useEffect } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { restaurantDetailsRequest } from "../../redux/actions/restaurantAction";

import { restaurantData } from "../../assets/restaurantData/resData";

//Material ui Icons
import { Room } from "@mui/icons-material";

const Restaurant = () => {
  const dispatch = useDispatch();
  const [resAllList, setResAllList] = useState([]);
  const [disResAllList, setDisResAllList] = useState([]);
  const [stateFilter, setStateFilter] = useState("All");
  const [reducedTag, setReducedTag] = useState();

  const resList = useSelector((state) => state.resList);
  const { allRes, loading, error } = resList;

  const getResTypeState = () => {
    const typeState = resAllList.reduce((total, item) => {
      const { state } = item;

      if (!state) return total;

      if (!total[state]) total[state] = { id: 1, value: state };

      return total;
    }, {});

    setReducedTag(Object.values(typeState));
    return typeState;
  };

  useEffect(() => {
    if (restaurantData) {
      dispatch(restaurantDetailsRequest(restaurantData));
    }
  }, [restaurantData]);

  useEffect(() => {
    if (stateFilter !== "All") {
      const newList = resAllList.filter((x) => x.state === stateFilter);
      setDisResAllList(newList);
    } else {
      setDisResAllList(resAllList);
    }
  }, [stateFilter]);

  useEffect(() => {
    // mock API return data, random pick 3 restaurants
    if (allRes && resAllList.length === 0) {
      let random = allRes.sort(() => 0.5 - Math.random()).slice(0, 4);

      setResAllList(random);
      setDisResAllList(random);
    }

    if (resAllList && resAllList.length > 0) {
      getResTypeState();
    }
  }, [allRes, resAllList]);

  //console.log(allRes)
  //console.log(resAllList);

  return (
    <ResContainer id="feature">
      <h1 className="title">Popular Restaurant</h1>
      <p className="title-info">
        Popular this month. Top restaurants, cafes, pubs, and bars in and around
        you serving delightful food right at your doorstep
      </p>

      {reducedTag && (
        <div className="filter-tag">
          <div
            onClick={() => setStateFilter("All")}
            className={`state-tag ${stateFilter === "All" && "active"}`}
          >
            All
          </div>
          {reducedTag.map((x) => (
            <div
              key={x.id}
              onClick={() => setStateFilter(x.value)}
              className={`state-tag ${stateFilter === x.value && "active"}`}
            >
              {x.value}
            </div>
          ))}
        </div>
      )}

      <div className="res-container">
        {disResAllList &&
          disResAllList.map((x) => {
            const { id, image, name, state, location, deliveryTime, avgCost } =
              x;

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
    </ResContainer>
  );
};

const ResContainer = styled.div`
  ${tw`
    px-4
    py-14
    lg:px-0
    mx-auto
    h-full
    w-full
    max-w-6xl
    flex
    flex-col
    items-start
    md:items-center
    justify-center
  `}

  .title {
    ${tw`
      text-2xl
      md:text-3xl
      lg:text-4xl
      font-semibold
    `}
  }

  .title-info {
    ${tw`
      pt-3
      pb-2
      w-full
      max-w-xl
      md:text-lg
      md:text-center
      text-gray-700
    `}
  }

  .filter-tag {
    ${tw`
      my-4
      w-full
      flex
      items-center
      justify-start
      md:justify-center
      overflow-x-scroll
      scrollbar-hide
    `}

    .state-tag {
      ${tw`
        mr-4
        py-1
        px-6
        min-w-max
        font-semibold
        border
        border-gray-400
        rounded-3xl
        cursor-pointer

        transition
        duration-200
        ease-in-out
      `}

      :hover {
        ${tw`
          bg-opacity-10
          bg-b-orange
        `}
      }
    }

    .state-tag.active {
      ${tw`
        bg-b-orange
        text-gray-200
      `}
    }
  }

  .res-container {
    ${tw`
      w-full
      grid
      grid-cols-2
      lg:grid-cols-4
      gap-2
    `}
  }
`;

const ResCard = styled(Link)`
  ${tw`
    w-full
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
      shadow-md
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
      pb-2
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

export default Restaurant;
