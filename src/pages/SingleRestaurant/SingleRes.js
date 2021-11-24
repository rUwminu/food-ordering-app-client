import React, { useState, useEffect } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link as ButtonLink, Element } from "react-scroll";

// Redux
import { useDispatch, useSelector } from "react-redux";
import {
  singleRestaurantDetailsRequest,
  recipesListRequest,
} from "../../redux/actions/restaurantAction";

// Utils function
import getShortenBody from "../../utils/getShortenBody";

// Components
import { AddItemCard, Cart } from "../../components/index";

// Mock api data
import {
  restaurantData,
  recipesData,
} from "../../assets/restaurantData/resData";

//Material ui Icons
import { Room, Favorite, Share, ArrowBackIosNew } from "@mui/icons-material";

const SingleRes = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isAddOpen, setIsAddOpen] = useState(false);
  const [typeCategory, setTypeCategory] = useState();
  const [getItemId, setGetItemId] = useState("");

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

  const handleAddItem = (itemId) => {
    setGetItemId(itemId);
    setIsAddOpen(true);
  };

  const filterTypeRecipes = (type) => {
    const filtedRecipes = recipes.filter((x) => x.availability === type);

    return filtedRecipes.map((x) => (
      <div key={x.id} className="recipe-card">
        <img src={x.image} alt="recipe" />
        <div className="recipe-info">
          <h2>{x.name}</h2>
          <p>{getShortenBody(x.bio)}</p>
          <div className="info-main">
            <p className="info-price">Price: RM{x.price.toFixed(2)}</p>
            <div onClick={() => handleAddItem(x.id)} className="info-add-btn">
              Add to Cart
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <MainContainer>
      <div className="top-container">
        {!resLoading && singleRes && (
          <div className="inner-container top-inner">
            <div className="back-btn" onClick={() => navigate(-1)}>
              <ArrowBackIosNew className="back-icon" />
              Back
            </div>
            <div className="detail-container">
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
          </div>
        )}
      </div>
      <BottomContainer>
        <div className="inner-container">
          <div className="category-box">
            <h1 className="box-title">Categories</h1>
            {typeCategory &&
              typeCategory.map((x) => (
                <ButtonLink
                  to={`${x.name}`}
                  className="type-item"
                  spy={true}
                  smooth={true}
                  containerId="containerElement"
                  offset={-50}
                >
                  {x.name}
                </ButtonLink>
              ))}
          </div>
          <Element className="recipe-box" id="containerElement">
            <h1 className="box-title">Quisine</h1>
            {typeCategory &&
              typeCategory.map((x, index) => (
                <Element name={x.name} key={index} className="cate-list">
                  <h1 className="h1">{x.name}</h1>
                  {filterTypeRecipes(x.name)}
                </Element>
              ))}
          </Element>
          <div className="cart-box">
            <Cart />
          </div>
        </div>
      </BottomContainer>
      {isAddOpen && (
        <AddItemCard
          setIsAddOpen={setIsAddOpen}
          isAddOpen={isAddOpen}
          getItemId={getItemId}
        />
      )}
    </MainContainer>
  );
};

const MainContainer = styled.div`
  ${tw`
    relative
    pt-28
    pb-16
    h-full
    w-full
    bg-gray-100
    overflow-x-hidden
  `}
  z-index: 0;

  .top-container {
    ${tw`
      pt-6
      pb-8
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
      flex
      flex-col
      items-start
      justify-start
    `}

    .back-btn {
      ${tw`
        flex
        items-center
        mb-2
        pr-5
        pl-3
        py-2
        text-gray-700
        font-semibold
        rounded-md
        cursor-pointer

        transition-all
        duration-200
        ease-in-out
      `}

      .back-icon {
        ${tw`
          mr-1

          transition-all
          duration-200
          ease-in-out
        `}
      }

      :hover {
        ${tw`
          bg-b-orange
          bg-opacity-20
        `}

        .back-icon {
          ${tw`
            -ml-1
          `}
        }
      }
    }

    .detail-container {
      ${tw`
        w-full
        flex
        flex-col
        lg:flex-row
        items-start
        justify-center
      `}
    }

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
          cursor-pointer

          transition
          duration-200
          ease-in-out
        `}

        :hover {
          ${tw`
            bg-gray-100
            text-gray-600
          `}
        }
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

    .box-title {
      ${tw`
          py-3
          text-xl
          md:text-2xl
          font-semibold
        `}
    }

    .category-box {
      ${tw`      
        w-full
        max-w-[20rem]
        flex
        flex-col
        items-end
        justify-start
        hidden
        lg:inline-flex
      `}

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
        relative
        pb-[30rem]
        h-[45rem]
        min-h-[45rem]
        sm:mx-3
        px-3
        flex-grow
        max-w-lg
        overflow-y-scroll
        scrollbar-hide
        bg-white
      `}

      .box-title {
        ${tw`
          mb-0
          pb-2
          sticky
          top-0
          left-0
          w-full
          bg-white
        `}
      }

      .cate-list {
        ${tw`
          mb-3
          flex
          flex-col
          items-start
          justify-start
        `}

        .h1 {
          ${tw`
            mb-3
            py-3
            w-full
            text-lg
            md:text-xl
            font-semibold
            border-b
            border-gray-400
          `}
        }

        .recipe-card {
          ${tw`
            mb-4
            h-24
            md:h-28
            w-full
            flex
            items-start
            justify-start
          `}

          img {
            ${tw`
              w-24
              h-24
              md:w-28
              md:h-28
              object-cover
            `}
          }

          .recipe-info {
            ${tw`
              ml-4
              h-full
              flex
              flex-grow
              flex-col
              justify-start
              items-start
            `}

            h2 {
              ${tw`
                md:text-lg
                font-semibold
              `}
            }

            p {
              ${tw`
                text-sm
                md:text-base
                text-gray-700
              `}
            }

            .info-main {
              ${tw`
                mt-auto
                w-full
                flex
                items-center
                justify-between
              `}

              .info-price {
                ${tw`
                  text-gray-900
                `}
              }

              .info-add-btn {
                ${tw`
                  py-1
                  px-4
                  font-semibold
                  text-gray-200
                  bg-b-orange
                  rounded-sm
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
            }
          }
        }
      }
    }

    .cart-box {
      ${tw`
        hidden
        md:inline-flex
        w-full
        max-w-xs
      `}
    }
  }
`;

export default SingleRes;
