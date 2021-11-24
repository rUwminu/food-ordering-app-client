import React, { useState, useEffect } from "react";
import tw from "twin.macro";
import styled from "styled-components";

//Icon Svg
import PizzaIcon from "../../assets/icons-svg/pizza.svg";
import BurgerIcon from "../../assets/icons-svg/burger.svg";
import RiceIcon from "../../assets/icons-svg/ricebowl.svg";
import DonutIcon from "../../assets/icons-svg/donat.svg";
import IcecreamIcon from "../../assets/icons-svg/icecream.svg";

//Carocell Image
import BurgerCs from "../../assets/svg/burgerCs.svg";

//Components
import HorizonSlider from "./Slider/HorizonSlider";

const menuData = [
  {
    id: 1,
    title: "Pizza",
    icon: PizzaIcon,
    carocellItem: [
      {
        id: 1,
        title: "Delivery in just 30 minutes",
        tag: "Fastes Food Delivery Services",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non curabitur gravida arcu ac.",
        image: BurgerCs,
      },
      {
        id: 2,
        title: "Favour in different variety",
        tag: "Most Widest Favour Pick Ordering App",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non curabitur gravida arcu ac.",
        image: BurgerCs,
      },
      {
        id: 3,
        title: "Refund order on late and untasty",
        tag: "Money Back Guarantee",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non curabitur gravida arcu ac.",
        image: BurgerCs,
      },
    ],
  },
  {
    id: 2,
    title: "Fast Food",
    icon: BurgerIcon,
    carocellItem: [
      {
        id: 1,
        title: "Delivery in just 30 minutes",
        tag: "Fastes Food Delivery Services",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non curabitur gravida arcu ac.",
        image: BurgerCs,
      },
      {
        id: 2,
        title: "Delivery in just 30 minutes",
        tag: "Fastes Food Delivery Services",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non curabitur gravida arcu ac.",
        image: BurgerCs,
      },
      {
        id: 3,
        title: "Delivery in just 30 minutes",
        tag: "Fastes Food Delivery Services",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non curabitur gravida arcu ac.",
        image: BurgerCs,
      },
    ],
  },
  {
    id: 3,
    title: "Asian Dish",
    icon: RiceIcon,
    carocellItem: [
      {
        id: 1,
        title: "Delivery in just 30 minutes",
        tag: "Fastes Food Delivery Services",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non curabitur gravida arcu ac.",
        image: BurgerCs,
      },
      {
        id: 2,
        title: "Delivery in just 30 minutes",
        tag: "Fastes Food Delivery Services",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non curabitur gravida arcu ac.",
        image: BurgerCs,
      },
      {
        id: 3,
        title: "Delivery in just 30 minutes",
        tag: "Fastes Food Delivery Services",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non curabitur gravida arcu ac.",
        image: BurgerCs,
      },
    ],
  },
  {
    id: 4,
    title: "Dessert",
    icon: DonutIcon,
    carocellItem: [
      {
        id: 1,
        title: "Delivery in just 30 minutes",
        tag: "Fastes Food Delivery Services",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non curabitur gravida arcu ac.",
        image: BurgerCs,
      },
      {
        id: 2,
        title: "Delivery in just 30 minutes",
        tag: "Fastes Food Delivery Services",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non curabitur gravida arcu ac.",
        image: BurgerCs,
      },
      {
        id: 3,
        title: "Delivery in just 30 minutes",
        tag: "Fastes Food Delivery Services",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non curabitur gravida arcu ac.",
        image: BurgerCs,
      },
    ],
  },
  {
    id: 5,
    title: "Ice-cream",
    icon: IcecreamIcon,
    carocellItem: [
      {
        id: 1,
        title: "Delivery in just 30 minutes",
        tag: "Fastes Food Delivery Services",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non curabitur gravida arcu ac.",
        image: BurgerCs,
      },
      {
        id: 2,
        title: "Delivery in just 30 minutes",
        tag: "Fastes Food Delivery Services",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non curabitur gravida arcu ac.",
        image: BurgerCs,
      },
      {
        id: 3,
        title: "Delivery in just 30 minutes",
        tag: "Fastes Food Delivery Services",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non curabitur gravida arcu ac.",
        image: BurgerCs,
      },
    ],
  },
];

const Crmenu = () => {
  const [menuList, setMenuList] = useState([]);
  const [isMenuItemActive, setIsMenuItemActive] = useState(0);

  useEffect(() => {
    if (menuData) {
      setMenuList(menuData);
    }
  }, [menuData]);

  return (
    <MenuContainer>
      <div className="select-type">
        {menuList &&
          menuList.map((x, index) => {
            const { id, title, icon } = x;
            return (
              <div
                key={id}
                onClick={() => setIsMenuItemActive(index)}
                className={`menu-items ${
                  isMenuItemActive === index && "active"
                }`}
              >
                <div className="img-box">
                  <img src={icon} alt="icon" />
                </div>
                <h2>{title}</h2>
              </div>
            );
          })}
      </div>
      {menuList && (
        <HorizonSlider
          listItem={menuList}
          isMenuItemActive={isMenuItemActive}
        />
      )}
    </MenuContainer>
  );
};

const MenuContainer = styled.div`
  ${tw`
    px-4
    lg:px-0
    mx-auto
    md:h-[25rem]
    w-full
    max-w-6xl
    flex
    flex-col
    md:flex-row
    items-center
    justify-between
    z-0
  `}

  .select-type {
    ${tw`
      mb-4
      md:mb-0
      md:px-4
      h-full
      w-full
      md:max-w-xs
      flex
      flex-row
      md:flex-col
      items-start
      justify-between
      overflow-x-scroll
      scrollbar-hide
    `}
  }

  .menu-items {
    ${tw`
      flex
      items-center
      justify-start
      w-48
      min-w-max
      md:w-56
      p-2
      pr-6
      rounded-[2.5rem]
      cursor-pointer

      transition
      duration-200
      ease-in-out
    `}

    .img-box {
      ${tw`
        w-12
        h-12
        md:w-14
        md:h-14
        p-2
        md:p-3
        flex
        items-center
        justify-center
        rounded-full
      `}

      img {
        ${tw`
          w-full
          h-full
          object-cover
        `}
      }
    }

    h2 {
      ${tw`
        ml-6
        text-lg
        font-bold
      `}
    }

    :hover {
      ${tw`
        bg-b-orange
        bg-opacity-50
      `}

      .img-box {
        ${tw`
          bg-opacity-80
          bg-white  
        `}
      }
    }
  }

  .menu-items.active {
    ${tw`
      bg-b-orange
    `}

    .img-box {
      ${tw`
        bg-white
      `}
    }

    h2 {
      ${tw`
        text-gray-200
      `}
    }
  }
`;
export default Crmenu;
