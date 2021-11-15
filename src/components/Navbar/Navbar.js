import React, { useState, useEffect } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

// Material ui icons
import { Search, ShoppingCart } from '@mui/icons-material'

// Svg
import LogoSvg from '../../assets/icons-svg/logo.svg'

const Navbar = () => {
  let lastScroll = 0

  const [isLinkActive, setIsLinkActive] = useState('home')
  const [isSearchActive, setIsSearchActive] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const [isScrollTop, setIsScrollTop] = useState(true)
  const [isMobile, setIsMobile] = useState()
  const [isDropOption, setIsDropOption] = useState(false)

  const handleResize = () => {
    if (window.innerWidth < 908) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }

  const handleScroll = () => {
    const currentTop = window.scrollY

    if (currentTop <= 0) {
      setIsScrollTop(true)
    }
    if (currentTop > lastScroll) {
      setIsScrollTop(false)
    }

    lastScroll = currentTop
  }

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll)
  }, [])

  return (
    <NavContainer
      className={`${
        isScrollTop ? 'py-6 bg-none' : 'py-[10px] bg-gray-100 shadow-md'
      }`}
    >
      <div className='inner-container'>
        <div className='logo-container'>
          <img src={LogoSvg} alt='' />
          <h1>Foodie</h1>
        </div>
        {!isMobile && (
          <div className='links-container'>
            <Link
              to='/'
              onClick={() => setIsLinkActive('home')}
              className={`links-items ${
                isLinkActive === 'home' && 'text-dred'
              }`}
            >
              Home
            </Link>
            <Link
              to='/'
              onClick={() => setIsLinkActive('services')}
              className={`links-items ${
                isLinkActive === 'services' && 'text-dred'
              }`}
            >
              Services
            </Link>
            <Link
              to='/'
              onClick={() => setIsLinkActive('menu')}
              className={`links-items ${
                isLinkActive === 'menu' && 'text-dred'
              }`}
            >
              Menu
            </Link>
            <Link
              to='info/type?name=about'
              onClick={() => setIsLinkActive('contact')}
              className={`links-items ${
                isLinkActive === 'contact' && 'text-dred'
              }`}
            >
              About us
            </Link>
          </div>
        )}
        {isMobile && (
          <AbsoluteNav
            className={`${
              isActive ? 'translate-x-0 shadow-md' : 'translate-x-full'
            }`}
          >
            <Link
              to={`/`}
              className={`nav-link ${isLinkActive === 'home' && 'text-dred'}`}
            >
              Home
            </Link>
            <Link
              to={`/`}
              className={`nav-link ${
                isLinkActive === 'services' && 'text-dred'
              }`}
            >
              Services
            </Link>
            <Link
              to={`/`}
              className={`nav-link ${isLinkActive === 'menu' && 'text-dred'}`}
            >
              Menu
            </Link>
            <Link
              to={`/`}
              className={`nav-link ${
                isLinkActive === 'contact' && 'text-dred'
              }`}
            >
              Contact
            </Link>
          </AbsoluteNav>
        )}
        <div className='function-btn-container'>
          <div className='search-box'>
            <input
              type='text'
              className={`${
                isSearchActive ? 'w-44 opacity-100' : 'w-0 p-0 opacity-0'
              }`}
            />
            <Search
              onClick={() => setIsSearchActive(!isSearchActive)}
              className={`icon-style ${isSearchActive && 'search-active'}`}
            />
          </div>
          <ShoppingCart
            className={`icon-style ${isMobile && isSearchActive && 'hidden'}`}
          />
          <div
            className={`login-btn ${isMobile && isSearchActive && 'hidden'}`}
          >
            Login
          </div>
          {isMobile && (
            <Burger
              className={`${isActive && 'line-active'}`}
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
  )
}

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
        w-20
        md:w-24
        mr-3
      `}
    }

    h1 {
      ${tw`
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
          px-3
          rounded-3xl

          transition-all
          duration-200
          ease-in-out
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
`

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
`

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
`

export default Navbar
