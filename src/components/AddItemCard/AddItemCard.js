import React, { useState, useEffect } from "react";
import tw from "twin.macro";
import styled from "styled-components";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../redux/actions/orderAction";

// Icons
import { Add, Remove, AddShoppingCart } from "@mui/icons-material";

const AddItemCard = ({ setIsAddOpen, isAddOpen, getItemId }) => {
  const dispatch = useDispatch();
  const [productInfo, setProductInfo] = useState();

  const rescipesList = useSelector((state) => state.rescipesList);
  const { recipes } = rescipesList;

  const getSingleRecipesDetail = () => {
    const singleRecipe = recipes.find((x) => x.id === getItemId);

    if (singleRecipe) setProductInfo({ ...singleRecipe, qty: 1 });
  };

  useEffect(() => {
    if (getItemId) getSingleRecipesDetail();
  }, [getItemId]);

  //console.log(getItemId);
  //console.log(productInfo);

  const handleAddQty = () => {
    setProductInfo({ ...productInfo, qty: (productInfo.qty += 1) });
  };

  const handleMinusQty = () => {
    if (productInfo.qty > 1)
      setProductInfo({ ...productInfo, qty: (productInfo.qty -= 1) });
  };

  const handleAddItemToCart = async () => {
    if (productInfo) await dispatch(addItemToCart(productInfo));
    setIsAddOpen(false);
  };

  return (
    <MainContainer
      className={`${isAddOpen ? "opacity-100 z-40" : "opacity-0 z-[-1]"}`}
    >
      <div className="bg-cover" onClick={() => setIsAddOpen(false)} />
      {productInfo && (
        <div className="add-card">
          <img src={productInfo.image} />
          <div className="card-info">
            <h1>{productInfo.name}</h1>
            <div className="card-btn-box">
              <div className="am-box">
                <Remove
                  onClick={() => handleMinusQty()}
                  className={`btn ${productInfo.qty !== 1 && "active"}`}
                />
                <span>{productInfo.qty}</span>
                <Add onClick={() => handleAddQty()} className={`btn active`} />
              </div>
              <div className="add-btn" onClick={() => handleAddItemToCart()}>
                <AddShoppingCart className="icons" />
                Add To Cart
              </div>
            </div>
          </div>
        </div>
      )}
    </MainContainer>
  );
};

const MainContainer = styled.div`
  ${tw`
    relative
    fixed
    top-0
    left-0
    w-full
    h-screen
    px-4
    lg:px-0
    flex
    items-center
    justify-center

    transition-all
    duration-200
    ease-in-out
  `}

  .bg-cover {
    ${tw`
      absolute
      top-0
      left-0
      w-screen
      h-screen
      bg-gray-900
      bg-opacity-10
      z-0

      transition-all
    `}

    animation: fadeIn 0.2s ease-in-out alternate forwards;
  }

  .add-card {
    ${tw`
        p-4
        w-full
        md:max-w-3xl
        flex
        items-start
        justify-start
        bg-gray-50
        z-10
    `}

    animation: fadeIn 0.2s ease-in-out alternate forwards;

    img {
      ${tw`
        w-36
        h-36
        object-cover
      `}
    }

    .card-info {
      ${tw`
        h-full
        ml-4
        flex
        flex-col
        flex-grow
        items-start
        justify-start
      `}

      h1 {
        ${tw`
            py-2
            mb-2
            text-xl
            md:text-2xl
            font-semibold
        `}
      }

      .card-btn-box {
        ${tw`
            mt-2
            flex
            flex-col
            items-start
            md:items-center
            justify-start
            md:flex-row
            md:items-center      
        `}

        .am-box {
          ${tw`
            mr-8
            flex
            items-center
            justify-center
          `}

          .btn {
            ${tw`
                p-2
                w-8
                h-8
                md:w-10
                md:h-10
                border
                rounded-sm

                transition
                duration-200
                ease-in-out
            `}
          }

          .btn.active {
            ${tw`
                text-gray-600
                border-gray-600
                cursor-pointer
            `}
          }

          span {
            ${tw`
                px-4
                text-lg
                font-semibold
            `}
          }
        }

        .add-btn {
          ${tw`
            flex
            items-center
            justify-center
            mt-2
            md:mt-0
            py-1
            px-3
            md:py-2
            md:px-5
            bg-b-orange
            text-gray-100
            font-semibold
            rounded-sm
            cursor-pointer

            transition
            duration-200
            ease-in-out
          `}

          .icons {
            ${tw`
                mr-2
            `}
          }

          :hover {
            ${tw`
                bg-opacity-90
            `}
          }
        }
      }
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export default AddItemCard;
