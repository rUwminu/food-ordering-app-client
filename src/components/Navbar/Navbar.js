import React, { useState, useEffect } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Redux
import { useSelector } from "react-redux";

// Util function
import getFirstCharaterOfUsername from "../../utils/getFirstCharOfUsername";

// Material ui icons
import {
  Search,
  ShoppingCart,
  KeyboardArrowDown,
  AssignmentInd,
  ViewList,
  Logout,
} from "@mui/icons-material";

// Svg
import LogoSvg from "../../assets/icons-svg/logo.svg";

const Navbar = () => {
  let lastScroll = 0;

  const [isLinkActive, setIsLinkActive] = useState("home");
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isScrollTop, setIsScrollTop] = useState(true);
  const [isMobile, setIsMobile] = useState();
  const [isDropOption, setIsDropOption] = useState(false);

  const userSignIn = useSelector((state) => state.userSignIn);
  const { user } = userSignIn;

  const orderList = useSelector((state) => state.orderList);
  const { myCart } = orderList;

  const handleResize = () => {
    if (window.innerWidth < 908) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  const handleScroll = () => {
    const currentTop = window.scrollY;

    if (currentTop <= 0) {
      setIsScrollTop(true);
    }
    if (currentTop > lastScroll) {
      setIsScrollTop(false);
    }

    lastScroll = currentTop;
  };

  useEffect(() => {
    handleResize();
    handleScroll();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <NavContainer
      className={`${
        isScrollTop ? "py-6 bg-none" : "py-[10px] bg-white shadow-md"
      }`}
    >
      <div className="inner-container">
        <div className="logo-container">
          <img src={LogoSvg} alt="" />
          <h1>Foodie</h1>
        </div>
        {!isMobile && (
          <div className="links-container">
            <Link
              to="/"
              onClick={() => setIsLinkActive("home")}
              className={`links-items ${
                isLinkActive === "home" && "text-dred"
              }`}
            >
              Home
            </Link>
            <Link
              to="/"
              onClick={() => setIsLinkActive("services")}
              className={`links-items ${
                isLinkActive === "services" && "text-dred"
              }`}
            >
              Services
            </Link>
            <Link
              to="/"
              onClick={() => setIsLinkActive("menu")}
              className={`links-items ${
                isLinkActive === "menu" && "text-dred"
              }`}
            >
              Menu
            </Link>
            <Link
              to="info/type?name=about"
              onClick={() => setIsLinkActive("contact")}
              className={`links-items ${
                isLinkActive === "contact" && "text-dred"
              }`}
            >
              About us
            </Link>
          </div>
        )}
        {isMobile && (
          <AbsoluteNav
            className={`${
              isActive ? "translate-x-0 shadow-md" : "translate-x-full"
            }`}
          >
            <Link
              to={`/`}
              className={`nav-link ${isLinkActive === "home" && "text-dred"}`}
            >
              Home
            </Link>
            <Link
              to={`/`}
              className={`nav-link ${
                isLinkActive === "services" && "text-dred"
              }`}
            >
              Services
            </Link>
            <Link
              to={`/`}
              className={`nav-link ${isLinkActive === "menu" && "text-dred"}`}
            >
              Menu
            </Link>
            <Link
              to={`/`}
              className={`nav-link ${
                isLinkActive === "contact" && "text-dred"
              }`}
            >
              Contact
            </Link>
          </AbsoluteNav>
        )}
        <div className="function-btn-container">
          <div className="search-box">
            <input
              type="text"
              className={`${
                isSearchActive ? "w-44 opacity-100" : "w-0 p-0 opacity-0"
              }`}
            />
            <Search
              onClick={() => setIsSearchActive(!isSearchActive)}
              className={`icon-style ${isSearchActive && "search-active"}`}
            />
          </div>
          <Link to="cart" className="cart-box">
            <ShoppingCart
              className={`icon-style ${isMobile && isSearchActive && "hidden"}`}
            />
            {myCart.length > 0 && <span className="red-dot">&nbsp;</span>}
          </Link>
          {user ? (
            <div className="user-box">
              <div className="user-logo">
                {getFirstCharaterOfUsername(user.username)}
              </div>
              <h1>{user.username}</h1>
              <KeyboardArrowDown
                onClick={() => setIsDropOption(!isDropOption)}
                className={`more-btn ${isDropOption && "active"}`}
              />
              <div
                onMouseLeave={() => setIsDropOption(false)}
                className={`drop-option-list ${isDropOption && "active"}`}
              >
                <h1>Option</h1>
                <Link
                  to="/user/type?name=profile"
                  onClick={() => setIsDropOption(false)}
                  className="option-item"
                >
                  <span>My Profile</span>
                  <AssignmentInd className="option-icon" />
                </Link>
                <Link
                  to="/user/type?name=myorder"
                  onClick={() => setIsDropOption(false)}
                  className="option-item"
                >
                  <span>My Order</span>
                  <ViewList className="option-icon" />
                </Link>
                <Link
                  to="/login"
                  onClick={() => setIsDropOption(false)}
                  className="option-item"
                >
                  <span>Logout</span>
                  <Logout className="option-icon" />
                </Link>
              </div>
            </div>
          ) : (
            <div
              className={`login-btn ${isMobile && isSearchActive && "hidden"}`}
            >
              Login
            </div>
          )}
          {isMobile && (
            <Burger
              className={`${isActive && "line-active"}`}
              onClick={() => setIsActive(!isActive)}
            >
              <div className={`line-1`} />
              <div className={`line-2`} />
              <div className={`line-3`} />
            </Burger>
          )}
        </div>
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  ${tw`
    fixed
    top-0
    left-0
    w-full

    transition-all
    duration-200
    ease-in-out
    z-10
  `}

  .inner-container {
    ${tw`
      px-4
      lg:px-0
      mx-auto
      w-full
      max-w-6xl
      flex
      items-center
      justify-between
    `}
  }

  .logo-container {
    ${tw`
      flex
      items-center
      justify-center
    `}

    img {
      ${tw`
        w-16
        sm:w-20
        md:w-24
        mr-3
      `}
    }

    h1 {
      ${tw`
        hidden
        sm:inline-flex
        text-3xl
        md:text-4xl
        font-light
      `}
    }
  }

  .links-container {
    ${tw`
      flex
      items-center
      justify-center
    `}

    .links-items {
      color: #412c28;

      ${tw`
        mx-6
        text-lg
        font-semibold

        transition
        duration-200
        ease-in-out
      `}

      :hover {
        color: #fa1b13;
      }
    }
  }

  .function-btn-container {
    ${tw`
      flex
      items-center
      justify-center
    `}

    .icon-style {
      ${tw`
        mr-2
        flex
        items-center
        justify-center
        w-10
        h-10
        p-2
        text-gray-600
        rounded-full

        transition-all
        duration-200
        ease-in-out
      `}

      :hover {
        ${tw`
          text-gray-900
        `}
        background-color: rgba(229, 231, 235, 0.75);
      }
    }

    .icon-style.search-active {
      ${tw`
        absolute
        -left-0
        top-0
        bottom-0
      `}
    }

    .cart-box {
      ${tw`
        relative
      `}

      .red-dot {
        ${tw`
          w-3
          h-3
          absolute
          top-1
          right-3
          bg-b-orange
          rounded-full
        `}
      }
    }

    .search-box {
      ${tw`
        relative
        flex
        items-center
        justify-center
      `}

      input {
        ${tw`
          py-2
          pl-8
          pr-3
          rounded-3xl

          transition-all
          duration-200
          ease-in-out
        `}
      }
    }

    .user-box {
      ${tw`
        relative
        flex
        items-center
        justify-center
        z-30
      `}

      .user-logo {
        ${tw`
          flex
          items-center
          justify-center
          mr-3
          w-12
          h-12
          md:w-14
          md:h-14
          min-w-[3rem]
          md:min-w-[3.5rem]
          text-lg
          font-semibold
          border-4
          border-gray-400
          bg-b-orange
          text-gray-50
          rounded-full
        `}
      }

      h1 {
        ${tw`
          hidden
          md:inline-flex
          mr-2
          font-semibold
        `}
      }

      .more-btn {
        ${tw`
          p-2
          w-10
          h-10
          bg-opacity-75
          rounded-full
          cursor-pointer

          transition-all
          duration-500
          ease-in-out
        `}

        :hover {
          ${tw`
            bg-gray-200
          `}
        }
      }

      .more-btn.active {
        ${tw`
          -rotate-180
        `}
      }

      .drop-option-list {
        ${tw`
          absolute
          right-0
          top-16
          h-0
          px-2
          w-48
          bg-white
          opacity-0
          rounded-md
          shadow-md
          overflow-hidden

          transition-all
          duration-500
          ease-in-out
        `}

        h1 {
          ${tw`
            text-lg
            font-semibold
          `}
        }

        .option-item {
          ${tw`
            pr-2
            py-2
            w-full
            flex
            items-center
            justify-between
            text-base
            text-gray-800
            font-semibold
            rounded-md
            cursor-pointer

            transition-all
            duration-200
            ease-in-out
          `}

          :hover {
            ${tw`
              pl-2
              bg-gray-100
            `}
          }
        }
      }

      .drop-option-list.active {
        ${tw`
          py-2
          h-44
          opacity-100
        `}
      }
    }

    .login-btn {
      ${tw`
        py-[6px]
        px-8
        text-lg
        font-semibold
        text-gray-200
        rounded-3xl
        bg-b-orange
        cursor-pointer

        transition
        duration-200
        ease-in-out
      `}

      :hover {
        ${tw`
          bg-opacity-80
        `}
      }
    }
  }

  .line-active {
    .line-1 {
      transform: rotate(-45deg) translate(-6px, 6px);
    }

    .line-2 {
      opacity: 0;
      transform: translate(100%);
    }

    .line-3 {
      transform: rotate(45deg) translate(-5px, -5px);
    }
  }
`;

const Burger = styled.div`
  ${tw`
    ml-2
    h-10
    w-10
    p-2
    flex
    flex-col
    items-center
    justify-around
    cursor-pointer
    bg-opacity-90
    hover:bg-gray-200
    rounded-full
    transition
    duration-200
    ease-in-out
    z-30
  `}

  div {
    ${tw`
      w-6
      h-[2px]
      bg-gray-900
      transition
      duration-200
      ease-in-out
    `}
  }
`;

const AbsoluteNav = styled.div`
  ${tw`
    absolute
    top-0
    right-0
    pt-36
    px-10
    w-full
    h-screen
    bg-main
    flex
    flex-col
    items-center

    transition-all
    duration-500
    ease-in-out
    z-20
  `}

  .nav-link {
    ${tw`
        mb-4
        lg:mb-0
        px-4
        text-xl
        text-gray-900
        font-semibold
        cursor-pointer
        hover:text-gray-700
        
        transition
        duration-200
        ease-in-out
      `}
  }
`;

export default Navbar;
