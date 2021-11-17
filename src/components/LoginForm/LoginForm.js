import React, { useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";

const LoginForm = () => {
  const inputState = {
    emai: "",
    password: "",
  };

  const [inputValue, setInputValue] = useState(inputState);

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

      <div className="login-btn">Login</div>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  ${tw`
    w-full
    max-w-md
    flex
    flex-col
    items-center
    justify-center
    p-4
  `}

  h1 {
    ${tw`
        text-xl
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
        text-center
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
