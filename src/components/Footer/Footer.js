import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <FooterContainer>
      <div className='inner-container'>
        <div className='list-box'>
          <h1>Information</h1>
          <Link to='info/type?name=term' className='list-items'>
            Terms and conditions
          </Link>
          <Link to='info/type?name=about' className='list-items'>
            About us
          </Link>
          <Link to='info/type?name=team' className='list-items'>
            Our Team
          </Link>
          <Link to='info/type?name=policy' className='list-items'>
            Privary Policy
          </Link>
          <Link to='info/contact' className='list-items'>
            Contact Us
          </Link>
        </div>
        <div className='list-box'>
          <h1>My Account</h1>
          <div className='list-items'>My Orders</div>
          <div className='list-items'>My Reviews</div>
          <div className='list-items'>My Account</div>
        </div>
        <div className='list-box'>
          <h1>Popular Cities</h1>
          <div className='list-items'>Kuala Lumpur</div>
          <div className='list-items'>Selangor</div>
          <div className='list-items'>Johor</div>
        </div>
      </div>
    </FooterContainer>
  )
}

const FooterContainer = styled.div`
  ${tw`
    w-full
    pt-14
    pb-10
    bg-gray-800

    transition-all
    duration-200
    ease-in-out
  `}

  .inner-container {
    ${tw`
        mx-auto
        px-4
        lg:px-0
        w-full
        max-w-6xl
        flex
        flex-wrap
      `}

    .list-box {
      ${tw`
        flex
        flex-grow
        flex-col
        items-start
        justify-start
      `}

      h1 {
        ${tw`
            mb-3
            text-lg
            text-gray-300
            font-semibold
        `}
      }

      .list-items {
        ${tw`
            mb-1
            text-gray-400
            cursor-pointer
            
            transition
            duration-200
            ease-in-out
        `}

        :hover {
          ${tw`
            underline
          `}
        }
      }

      :nth-child(3) {
        flex-grow: 2;
      }
    }
  }
`

export default Footer
