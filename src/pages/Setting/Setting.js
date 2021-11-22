import React, { useState, useEffect } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { Link, useSearchParams, useNavigate } from "react-router-dom";

// Redux
import { useDispatch, useSelector } from "react-redux";
//import { removeItemFromCart } from "../../redux/actions/orderAction";

// Form Components
import { MyProfile, MyAddressBook, MyOrder } from "../../components/index";

// Material ui icons
import {
  KeyboardArrowDown,
  AssignmentInd,
  ViewList,
  Room,
} from "@mui/icons-material";

const Setting = () => {
  const navigate = useNavigate();

  const [isMobile, setIsMobile] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get("name");

  const [optionType, setOptionType] = useState("profile");

  const userSignIn = useSelector((state) => state.userSignIn);
  const { user } = userSignIn;

  const handleResize = () => {
    if (window.innerWidth < 624) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    if (!user) navigate("/food-ordering-app-client");
    if (name) setOptionType(name);
  }, [name, user]);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <MainContainer>
      <div className="inner-container">
        <SideBarContainer
          className={`${isMobile ? "w-20" : "w-48 min-w-[12rem]"}`}
        >
          <Link
            to="/food-ordering-app-client/user/type?name=profile"
            className={`option-item ${optionType === "profile" && "active"} ${
              isMobile && "icon-box"
            }`}
          >
            <AssignmentInd className="option-icon" />
            <h2 className={`${isMobile ? "hidden" : "inline-flex"}`}>
              My Profile
            </h2>
          </Link>

          <Link
            to="/food-ordering-app-client/user/type?name=address"
            className={`option-item ${optionType === "address" && "active"} ${
              isMobile && "icon-box"
            }`}
          >
            <Room className="option-icon" />
            <h2 className={`${isMobile ? "hidden" : "inline-flex"}`}>
              My Address Book
            </h2>
          </Link>

          <Link
            to="/food-ordering-app-client/user/type?name=order"
            className={`option-item ${optionType === "order" && "active"} ${
              isMobile && "icon-box"
            }`}
          >
            <ViewList className="option-icon" />
            <h2 className={`${isMobile ? "hidden" : "inline-flex"}`}>
              My Order
            </h2>
          </Link>
        </SideBarContainer>
        <FormContainer>
          {optionType === "profile" && <MyProfile />}
          {optionType === "address" && <MyAddressBook />}
          {optionType === "order" && <MyOrder />}
        </FormContainer>
      </div>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  ${tw`
    pt-28
    pb-16
    px-4
    lg:px-0
    w-full
    min-h-[100vh]
    overflow-x-hidden
  `}

  .inner-container {
    ${tw`
        flex
        items-start
        justify-start
        mx-auto
        w-full
        max-w-6xl
    `}
  }
`;

const SideBarContainer = styled.div`
  ${tw`
    mr-4
    md:mr-8
    h-screen

    transition-all
    duration-500
    ease-in-out
  `}

  .option-item {
    ${tw`
        mb-2
        py-2
        px-3
        flex
        items-center
        justify-start
        text-gray-600
        rounded-md
        cursor-pointer

        transition-all
        duration-200
        ease-in-out
    `}

    .option-icon {
      ${tw`
        mr-2
      `}
    }

    h2 {
      ${tw`
        font-semibold
      `}
    }

    :hover {
      ${tw`
        bg-opacity-20
        bg-b-orange
      `}
    }
  }

  .option-item.active {
    ${tw`
        bg-opacity-20
        bg-b-orange
        text-b-orange
    `}
  }

  .option-item.icon-box {
    ${tw`
        w-14
        h-14
        justify-center
    `}

    .option-icon {
      ${tw`
        mr-0
      `}
    }
  }
`;

const FormContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-col
    items-start
    justify-start
    py-10
    px-8
    bg-white
    rounded-md
    shadow-md

    transition-all
    duration-500
    ease-in-out

    overflow-x-hidden
  `}
`;

export default Setting;
