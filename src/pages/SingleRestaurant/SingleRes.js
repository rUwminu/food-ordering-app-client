import React, { useState, useEffect } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { useParams } from "react-router-dom";

// Redux
import { useDispatch, useSelector } from "react-redux";
import {
  singleRestaurantDetailsRequest,
  recipesListRequest,
} from "../../redux/actions/restaurantAction";

import {
  restaurantData,
  recipesData,
} from "../../assets/restaurantData/resData";

//Material ui Icons
import { Room, Favorite, Share } from "@mui/icons-material";

const SingleRes = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [typeCategory, setTypeCategory] = useState();

  const resList = useSelector((state) => state.resList);
  const { singleRes, loading: resLoading, singleResError } = resList;

  const rescipesList = useSelector((state) => state.rescipesList);
  const { recipes, loading: recLoading, recipesError } = rescipesList;

  const getRecipesCategories = () => {
    const cateType = recipes.reduce((total, type) => {
      const { availability } = type;

      if (!availability) return total;

      if (!total[availability]) {
        total[availability] = { name: availability };
      }

      return total;
    }, {});

    setTypeCategory(Object.values(cateType));

    return;
  };

  useEffect(() => {
    if (id && restaurantData) {
      const singleResDetail = restaurantData.find((x) => x.id === parseInt(id));
      const recipesList = recipesData.filter(
        (x) => x.restaurantID === parseInt(id)
      );

      dispatch(singleRestaurantDetailsRequest(singleResDetail));
      dispatch(recipesListRequest(recipesList));
    }
  }, [id, restaurantData]);

  useEffect(() => {
    if (recipes) getRecipesCategories();
  }, [recipes, !recLoading]);

  //console.log(singleRes)
  //console.log(recipes)
  //console.log(typeCategory);

  const filterTypeRecipes = (type) => {
    const filtedRecipes = recipes.filter((x) => x.availability === type);

    return filtedRecipes.map((x) => <div key={x.id}>{x.name}</div>);
  };

  return (
    <MainContainer>
      <div className="top-container">
        {!resLoading && singleRes && (
          <div className="inner-container top-inner">
            <div className="main-item">
              <div className="img-box">
                <img src={singleRes.image} />
              </div>

              <div className="info-box">
                <h1>{singleRes.name}</h1>
                <div className="location-box">
                  <Room className="icon" />
                  <span>
                    {singleRes.location}, {singleRes.state}
                  </span>
                </div>
                <div className="operation-box">
                  <span>
                    Restaurant Operating Time - {singleRes.openTime} to{" "}
                    {singleRes.closeTime}
                  </span>
                </div>
                <div className="general-box">
                  <div className="general-item">
                    <h2>{singleRes.deliveryTime} HOUR</h2>
                    <span>Delivery Time</span>
                  </div>
                  <div className="general-item">
                    <h2>PAYMENT</h2>
                    <span>Online Payment</span>
                  </div>
                  <div className="general-item">
                    <h2>${singleRes.avgCost.toFixed(2)}</h2>
                    <span>Avg Cost</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="share-box">
              <div className="social-btn like-btn">
                <Favorite />
                Favorite
              </div>

              <div className="social-btn share-btn">
                <Share />
                Share
              </div>
            </div>
          </div>
        )}
      </div>
      <BottomContainer>
        <div className="inner-container">
          <div className="category-box">
            <h1>Categories</h1>
            {typeCategory &&
              typeCategory.map((x) => (
                <div className="type-item">{x.name}</div>
              ))}
          </div>
          <div className="recipe-box">
            {typeCategory &&
              typeCategory.map((x) => (
                <div className="cate-list">
                  <h1>{x.name}</h1>
                  {filterTypeRecipes(x.name)}
                </div>
              ))}
          </div>
          <div className="cart-box"></div>
        </div>
      </BottomContainer>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  ${tw`
    pt-28
    pb-16
    h-full
    w-full
    bg-gray-100
  `}

  .top-container {
    ${tw`
      py-8
      w-full
      bg-b-orange
      bg-opacity-10
    `}
  }

  .inner-container {
    ${tw`
        mx-auto
        px-4
        lg:px-0
        h-full
        w-full
        max-w-6xl
    `}
  }

  .top-inner {
    ${tw`
      h-full
      flex
      flex-col
      lg:flex-row
      items-start
      justify-center
    `}

    .main-item {
      ${tw`
        w-full
        flex
        flex-col
        sm:flex-row
      `}
    }

    .img-box {
      ${tw`
        w-full
        sm:max-w-[20rem]
      `}

      img {
        ${tw`
        h-full
        w-full
        object-cover
      `}
      }
    }

    .info-box {
      ${tw`
        sm:mx-6
        flex-grow
      `}

      h1 {
        ${tw`
          text-xl
          md:text-2xl
          font-semibold
        `}
      }

      .location-box {
        ${tw`
          flex
          items-center
          justify-start
          text-sm
          text-gray-600
        `}

        .icon {
          ${tw`
            w-5
            h-5
          `}
        }
      }

      .operation-box {
        ${tw`
          pt-6
          pb-8
          text-gray-700
        `}
      }

      .general-box {
        ${tw`
          flex
          flex-wrap
          items-center
          justify-between
        `}

        .general-item {
          ${tw`
            flex
            flex-col
            items-start
            justify-center
          `}

          h2 {
            ${tw`
              font-semibold
            `}
          }

          span {
            ${tw`
              text-sm
              text-gray-600
            `}
          }
        }
      }
    }

    .share-box {
      ${tw`
        mt-4
        lg:mt-0
        w-full
        max-w-xs
      `}

      .social-btn {
        ${tw`
          flex
          items-center
          justify-center
          w-48
          mb-4
          py-2
          border
          border-gray-400
          text-gray-400
        `}
      }
    }
  }
`;

const BottomContainer = styled.div`
  ${tw`
    pt-8
    w-full
  `}

  .inner-container {
    ${tw`
      flex
      items-start
      justify-center
    `}

    .category-box {
      ${tw`
        w-full
        max-w-[20rem]
        flex
        flex-col
        items-end
        justify-start
      `}

      h1 {
        ${tw`
          mb-3
          text-xl
          md:text-2xl
          font-semibold
        `}
      }

      .type-item {
        ${tw`
          w-full
          max-w-[14rem]
          py-2
          mb-2
          text-base
          text-right
          md:text-lg
          rounded-sm
          cursor-pointer

          transition-all
          duration-200
          ease-in-out
        `}

        :hover {
          ${tw`
            pr-2
            text-lg
            md:text-xl
            bg-gray-200
          `}
        }
      }
    }

    .recipe-box {
      ${tw`
        sm:mx-6
        flex-grow
      `}

      .cate-list {
        ${tw`
          mb-3
          flex
          flex-col
          items-start
          justify-start
        `}

        h1 {
          ${tw`
            py-3
            w-full
            text-lg
            md:text-xl
            font-semibold
            border-b
            border-gray-400
          `}
        }
      }
    }

    .cart-box {
      ${tw`
        w-full
        max-w-xs
      `}
    }
  }
`;

export default SingleRes;
