import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

// svg
import HeroSvg from '../../assets/svg/hero-main.svg'
import PlaySvg from '../../assets/svg/play.svg'

const Hero = () => {
  return (
    <HeroSection>
      <div className='hero-info'>
        <div className='hero-tag'>Super Fast Delivery</div>
        <h1 className='hero-title'>
          Deliver <span>your</span>
          <br />
          Food Within
          <br />
          <span>30</span> min
        </h1>
        <p className='hero-info'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit lorem.
        </p>
        <div className='hero-btn-box'>
          <div className='get-start-btn'>Get Started</div>
          <div className='play-btn'>
            <img src={PlaySvg} alt='' />
            <span>Watch Video</span>
          </div>
        </div>
      </div>
      <div className='hero-img'>
        <img src={HeroSvg} alt='' />
      </div>
    </HeroSection>
  )
}

const HeroSection = styled.div`
  ${tw`
    px-4
    lg:px-0
    pt-20
    md:pt-0
    pb-16
    mx-auto
    h-full
    min-h-[100vh]
    w-full
    max-w-6xl
    flex
    flex-col-reverse
    md:flex-row
    items-center
    justify-center
  `}

  .hero-info {
    ${tw`
      w-full
      mt-10
      md:mt-0
      md:w-[70%]
    `}

    .hero-tag {
      ${tw`
        w-56
        py-1
        mb-8
        text-lg
        text-center
        font-semibold
        text-b-orange
        bg-b-orange
        bg-opacity-10
        rounded-md
      `}
    }

    .hero-title {
      ${tw`
        text-3xl
        md:text-4xl
        lg:text-5xl
        font-bold
        tracking-wide
      `}

      span {
        ${tw`
          text-b-orange
        `}
      }
    }

    .hero-info {
      ${tw`
        my-5
        font-semibold
      `}
    }

    .hero-btn-box {
      ${tw`
        w-full
        flex
        items-center
        justify-start
      `}

      .get-start-btn {
        ${tw`
          py-3
          w-full
          max-w-[40%]
          text-lg
          text-center
          font-semibold
          bg-b-orange
          text-gray-200
          rounded-3xl
          cursor-pointer

          transition
          duration-200
          ease-in-out
        `}

        :hover {
          ${tw`
            bg-opacity-80
            shadow-lg
          `}
        }
      }

      .play-btn {
        ${tw`
          h-14
          ml-4
          pr-4
          flex
          items-center
          justify-center
          cursor-pointer
          rounded-[2rem]

          transition
          duration-200
          ease-in-out
        `}

        img {
          ${tw`
            h-full
          `}
        }

        span {
          ${tw`
            ml-3
            text-lg
            font-semibold
          `}
        }

        :hover {
          ${tw`
            bg-opacity-50
            bg-gray-300
          `}
        }
      }
    }
  }

  .hero-img {
    ${tw`
      w-full
    `}

    img {
      ${tw`
        w-full
        object-cover
      `}
    }
  }
`

export default Hero
