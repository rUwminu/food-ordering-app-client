import React, { useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";

// redux
import { useDispatch } from "react-redux";
import { userSignInAccount } from "../../../redux/actions/userAction";

// Mock User data API
import { userAccList } from "../../../assets/restaurantData/userData";

const LoginForm = () => {
  const dispatch = useDispatch();
  const inputState = {
    email: "",
    password: "",
  };

  const [inputValue, setInputValue] = useState(inputState);
  const [isError, setIsError] = useState();

  const handleLogin = () => {
    try {
      const user = userAccList.find((x) => x.email === inputValue.email);

      if (!user) {
        setIsError({ emailError: "Invalid Email" });
      }

      if (user) {
        const { password } = user;

        if (inputValue.password === "" || inputValue.password !== password) {
          console.log("error");
          setIsError({ passwordError: "Invalid Password" });
        } else {
          dispatch(userSignInAccount(user));
        }
      }
    } catch (err) {
      setIsError({ error: "Server Error" });
    }
  };

  return (
    <MainContainer>
      <h1>
        Welcome To <span>Foodie</span>
      </h1>
      <span className="span-title">
        Order your meals in
        <br />
        no time!
      </span>
      <h2>Sign In!</h2>
      <div className="input-item">
        <input
          onChange={(e) =>
            setInputValue({ ...inputValue, email: e.target.value })
          }
          type="text"
          className="input-box"
          required
        />
        <span className="input-ph">Email</span>
      </div>
      {isError && isError.emailError && (
        <div className="error-msg">{isError.emailError}</div>
      )}
      <div className="input-item">
        <input
          onChange={(e) =>
            setInputValue({ ...inputValue, password: e.target.value })
          }
          type="password"
          className="input-box"
          required
        />
        <span className="input-ph">Password</span>
      </div>
      {isError && isError.passwordError && (
        <div className="error-msg">{isError.passwordError}</div>
      )}

      <div onClick={() => handleLogin()} className="login-btn">
        Login
      </div>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  ${tw`
    w-full
    max-w-md
    flex
    flex-col
    items-start
    justify-center
    p-4
  `}

  h1 {
    ${tw`
        text-2xl
        lg:text-3xl
    `}

    span {
      ${tw`
        font-semibold
        text-b-orange
      `}
    }
  }

  .span-title {
    ${tw`
        pt-1
        pb-4
        text-base
        md:text-lg
    `}
  }

  h2 {
    ${tw`
        text-lg
        font-semibold
    `}
  }

  .input-item {
    ${tw`
        relative
        mt-4
        w-full
        md:max-w-sm
    `}

    input {
      ${tw`
        w-full
        px-3
        py-4
        border
        border-gray-400
        rounded-md

        transition-all
        duration-200
        ease-in-out
      `}

      :focus {
        ${tw`
            outline-none
            border-gray-900
        `}
      }
    }

    span {
      ${tw`
        absolute
        left-0
        py-[14px]
        px-3
        text-lg
        font-semibold
        text-gray-600

        transition-all
        duration-200
        ease-in-out
      `}
    }

    input:focus ~ span,
    input:valid ~ span {
      ${tw`
        py-0
        top-0
        text-sm
      `}
    }
  }

  .error-msg {
    ${tw`
      text-red-500
      font-semibold
    `}
  }

  .login-btn {
    ${tw`
        mt-4
        w-full
        md:max-w-sm
        py-3
        text-lg
        text-center
        font-semibold
        text-gray-100
        bg-b-orange
        rounded-md
        cursor-pointer

        transition-all
        duration-200
        ease-in-out
    `}

    :hover {
      ${tw`
        bg-opacity-90
      `}
    }
  }
`;

export default LoginForm;
